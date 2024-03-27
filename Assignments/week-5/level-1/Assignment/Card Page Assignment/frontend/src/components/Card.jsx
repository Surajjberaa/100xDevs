import React from 'react'

function Card({cards}) {

  const deleteHandler = (id)=>{  
    fetch("http://localhost:3000/deleteCard", 
    {
        method: "DELETE",
        body: JSON.stringify({
            id
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(async(res)=>{
        const json = await res.json()
        console.log(json);
    })
}

  return (
  <div style={{
    
    display: "flex",
  }}>
  {cards.map((card)=>{
    
  return (
    <div
    key={card._id}
     style={{
            border: "3px solid black",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "left",
            color: "black",
            width: "400px",
    }}>
        <h1>Name: {card.name}</h1>
        <h2>Description: {card.description}</h2>
        <h2><a style={{
          backgroundColor: "#6042F4",
          borderRadius: "10px",
          color: "white",
          textDecoration: "none",
          padding: "6px",
        }} href={card.linkedin} target='_blank'>Linked In </a></h2>
        <h2> <a
        style={{
          backgroundColor: "#6042F4",
          borderRadius: "10px",
          color: "white",
          textDecoration: "none",
          padding: "6px",
        }}
        href={card.twitter} target='_blank'>Twitter</a></h2>
        <h2>Interest: {card.interest}</h2>
        <button style={{
                margin: 10,
                padding: 10,
                backgroundColor: "#EF454E",
                color: "whitesmoke",
                borderRadius: "5px",
            }}
            onClick={()=>deleteHandler(card._id)}
            >Delete Card</button><br /><br />
    </div>
  )})}
  </div>
)

  
}

export default Card

