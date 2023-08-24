import React, { useLayoutEffect, useRef } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import gsap from "gsap";
import "./Hero.css"


const Laptop=()=>{
    const img = useGLTF("laptop.glb");
    const laptop = useRef();
    const lightRef = useRef();
    const modelRef = useRef();
    const htmlRef = useRef();
    const tl = useRef();

    // let deltaY = .002;

    //     useFrame(()=>{
    //       modelRef.current.position.y += deltaY;
    //       if(modelRef.current.position.y > .1 || modelRef.current.position.y < -.1){
    //         deltaY *= -1;
    //       }
    //     })

        useLayoutEffect(()=>{
            tl.current = gsap.timeline();
            tl.current.to(laptop.current.rotation,{x:-1.15,duration:2,delay:1})
            tl.current.to(laptop.current.scale,{x:.65,y:.65,z:.65,duration:1})
            tl.current.to(lightRef.current.position,{y:3,duration:1})
            // if(htmlRef.current){
            // tl.current.to(htmlRef.current,{scale:1})
            // }
        })

    return (
      <group ref={laptop}>
        <directionalLight ref={lightRef} position={[2,-4,0]}/>
        <group ref={modelRef}>
        <primitive scale={.1} object={img.scene}/>
        <Html position={[-.9,1.75,0]}>
          <div ref={htmlRef} className="laptop-bg-html">
          <h2 className="laptop-h2-header">Welcome</h2>
          <img src="favicon.ico" alt="" />
          </div>
        </Html>
        </group>
      </group>
    )
}

const Hero = () => {
  return (
    <header>
      <div className="canvas-overlay">
        <Canvas camera={{position:[0,2,0]}} style={{height:600}}>
          <ambientLight/>
          {/* <OrbitControls enableZoom={false}  
                         minAzimuthAngle={-Math.PI / 4}
                         maxAzimuthAngle={Math.PI / 4}
                         minPolarAngle={Math.PI / 6}
                         maxPolarAngle={Math.PI - Math.PI / 6}
                         />   */}
                       
<Laptop/>
        </Canvas>
      </div>
    </header>
  )
}

export default Hero