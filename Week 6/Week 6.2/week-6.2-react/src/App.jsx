import { useMemo, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {

  const [counter, setCounter] = useState(0)
  const [inputValue, setInputValue] = useState(0)
  // let [num, setNum] = useState(0)
  

  let countNum = useMemo(()=>{
    let num = 0
    console.log("memo got called");
    for (let i = 0; i <= inputValue; i++) {
        num = num + i
        
    }
    return num
  },[inputValue])
  
  return <div>
    <input type="text" onChange={(e)=>{
       setInputValue(e.target.value)
    }} />
    <h1>sum from 1 to {inputValue} is {countNum}</h1>
    {console.log(countNum)}
    <button onClick={()=>{setCounter(counter + 1)}}>Counter {counter}</button>
    
  </div>
}


export default App;