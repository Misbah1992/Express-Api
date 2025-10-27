const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
const posts = require("./routes/post.route")

// app.use(express.static(path.join(__dirname,"public")))

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/posts",posts)



app.listen(port, () => {
  console.log(`server running ${port} `)
});