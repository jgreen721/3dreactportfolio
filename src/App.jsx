import {useState} from "react"
import './App.css'
import {Navbar,Hero} from "./components"

function App() {
  const [theme,setTheme] = useState("dark")

  return (
    <div data-theme={theme} className="app">
     <Navbar/>
     <Hero/>
    </div>
  )
}

export default App
