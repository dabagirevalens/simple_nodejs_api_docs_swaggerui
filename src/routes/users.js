const express = require("express");
const { nanoid } = require("nanoid");
const router = express.Router();

const idLength = 8;

router.post("/", (req, res) => {
  let todo = {
    id: nanoid(idLength),
    ...req.body,
  };

  try {
    req.app.db.get("users").push(todo).write();

    return res.sendStatus(201).send("Todo saved successfully");
  } catch (error) {
    return res.sendStatus(500).send(error);
  }
});

module.exports = router;
