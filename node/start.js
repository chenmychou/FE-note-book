require('babel-register')({
    presets: ['es2015', 'babel-polyfill']
})
module.exports = require('./index')