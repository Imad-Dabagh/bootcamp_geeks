const express = require('express');
const app = express();

const {fetchPosts} = require('./data/dataService.js');

app.listen(5000, () => {
    console.log("server is listening on port 5000");
})

app.get('/posts', async (req,res) => {
    const data = await fetchPosts();
    console.log("Data has been successfully retrieved");
    res.json(data);
    
})