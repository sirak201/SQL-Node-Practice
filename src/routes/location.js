const express = require("express");
const router = express.Router();
const { getLocations } = require("../utility/sql_commands");
const { checkLocation } = require("../utility/validation");
const { createLocation } = require("../utility/sql_commands");

router.get("/", (req, res) => {
  getLocations(res);
});

router.post("/create", (req, res) => {
  const err = checkLocation(req.body);

  if (Object.keys(err).length !== 0) {
    res.json({ error: { ...err } });
    return;
  }

  const { latitude, longitude, title } = req.body;
  createLocation(res, latitude, longitude, title);
});

module.exports = router;
