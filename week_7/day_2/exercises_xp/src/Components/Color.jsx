import React, { useEffect, useState } from 'react'

const Color = () => {
    const [favoriteColor, setFavoriteColor ] = useState('red');

    useEffect(() => {
        alert("Use Effect Reached");
        setFavoriteColor('yellow');
    }, []);

    const changeColor = () => {
        setFavoriteColor('blue');
    }

  return (
    <div><h1>My Favorite Color is {favoriteColor}</h1>
    <button onClick={changeColor} id='btnBlue' >Change color to blue</button>
    </div>
  )
}

export default Color