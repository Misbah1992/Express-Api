const express = require("express");
// const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
const posts = require("./routes/post.route")
const logger = require("./middleware/logger.js")
const errorHandler = require("./middleware/error.js")

// app.use(express.static(path.join(__dirname,"public")))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(logger)

app.use("/api/posts",posts)

app.use(errorHandler)


app.listen(port, () => {
  console.log(`server running ${port} `)
});