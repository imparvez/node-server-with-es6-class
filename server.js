const express = require('express')
const path = require('path')
const open = require('open')

class Server {
    constructor(port, app) {
        this.port = port
        this.app = app
    }

    core() {
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'index.html'))
        })

        this.app.listen(this.port, () => {
            open(`http://localhost:${this.port}`)
        })
    }
}

let server = new Server(5000, express())
server.core()