const Koa = require('koa')
const dotenv = require('dotenv').config()
const bodyParser = require('koa-bodyparser')

const connectDb = require('./src/database')
const router = require('./src/routes/')


const app = new Koa()

const PORT = process.env.PORT || 3000

app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

const start = async () => {
    try {
        await connectDb()
        app.listen(PORT, () => {
            console.log(`Server is working on port ${PORT}`)
        })
    } catch (error) {
        // console.error(error)
    }
}

start()