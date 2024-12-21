
import React from 'react';
import './App.css';
import Items from './Components/Items';
import Cart from './Components/Cart';

// import { useContext } from 'react';
// import { CounterContext } from './Context/Counter';
// import Counter from "./Components/Counter";

const  App = () => {

  // const counterState = useContext(CounterContext); 

  return (
    <div className="App"> 
     {/* <h1>Count is - {counterState.count}</h1>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/> */}

     <Items name="MacBook" price={100000}/>
     <Items name="Pendrive" price={4000}/>
     <Items name="Mobile" price={20000}/>
     <Items name="Iphone" price={60000}/>
     <Items name="Shoes" price={8000}/>
    <Cart/>
    
    </div>
  );
}

export default App;
