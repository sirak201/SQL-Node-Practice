var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "doc226664",
  port: 3306,
  database: "TestDB"
});

exports.connect = () =>
  connection.connect(err => {
    if (err) {
      console.log("error took place ", err);
      return;
    }
    console.log("SQL Connected");
  });

exports.getUsers = res => {
  var sql = "SELECT * FROM Users";
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("error took place ", err);
      res.json({ error: err.sqlMessage });
      return;
    }

    var resultCopy = result;
    resultCopy.forEach(element => delete element.password);

    res.send(resultCopy);
  });
};

exports.createUser = (res, firstname, lastname, password, username) => {
  var sql = `INSERT INTO Users (first_name, last_name, password, username) VALUES ('${firstname}', '${lastname}', '${password}', '${username}');`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.log("error took place ", err);
      res.json({ error: err.sqlMessage });
      return;
    }

    res.send(result);
  });
};

exports.getLocations = res => {
  var sql = "SELECT * FROM Locations";

  connection.query(sql, (err, result) => {
    if (err) {
      console.log("error took place ", err);
      res.json({ error: err.sqlMessage });
      return;
    }

    res.send(result);
  });
};

exports.createLocation = (res, latitude, longitude, title) => {
  var sql = `INSERT INTO Locations (latitude, longitude, title) VALUES (${latitude}, ${longitude}, '${title}');`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.log("error took place ", err);
      res.json({ error: err.sqlMessage });
      return;
    }

    res.send(result);
  });
};
