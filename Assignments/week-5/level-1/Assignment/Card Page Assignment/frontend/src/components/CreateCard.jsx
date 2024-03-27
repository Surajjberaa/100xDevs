import { useState } from "react"

export function CreateCard(){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [twitter, setTwitter] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [interest, setInterest] = useState("")

    return(     <div>
            <h1>Create Cards</h1>
          <div style={{
        display: "flex"
    }}>
            <input style={{ margin: 10, padding: 10 }} type="text" placeholder="name" onChange={(e)=>{
                setName(e.target.value)
                // console.log(e.target.value);
            }} /><br /><br />
            <input style={{margin: 10, padding: 10}} type="text" placeholder="Description" onChange={(e)=>{
                setDescription(e.target.value)
            }} /><br /><br />
            <input style={{ margin: 10, padding: 10 }} type="text" placeholder="Twitter" onChange={(e)=>{
                setTwitter(e.target.value)
                // console.log(e.target.value);
            }} /><br /><br />
            <input style={{margin: 10, padding: 10}} type="text" placeholder="Linkedin" onChange={(e)=>{
                setLinkedin(e.target.value)
            }} /><br /><br />
            <input style={{margin: 10, padding: 10}} type="text" placeholder="Interest" onChange={(e)=>{
                setInterest(e.target.value)
            }} /><br /><br />
            <button style={{
                margin: 10,
                padding: 10
            }}
            onClick={()=>{  
                fetch("http://localhost:3000/createCard", 
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: name,
                        description: description,
                        twitter: twitter,
                        linkedin: linkedin,
                        interest: interest
                    }),
                    headers: {
                        "Content-Type" : "application/json"
                    }
                })
                .then(async(res)=>{
                    const json = await res.json()
                    console.log(json);
                    alert("Card added")
                })
            }}
            >Create Card</button><br /><br />
        </div>
        </div>
    )
}