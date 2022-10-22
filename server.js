const express = require('express')
const app = express()
const liveServer = require('live-server')

async function main() {

    app.listen(3001, () => {
        liveServer.start({
            port: 3001,
            logLevel: 0,
            root: './public'
        })
    })
}

main()