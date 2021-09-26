
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const image = app.model.define('image', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    url: STRING(30),
    caption: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  return image;
};
