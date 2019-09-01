const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/fotos", (req, res) => {
  res.sendFile(__dirname + "/views/foto.html");
});
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
