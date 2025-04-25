import React, {useState} from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ]);

  const addVote = (index) => {
    const newVotes = [...languages];
    newVotes[index].votes++;
    setLanguages(newVotes);
  }

  return (
    <>
      <h1>Vote Your Language</h1>
      {languages.map((language, index) => (
        <div className='box' key={index}>
          <p>{language.votes}</p>
          <p>{language.name}</p>
          <button onClick={() => addVote(index)}>Click here</button>
        </div>
      ))}
    </>
  )
}

export default App