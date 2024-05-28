const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "5959692",
  database: process.env.DB_NAME || "test",
});

const app = express();
const port = process.env.NODE_LOCAL_PORT || 5555;

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR)); 

app.get('/api', (req, res) => {
  pool.query("SELECT * FROM users", function(err, data) {
    res.send(data);
  });
});

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});