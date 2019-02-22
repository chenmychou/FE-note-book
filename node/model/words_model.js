import formatDate from '../utils/formatDate'
const mongoose = require('mongoose')
const config = require('../config.js')
const Schema = mongoose.Schema
const wordsSchema = new Schema({
  word: {
    type: String
  },
  oldword: {
    type: String
  },
  strokes: { // 笔画
    type: String
  },
  pinyin: {
    type: String
  },
  radicals: { // 部首
    type: String
  },
  explanation: { // 解析
      type: String
  },
  more: { // 更多
    type: String
  }
}, { collection: config.collectionWords, versionKey: false})

module.exports = mongoose.model(config.collectionWords, wordsSchema)