const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Code Crafty1");
});

app.listen(1000, () => {
  console.log("See the terminal");
});
