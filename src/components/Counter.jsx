//import { useEffect } from "react"

  export default function Counter({initCount,dec,inc,double}){

    const handleAdd=()=>{
       inc()
    }
    const handleSub=()=>{
       dec()
    }
    const handleDouble=()=>{
        double()
    }

    return(
        <>
         <h2 data-testid = "counter-header">Counter</h2>
        <h3 data-testid = "count">{initCount}</h3>       
        <button data-testid = "add-btn" onClick={handleAdd}>+</button>
        <button data-testid = "subtract-btn" onClick={handleSub}>-</button>
        <button data-testid = "double-btn" onClick={handleDouble}>Double</button>
        
        </>
    )


}

