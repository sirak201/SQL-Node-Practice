const express = require("express");
const router = express.Router();
const { checkCreateUser } = require("../utility/validation");
const { createUser, getUsers } = require("../utility/sql_commands");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/", (req, res) => {
  getUsers(res);
});

router.get("/create", async (req, res) => {
  const err = checkCreateUser(req.body);

  if (Object.keys(err).length !== 0) {
    res.json({ error: { ...err } });
    return;
  }

  const { first_name, last_name, password, username } = req.body;

  const hashPassword = await bcrypt.hash(password, saltRounds);

  createUser(res, first_name, last_name, hashPassword, username);
});

module.exports = router;
