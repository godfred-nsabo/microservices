const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json())
app.use(cors());

const posts = []; // store all posts created

app.get("/posts", (_req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  let post = {
    id,
    title,
  };
  posts.push(post)
  res.status(201).send(posts);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
