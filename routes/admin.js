const express = require("express");
const router = express.Router();

router.use("/blog/create", (req, res) => {
  // var path = require("path");

  // var x = path.join(__dirname, "../views/admin", "blog-create.html");

  // res.sendFile(x);

  res.render("admin/blog-create");
});

router.use("/blogs/:blogid", (req, res) => {
  // var path = require("path");

  // var x = path.join(__dirname, "../views/admin", "blog-edit.html");

  // res.sendFile(x);
  res.render("admin/blog-edit");
});

router.use("/blogs", (req, res) => {
  // var path = require("path");

  // var x = path.join(__dirname, "../views/admin", "blog-list.html");

  // res.sendFile(x);
  res.render("admin/blog-list");
});

module.exports = router;
