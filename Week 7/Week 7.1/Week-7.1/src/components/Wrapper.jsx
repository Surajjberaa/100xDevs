import React from 'react'
import { useNavigate } from 'react-router-dom'

function Wrapper() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{navigate("/")}}>Landing Page</button>
        <button onClick={()=>{navigate("/dashboard")}}>Dashboard</button>
    </div>
  )
}

export default Wrapper