import formatDate from '../utils/formatDate'
const mongoose = require('mongoose')
const config = require('../config.js')
const Schema = mongoose.Schema
const xiehouyuSchema = new Schema({
  riddle: { // 上句
    type: String
  },
  answer: { // 下句
    type: String
  }
}, { collection: config.collectionXiehouyu, versionKey: false})

module.exports = mongoose.model(config.collectionXiehouyu, xiehouyuSchema)