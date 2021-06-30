import { useState } from 'react';
import './App.css';

function App() {

  const [label,setLabel] =useState("Want some Willy Wonka special candies?")
  const handleSubmit = ()=>{
    setLabel("No! You are already too sweet ^_^")
  }

  return (
    <div className="App">
      <h1>{label}</h1>
      <button onClick={handleSubmit}>
       Candies here! 
      </button>
    </div>    
  );
}

export default App;
