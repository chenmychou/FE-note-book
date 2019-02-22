require('babel-register')({
    presets: ['env', 'babel-polyfill']
})
module.exports = require('./index')