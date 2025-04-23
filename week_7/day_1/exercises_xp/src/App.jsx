import UserFavoriteAnimals from './UserFavoriteAnimals.jsx';

function App() {
  // Exercise 1: with JSX
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  // Exercise 2 : Object
  const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <>
    {/* Exercise 1: with JSX */}
      <p>
        Hello World!
      </p>
      {myelement}
      <p>
        React is {sum} times better with JSX
      </p>

    {/* Exercise 2 : Object */}
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>

    <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </>
  )
}

export default App
