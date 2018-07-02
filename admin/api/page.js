const conn = require('./conn').conn

function getPageType(){
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM page_type',  (error, results, fields) => {
            if (error) reject(error)
            resolve(results) 
        })
    })
}

exports.getPageType = getPageType