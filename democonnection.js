var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jorawar@123",
    database: 'education_app'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });