'use strict';

const fs = require('mz/fs');
const path = require('path');
const os = require('os');
const { encodeBase62 } = require('./base62');

let uploadDir;
if (os.type() !== 'Linux') {
  uploadDir = 'D:\\upload';
} else {
  uploadDir = '/root/data/upload';
}

/**
 * 上传文件
 * @param {*} file
 * @param {*} id
 * @param {*} res
 * @returns
 */
module.exports = {
  async upload(file, id, dir) {
    try {
      fs.accessSync(dir);
    } catch (err) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const fileType = path.extname(file.filename);
    // 使用 base62 生成短连接
    const url = encodeBase62(id) + fileType;
    const destination = path.format({
      dir,
      base: url,
    });
    try {
      fs.copyFileSync(file.filepath, destination);
      return url;
    } catch (err) {
      console.log(err);
    } finally {
      // 需要删除临时文件
      await fs.unlink(file.filepath);
    }
  },
};
