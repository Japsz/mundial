const express = require('express');

const app = express();
const port = process.env.PORT || 8000;
var connection  = require('express-myconnection');
var mysql = require('mysql');

app.use(
    connection(mysql, {
        host: '127.0.0.1',
        user: 'root',
        password: 'belitajump',
        port: 3306,
        database: 'mundial'
    }, 'pool')
);

app.get('/',(req,res) => {
    res.send("hello world");
});

app.get('/api/hello', (req, res) => {
    req.getConnection((err,connection) => {
        if(err) console.log("Error connecting: %s", err);
        connection.query("SELECT * FROM partido", (err,rows) => {
            if(err) console.log("Error Selecting: %s", err);
            console.log(rows);
            for(var i=0;i<rows.length;i++){

            }
            res.send({ express: [rows[0].estado,rows[0].nombre], });
        });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
