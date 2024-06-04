const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/home/", (req, res) => {
  res.send("hello world!");
});

app.listen(3000, () => {
  console.log("The server is on");
});
