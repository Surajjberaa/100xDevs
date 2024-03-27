import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import { CreateCard } from './components/CreateCard'

function App() {

  const [card, setCard] = useState([])

useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/allCard")
      const data = await response.json()
      console.log(data.card);
      setCard(data.card)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  fetchData();

  setInterval(fetchData, 2000)
},[]
)

  return (
    <>
      <CreateCard/>
      <Card cards={card}/>
    </>
  )
}

export default App



  // const cards = {
  //   name: "Suraj",
  //   desc: "Full Stack Web Dev and Web 3 enthusiast",
  //   linkedin: "https://www.linkedin.com/in/suraj-bera-34b656188/",
  //   twitter: "https://twitter.com/Suraj_Bera_",
  //   interest: "Technology, gym, etc"
  // }
