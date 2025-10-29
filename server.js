const express = require("express");
// const path = require("pa th");
const app = express();
const port = process.env.PORT || 8000;
const posts = require("./routes/post.route")
const logger = require("./middleware/logger.js")

// app.use(express.static(path.join(__dirname,"public")))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(logger)

app.use("/api/posts",posts)



app.listen(port, () => {
  console.log(`server running ${port} `)
});