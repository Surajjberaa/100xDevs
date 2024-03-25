import { useState } from "react"

export function CreateTodo(){
    const [title, setTodo] = useState("")
    const [description, setDescription] = useState("")

    return(       <div>
            <input style={{ margin: 10, padding: 10 }} type="text" placeholder="Title" onChange={(e)=>{
                setTodo(e.target.value)
                // console.log(e.target.value);
            }} /><br /><br />
            <input style={{margin: 10, padding: 10}} type="text" placeholder="Description" onChange={(e)=>{
                setDescription(e.target.value)
            }} /><br /><br />
            <button style={{
                margin: 10,
                padding: 10
            }}
            onClick={()=>{  
                fetch("http://localhost:3000/todo", 
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-Type" : "application/json"
                    }
                })
                .then(async(res)=>{
                    const json = await res.json()
                    console.log(json);
                    alert("Todo added")
                })
            }}
            >Add a Todo</button><br /><br />
        </div>
    )
}