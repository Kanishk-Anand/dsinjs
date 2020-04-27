const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => res.sendFile(path.resolve("../index.html")));

app.get("/Sorting/:file", (req, res) =>
  res.sendFile(path.resolve("../Sorting/" + req.params.file))
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
