const express = require('express');
const router = express.Router();

let posts = [
  { id: 1, title: "post one" },
  { id: 2, title: "post two" },
  { id: 3, title: "post three" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  }
  else {
    res.status(200).json(posts);
  }
})

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ msg: `a post id the id of ${id} not found` })
  }
  else {
    res.status(200).json(post);
  }
})

router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  }
  if (!newPost.title) {
    return res.status(400).json({ msg: "please include title" })
  }

  posts.push(newPost)
  res.status(201).json(posts);
})


router.put("/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const post = posts.find((post)=> post.id=== id);
  if(!post){
    return res.status(404).json({msg: "post with id not found"})
  }
  post.title = req.body.title;
  res.status(200).json(posts);
})

module.exports = router
