import {useState} from "react"
import './App.css'
import {Navbar,Hero,Samples} from "./components"

function App() {
  const [theme,setTheme] = useState("dark")

  return (
    <div data-theme={theme} className="app">
     <Navbar/>
     <Hero/>
     <Samples/>
    </div>
  )
}

export default App
