const express = require("express");
const app = express();

app.set("view engine", "ejs");
// const ejst = app.get("view engine");
// console.log(ejst);
var path = require("path");

var public = path.join(__dirname, "public");

app.use("/libs", express.static("node_modules"));

app.use("/static", express.static(public));

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
