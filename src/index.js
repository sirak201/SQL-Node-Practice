var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const sql_command = require("./utility/sql_commands");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

sql_command.connect();

app.use("/api/user", require("./routes/user"));

app.use("/api/location", require("./routes/location"));

app.listen(3000, () => {
  console.log("Server is running");
});
