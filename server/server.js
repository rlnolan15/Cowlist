const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");
const bodyParser = require("body-parser");
const router = require("./routes.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log(__dirname + "../public");
app.use(express.static("/Users/robnolan/HRR41/cowlist3/client/public/"));

// app.get("/api/cows", (req, res) => {
//   res.send("hi");
// });

app.use("/api", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports.app = app;
