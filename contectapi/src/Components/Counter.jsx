import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../Context/Counter';
const Counter = () => {
    const counterContexxxxt = useContext(CounterContext);  
    return(
        <div>
            <button onClick={()=> counterContexxxxt.setCount(counterContexxxxt.count+1)}>Increment</button>
            <button onClick={()=> counterContexxxxt.setCount(counterContexxxxt.count-1)}>Dcrement</button>
        </div>
    )
}

export default Counter;