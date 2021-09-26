const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
   // port:"3308",
    user: "root",
    password: "",
    database:"paradise_lanka_tours"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  
  module.exports = con;