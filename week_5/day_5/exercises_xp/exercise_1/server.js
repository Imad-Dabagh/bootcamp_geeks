const express = require("express")
const app = express()

const blogPosts = [
  {
    id: 0,
    title: "JavaScript Intro",
    content: "JavaScript is a wide used language",
  },
  {
    id: 1,
    title: "Python Intro",
    content: "Python is a wide used language",
  },
  {
    id: 2,
    title: "PHP Intro",
    content: "PHP is a wide used language",
  },
];

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

app.use(express.json());

// GET /posts: Return a list of all blog posts.
app.get('/posts', (req, res) => {
    res.json(blogPosts)
})

// GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', (req,res) => {
    const id = Number(req.params.id);
    const post = blogPosts.find(post => post.id === id);
    post ? res.json(post) : res.send("Id Not Found")
})

// POST /posts: Create a new blog post.
app.post("/posts", (req, res) => {
  const newPost = {
    id: blogPosts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id: Update an existing blog post.
app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = blogPosts.findIndex((post) => post.id === id);

  if (index === -1) {
    return res.status(404).send("Id Not Found");
  }

  const updatedPost = {
    id: blogPosts[index].id,
    title: req.body.title,
    content: req.body.content,
  };

  blogPosts[index] = updatedPost;
  res.status(200).json("Post updated");

});

// DELETE /posts/:id: Delete a blog post.
app.delete('/posts/:id', (req,res) => {
    const id = Number(req.params.id);
    const index = blogPosts.findIndex(post => post.id === id);
    if (index === -1) {
      return res.status(404).send("Id Not Found");
    }
    blogPosts.splice(index, 1);
    res.status(200).json("Post deleted");
})