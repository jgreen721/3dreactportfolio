import React, { useLayoutEffect, useRef } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import { OrbitControls, useGLTF } from '@react-three/drei'
import gsap from "gsap";
import "./Hero.css"


const Laptop=()=>{
    const img = useGLTF("laptop.glb");
    const laptop = useRef();
    const lightRef = useRef();
    const tl = useRef();

        // useFrame(()=>{

        // })

        useLayoutEffect(()=>{
            tl.current = gsap.timeline();
            tl.current.to(laptop.current.rotation,{x:-1.15,duration:2,delay:1})
            tl.current.to(laptop.current.scale,{x:.65,y:.65,z:.65,duration:1})
            tl.current.to(lightRef.current.position,{y:3,duration:1})
        })

    return (
      <group ref={laptop}>
        <directionalLight ref={lightRef} position={[2,-4,0]}/>
        <primitive scale={.1} object={img.scene}/>
      </group>
    )
}

const Hero = () => {
  return (
    <header>
      <div className="canvas-overlay">
        <Canvas camera={{position:[0,2,0]}} style={{height:600}}>
          <ambientLight/>
          <OrbitControls enableZoom={false}/>
<Laptop/>
        </Canvas>
      </div>
    </header>
  )
}

export default Hero