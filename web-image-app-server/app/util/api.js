'use strict';
/**
 * 自动产生路由 ——注册通配路由
 */

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { upload } = require('./upload');
module.exports = {
  async init(ctx, next) {
    console.log(ctx.params.list);
    const list = ctx.params.list;
    const model = ctx.model.models[list.substring(0, list.length - 1)];
    if (model) {
      ctx.list = model;
      await next();
    } else {
      ctx.body = 'no this model';
    }
  },
  /**
   * 支持模糊查询
   * @param {*} ctx 上下文
   */
  async list(ctx) {
    const obj = {};
    if (ctx.query) {
      const filter = {};
      for (const key in ctx.query) {
        if (key === 'limit' || key === 'offset') {
          obj[key] = parseInt(ctx.query[key]);
        } else {
          filter[key] = {
            [Op.like]: `%${ctx.query[key]}%`,
          };
        }
      }
      obj.where = filter;
    }
    ctx.body = await ctx.list.findAll(obj);
  },
  async get(ctx) {
    ctx.body = await ctx.list.findByPk(ctx.params.id);
  },
  async create(ctx) {
    let res = await ctx.list.create(ctx.request.body);
    const file = ctx.request.files[0];
    if (file) {
      const url = await upload(file, res.id, ctx.app.config.imagePath);
      res = await res.update({ url });
    }
    ctx.body = res;
  },
};
