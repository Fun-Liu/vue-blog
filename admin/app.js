const Koa = require('koa')
const app = new Koa()
app.listen(3000)

const getPageType = require('./api/page').getPageType

const router = async ctx => {
    const path = ctx.request.path
    console.log(path)
    ctx.response.type = 'text'
    if(path === '/api/pagetype'){
        ctx.response.body = await getPageType()
    }else {
        ctx.response.body = 'hello world'
    }
}

app.use(router)





