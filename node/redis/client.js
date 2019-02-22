const client = require('redis').createClient()

const clientPromise = (key) => {
    return new Promise((resolve, reject) => {
        // client.on("connect", (err) => {
            // console.log('err==>>', err)
            // if (!err) {
                client.get(key, (err, res) => {
                    if (err) return reject(err)
                    resolve(res)
                })
            // }
        // })
    })
}
module.exports = clientPromise