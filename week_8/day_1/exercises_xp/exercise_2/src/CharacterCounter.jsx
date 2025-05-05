import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const CharacterCounter = () => {
    const [text, setText] = useState();
    const [length, setLength] = useState();
    const inputRef = useRef(0);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setText(inputValue);
        setLength(inputRef.current.value.length)
    }

  return (
    <>
        <input ref={inputRef} type="text" onChange={handleChange} />
        <p>You typed: {text}</p>
        <p>Number of charachters is: {length}</p>
    </>
  )
}

export default CharacterCounter