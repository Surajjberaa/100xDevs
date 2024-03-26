import React from 'react'

function Card({dets}) {
  return (
    <div style={{
            border: "3px solid white",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "left",
            color: "#CFCFCF"
    }}>
        <h1>Name: {dets.name}</h1>
        <h2>Description: {dets.desc}</h2>
        <h2>Linked In: <a href={dets.linkedin} target='_blank'>Suraj Bera</a></h2>
        <h2>Twitter: <a href={dets.twitter} target='_blank'>Suraj_Bera_</a></h2>
        <h2>Interest: {dets.interest}</h2>
    </div>
  )
}

export default Card
