import formatDate from '../utils/formatDate'
const mongoose = require('mongoose')
const config = require('../config.js')
const Schema = mongoose.Schema
const idiomSchema = new Schema({
  derivation: { // 来源
    type: String
  },
  example: { // 例子
    type: String
  },
  explanation: { // 解释
    type: String
  },
  pinyin: { // 拼音
    type: String
  },
  word: { // 词语
    type: String
  },
  abbreviation: { // 首字母大写
      type: String
  }
}, { collection: config.collectionIdiom, versionKey: false})

module.exports = mongoose.model(config.collectionIdiom, idiomSchema)