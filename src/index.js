var express = require("express");
var app = express();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "doc226664",
  port: 3306
});

connection.connect(err => {
  if (err) {
    console.log("error took place ", err);
    return;
  }
  console.log(" SQL Connected");
});

app.get("/", function(req, res) {
  res.send("Test Server");
});

app.listen(3000, () => {
  console.log("Server is running");
});
