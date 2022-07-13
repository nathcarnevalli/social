'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    static associate(models) {}
  }
  Link.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      url: DataTypes.STRING,
      clicks: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Link'
    }
  )
  return Link
}
