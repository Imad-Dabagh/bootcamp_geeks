import React, { useState } from 'react'

// Exercise 2 : Events
const Events = () => {
    // Part I:
    const clickMe = () => {
        alert('I was clicked!')
    }

    // Part II:
    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            const inputValue = document.getElementById('input').value;
            alert(`The enter key was pressed, your input is: ${inputValue}`)
        }
        
    }

    // Part III:
    const [isToggleOn, setIsToggleOn] = useState('true');

    const toggle = () => {
        if (isToggleOn === true){
            setIsToggleOn(false);
        } else {
            setIsToggleOn(true);
        }
    }



  return (
    <>
    <button onClick={clickMe} >Click Me</button>
    <br /><br />
    <input type="text" id="input" onKeyDown={handleKeyDown} />
    <br /><br />
    <label>Exercise 9:</label><br />
    <button onClick={toggle} >{isToggleOn ? 'ON' : 'OFF'}</button>
    </>
  )
}

export default Events