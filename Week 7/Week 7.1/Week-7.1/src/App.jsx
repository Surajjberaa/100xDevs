import { useContext, useState } from "react"
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
      <Count/>
      </CountContext.Provider>
    </div>
  )
}

function Count() {
    console.log("rendered");
  return <div>
    <CountRenderer  />
    <Buttons  />
  </div>
}

function CountRenderer() {

  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons() {
  const {count} = useContext(CountContext);
  const {setCount} = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App