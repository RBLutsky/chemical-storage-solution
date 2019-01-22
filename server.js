const express = require('express');
const app = express();
const mysql = require('mysql');

//connect to MySQL Database with mysql node pkg
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'chemicals',
    // port: 3306
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db' + err.stack);
        return;
    }
    console.log('Connection established');
});


//If using db as self instead of root, add to Workbench query and execute: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

//replace hcl with ${mysql.escape(userVariable)}
//wrap query with ``

connection.query(`SELECT chemical_name FROM names WHERE chemical_name LIKE 'hydrochloric%'`,  (error, results, fields)=> {
    if (error) throw error;
console.log('results', results);
});



connection.end((err) => {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});


// app.listen(7000
//     , () => {
//     console.log("None.js is listening on port" + 7000)
// })