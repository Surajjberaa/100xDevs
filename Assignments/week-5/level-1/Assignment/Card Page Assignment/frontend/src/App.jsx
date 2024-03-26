import './App.css'
import Card from './components/Card'

function App() {

  const dets = {
    name: "Suraj",
    desc: "Full Stack Web Dev and Web 3 enthusiast",
    linkedin: "https://www.linkedin.com/in/suraj-bera-34b656188/",
    twitter: "https://twitter.com/Suraj_Bera_",
    interest: "Technology, gym, etc"
  }

  return (
    <>
    <Card dets={dets}/>
    </>
  )
}

export default App
