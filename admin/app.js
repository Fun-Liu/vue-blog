const Koa = require('koa')
const app = new Koa()
app.listen(3000)

const db = require('./api/page')

const router = async ctx => {
    const path = ctx.request.path
    console.log(path)
    ctx.response.type = 'text'
    if(path === '/query/articles'){
        ctx.response.body = await db.article.getList()
    }else if(path === '/query/categories'){
    	ctx.response.body = await db.category.getList()
    }else{
        ctx.response.body = 'hello world'
    }
}

app.use(router)





