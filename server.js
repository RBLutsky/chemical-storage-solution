const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var mysql = require('mysql');
//our application creates a group of connections that will stay open to the database and then will use and reuse the connections whenever they become free
var pool = mysql.createPool({
    //connect to MySQL Database with mysql node pkg.   
    connectionLimit: 10,
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'mydb',
    // port: 3306
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))



//the pool.getConnection() -> connection.query() -> connection.release() code flow
pool.getConnection((err, connection) => {
    if (err) throw err; // not connected!
   
    // Use the connection
    //Search for a chemical in the chemical table by name that user input
    app.get('/chemical', (req, res) => {
        let searchTerm = req.query.searchTerm;
        connection.query(`SELECT * FROM chemical WHERE chemical_name LIKE "%${searchTerm}%";`, (error, results, fields) => {
            if (error) {
                console.log('Error connecting to Db' + error);
                return;
            }
            console.log('Connection established');
            res.json(results);
            // When done with the connection, release it.
            connection.release();
            console.log("connection released");
            // Handle error after the release.
            if (error) throw error;
    // Don't use the connection here, it has been returned to the pool.
        });
    })
});


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


app.listen(7000, () => {
    console.log("Node.js is listening on port" + 7000)
})