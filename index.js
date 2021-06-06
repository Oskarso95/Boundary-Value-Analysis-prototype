const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/simulation", (req, res) => {
  console.log(req.body.simulationName);
  res.render("simulation", { simulationName: req.body.simulationName });
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
