const conn = require('./conn').conn
const pageSize = 15

function limit(page){
    return (page - 1) * pageSize + ',' + pageSize
}

// category
const category = {
    add(obj){
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO category (name) VALUES (' + obj.name + ')',  (error, results, fields) => {
                if (error) reject(error)
                resolve(results) 
            })
        })
    },

    getList(){
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM category ORDER by id ASC',  (error, results, fields) => {
                if (error) reject(error)
                resolve(results) 
            })
        })
    },

    del(id){
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM category WHERE id = ' + id,  (error, results, fields) => {
                if (error) reject(error)
                resolve(results) 
            })
        })
    }
}

const article = {
    add(obj){
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO article (title, content) VALUES (' + obj.title + ',' + obj.content +')',  (error, results, fields) => {
                if (error) reject(error)
                resolve(results) 
            })
        })
    },

    getById(){
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM article WHERE id = ' + id + ' LIMIT 1',  (error, results, fields) => {
                if (error) reject(error)
                resolve(results) 
            })
        })
    },

    getList({page = 1, categoryId} = {}){
        categoryId = categoryId ? 'WHERE categoryId = ' + categoryId : ''
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM article ' + categoryId + ' ORDER BY createtime DESC LIMIT ' + limit(page),  (error, results, fields) => {
                if (error) reject(error)
                resolve(results) 
            })
        })
    },

    del(id){
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM article WHERE id = ' + id,  (error, results, fields) => {
                if (error) reject(error)
                resolve(results) 
            })
        })
    }
}

module.exports = {category, article}