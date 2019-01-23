const express = require('express');
const app = express();
var mysql = require('mysql');
//our application creates a group of connections that will stay open to the database and then will use and reuse the connections whenever they become free
var pool = mysql.createPool({ 
//connect to MySQL Database with mysql node pkg.  This is a shortcut for the pool.getConnection() -> connection.query() -> connection.release() code flow
    connectionLimit: 10,
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'mydb',
    // port: 3306
});


// pool.connect((err) => {
//     if (err) {
//         console.log('Error connecting to Db' + err.stack);
//         return;
//     }
//     console.log('Connection established');
// });


//If using db as self instead of root, add to Workbench query and execute: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

//replace hcl with ${mysql.escape(userVariable)}



//Search for a chemical in the chemical table by name that user input
app.get('/chemical', (req, res) => {
    pool.query(`SELECT * FROM chemical WHERE chemical_name LIKE 'hydrochloric%'`,  (error, results, fields)=> {
        if (error) throw error;
        res.json(results);
    // console.log('results', results);
    });
})


//Select a specific chemical from the chemical table by id (user click on name)
// pool.query(`SELECT * FROM chemical WHERE id = 417`, (error, results, fields) => {
//     if (error) throw error;
//     console.log('results', results);
// });

// connection.end((err) => {
//     // The connection is terminated gracefully
//     // Ensures all previously enqueued queries are still
//     // before sending a COM_QUIT packet to the MySQL server.
// });


app.listen(7000
    , () => {
    console.log("None.js is listening on port" + 7000)
})