import React from 'react';

const App2 = () => {
  
  const postData = async () => {

    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch("https://webhook.site/e293e91e-2cc6-4c99-b4fb-3912ffa6d237", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.text();
      console.log("Response from webhook:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
      <button onClick={postData}>Press me to post some data</button>
  );
};

export default App2;
