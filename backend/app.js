const express = require("express");
const cors = require("cors");

const postRoute = require("./src/routes/post.route")

const app = express();

app.use(cors());
app.use(express.json());
app.get("/test", (req, res) => {
  res.json({ 
    title: "Tiêu đề",
    description: "Khóa học"
   });
});
app.use("/api/post", postRoute);

module.exports = app;
