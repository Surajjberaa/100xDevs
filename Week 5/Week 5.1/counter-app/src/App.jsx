
import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-100",
    completed: true
  }, ]); 

  
  const [titlee, setTitle] = useState()
  const [desc, setDesc] = useState()

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    // const { title, desc } = inputValues();
    setTodos([...todos, { title: titlee, description: desc, completed: false}]);
    setTitle("")
    setDesc("")

  }

  return (
    <div>
      <input type="text" id="input1" placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br />
      <input type="text" id="input2" placeholder="Description" onChange={(e) => setDesc(e.target.value)}/><br />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
