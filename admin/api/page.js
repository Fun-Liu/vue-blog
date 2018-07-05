const conn = require('./conn').conn

function getCategories(){
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM category',  (error, results, fields) => {
            if (error) reject(error)
            resolve(results) 
        })
    })
}

function getArticles(){
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM article',  (error, results, fields) => {
            if (error) reject(error)
            resolve(results) 
        })
    })
}

exports.getPageType = getPageType