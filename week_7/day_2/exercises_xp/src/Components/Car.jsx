import React, { useState } from 'react';
import Garage from './Garage';


const Car = ({model}) => {
    const [color] = useState('Blue');
    return (
        <div>
            <h1>This Car is {color} {model}</h1>
            <Garage size="small" />
        </div>
    );
}

export default Car;