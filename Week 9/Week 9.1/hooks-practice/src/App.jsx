// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffect } from 'react';


// import { useEffect, useState } from 'react'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useInterval';
import { useDebounce } from './hooks/useDebounce';




function useTodos(n){
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

 

  
  useEffect(() => {
    const value = setInterval(() => {
     axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false)
      })
    }, n * 1000);
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false)
      })

      return ()=>{
        clearInterval(value)
      }
  }, [n])

  return {todos, loading}
}

function App() {

  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 300); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    Debounced value is {debouncedValue}
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </>
  )

  const [count, useCount] = useState(0)

  useInterval(()=>{
    useCount(i => i + 1)
  }, 1000)

  return <div>
    Timer is {count}
  </div>

  const mouserPointer = useMousePointer()

  return <div>
    Your mouse position is {mouserPointer.x} | {mouserPointer.y}
  </div>

  const isOnline = useIsOnline()

  if (isOnline) {
    return <div>You are online</div>
  }else{
    return <div>You are not online</div>
  }
  
  const {todos, loading } = useTodos(5)

  if(loading){
    return <div>Loading.....</div>
  }

  return (
    <>
    
    {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App

// function App() {
//   const [render, setRender] = useState(true)

//   useEffect(()=>{
//     setInterval(()=>{
//       setRender(r => !r)
//     }, 5000)
//   },[])

//   return (
//     <>
//      {render? <MyComponent /> : <div></div>}
//     </>
//   )
// }


// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }
// 
// 
// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("Component mounted");
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//         console.log("Component unmounted");
//     };
//   }, []);

//   // Render UI
//   return <div>
//     Inside Component
//   </div>
// }

// class MyComponent extends React.Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.log("Component mounted");
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//     console.log("Coumponent unmounted");
//   }

//   render() {
//     // Render UI
//     return <div> Hi there </div>
//   }
// }

// export default App
