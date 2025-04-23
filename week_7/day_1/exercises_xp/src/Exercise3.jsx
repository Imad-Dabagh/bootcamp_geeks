import React, { Component } from 'react';
import './Exercise.css';
import image from './assets/s3.jpg';

class Exercise extends Component {
    
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <>
      <h1 style={style_header}>This is a header</h1>
      <p className='para' >This is a paragraph</p>
      <a href="./App.jsx" >This is a link</a>
      <h2>This is a form</h2>
      <form>
        <label>Enter your name</label><br/>
        <input type='text' />
        <button type='submit' >Submit</button>
      </form>
      <h2>Here is an image</h2>
      <img src={image} style={{width: '100px'}}/>
      <h2>This is a list</h2>
      <ul>
        <li>Coffe</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      </>
    )
  }
}


export default Exercise;