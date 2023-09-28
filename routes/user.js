const express = require("express");
const router = express.Router();
const data = {
  title: "Popular Courses",
  categories: [
    "Web Development",
    "Mobile Apps",
    "Data Analysis",
    "Programming",
  ],
  blogs: [
    {
      blogid: 1,
      title: "Complete Applied Web Development",
      description:
        "Web Development' from scratch to advanced level: Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
      image: "1.jpeg",
      isForMainPage: true,
      approval: true,
    },
    {
      blogid: 2,
      title: "Advanced Python Programming from Scratch with Python",
      description:
        "Advanced Python Lessons from Scratch. Database, Data Analysis, Bot Writing, Web Development (Django)",
      image: "2.jpeg",
      isForMainPage: true,
      approval: true,
    },
    {
      blogid: 3,
      title: "Advanced Modern Javascript Lessons from Scratch ES7+",
      description:
        "Build a solid foundation for Nodejs, Angular, React and VueJs with modern javascript lessons (ES6 & ES7+).",
      image: "3.jpeg",
      isForMainPage: false,
      approval: true,
    },
  ],
};

router.use("/blogs/:id", (req, res) => {
  res.render("users/blog-details", data);
});

router.use("/blogs", (req, res) => {
  res.render("users/blogs", data);
});

router.use("/", (req, res) => {
  res.render("users/index", data);
});

module.exports = router;
