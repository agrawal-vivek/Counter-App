import { useState } from "react";
import "./App.css";
import  Counter  from "./components/Counter";

function App() {
  const[initCount,setCount]=useState(0)
  
  const dec=()=>{
    setCount((prev)=>prev-1)
  
  }
  const inc=()=>{
    setCount((prev)=>prev+1)
  }
  const double=()=>{
    setCount((prev)=>prev*2)
  }
  return (
    <div className="App">
      <div data-testid="counter">{/* counter component */}
      <Counter 
      initCount={initCount}
      dec={dec}
      inc={inc}
      double={double}
      />
      </div>
    </div>
  );
}

export default App;
