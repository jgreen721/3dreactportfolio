import React, {useRef, useLayoutEffect} from 'react'
import {Canvas} from "@react-three/fiber"
import {MeshDistortMaterial,Sphere} from "@react-three/drei"
import { Squash as Hamburger } from 'hamburger-react'

import "./Navbar.css"
import gsap from "gsap"

const Navbar = () => {
    const tl = useRef();
    const navRef = useRef()


    useLayoutEffect(()=>{
            tl.current = gsap.timeline();

             tl.current.to(navRef.current,{y:0,duration:1})
             tl.current.to(".inline-navbar-letter-h3",{scale:1,stagger:.2,delay:.5})
    })

  return (
    <nav ref={navRef} className="navbar">
        <div className="navbar-logo-div">
            <Canvas style={{width:125,height:50}} className="navbar-logo-canvas">
                <color attach="background" args={["black"]}/>
                <ambientLight intensity={.3}/>
                <directionalLight position={[2,2,0]}/>
                <directionalLight position={[-2,-2,0]}/>
                <Sphere scale={3}>
                    <MeshDistortMaterial color="green"/>
                </Sphere>
            </Canvas>
            <div className="navbar-logo">
                <h3 className="navbar-h3">
                    <div className="inline-navbar-letter-h3">J</div>
                    <div className="inline-navbar-letter-h3">G</div>
                    <div className="inline-navbar-letter-h3">D</div>
                    <div className="inline-navbar-letter-h3">E</div>
                    <div className="inline-navbar-letter-h3">V</div>
                </h3>
            </div>
        </div>
        <div className="nav-links-mobile-column">
        <ul className="nav-links">
            <li className="nav-item">
                <a href="#about" className="nav-link-item">About</a>
            </li>
            <li className="nav-item">
                <a href="#skills" className="nav-link-item">Skills</a>
            </li>
            <li className="nav-item">
                <a href="#samples" className="nav-link-item">Samples</a>
            </li>
            <li className="nav-item">
                <a href="#contact" className="nav-link-item">Contact</a>
            </li>
        </ul>
        <div className="mobile-menu-container">
            <div className="mobile-icon">
<Hamburger/>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar