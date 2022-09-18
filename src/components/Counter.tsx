import React, { useState } from 'react';
import './Counter.scss'

const Counter = () => {

    const [count, setCount] =useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '250px', margin: '15vh auto'}}>
            <button onClick={decrement}>-1</button>
            <h3>
                Counter: {count}
            </h3>
            <button onClick={increment}>+1</button>
        </div>
    );
};

export default Counter;