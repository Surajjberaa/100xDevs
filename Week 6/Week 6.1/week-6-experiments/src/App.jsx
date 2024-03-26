import { useEffect } from 'react';
import { useState } from 'react'
import React from "react"

function App() {
 const [todos, setTodos] = useState()

useEffect(
 fetch("https://sum-serever.100xdevs.com\todos")
  .then(async(res)=>{
    const json = res.json();
    setTodos(json)
  }), [])

  return(
    <>
    {todos.map(({title, description}) => <Todos title={title} description={description} />)}
    </>
  )
 
}

function Todos({title, description}){
return(
  <div>
    <h1>Title: {title}</h1>
    <h1>Description: {description}</h1>
  </div>
)
}
export default App
