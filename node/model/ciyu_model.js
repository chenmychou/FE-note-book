import formatDate from '../utils/formatDate'
const mongoose = require('mongoose')
const config = require('../config.js')
const Schema = mongoose.Schema
const ciyuSchema = new Schema({
  ci: { // 词语
    type: String
  },
  explanation: { // 解释
    type: String
  }
}, { collection: config.collectionCiYu, versionKey: false})

module.exports = mongoose.model(config.collectionCiYu, ciyuSchema)