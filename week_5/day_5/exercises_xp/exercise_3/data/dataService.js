const axios = require("axios");

const fetchPosts = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
    
  } catch (error) {
    console.log("Error: " + error);
  }
};

module.exports = { fetchPosts };
