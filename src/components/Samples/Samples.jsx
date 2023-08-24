import React from 'react'
import { Canvas } from '@react-three/fiber'
import {Experience} from "./components";
import "./Samples.css"

const Samples = () => {
  return (
    <div className="samples-container">
<h1 className="samples-h1">Samples</h1>
      <Canvas>
        <color attach="background" args={["black"]}/>
        {/* <ambientLight position={[3,3,0]}/> */}
        <Experience/>
      </Canvas>
    </div>
  )
}

export default Samples