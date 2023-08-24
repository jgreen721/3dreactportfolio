import {useState} from "react"
import './App.css'
import {Navbar,Hero,Samples, Contact} from "./components"

function App() {
  const [theme,setTheme] = useState("dark")

  return (
    <div data-theme={theme} className="app">
     <Navbar/>
     <Hero/>
     <Samples/>
     <Contact/>
    </div>
  )
}

export default App
