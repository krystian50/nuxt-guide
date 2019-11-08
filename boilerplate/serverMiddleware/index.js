import fs from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import initRoutes from './routes'

const dev = !(process.env.NODE_ENV === 'production')
const app = express()

app.use(bodyParser.json())

initRoutes(app)

app.use((err, _req, res, _next) => {
    res.status(500).end(dev ? err.stack : 'Error 500')
})

app.use((_req, res) => {
    res.status(404).end('Error 404')
})

export default {
    path: '/api',
    handler: app
}
