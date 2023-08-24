import React, {useLayoutEffect, useRef} from 'react'
import {Box, useScroll, useHelper} from "@react-three/drei"
import { useFrame } from '@react-three/fiber';
import gsap from "gsap";
import * as THREE from "three"
const ageCalc =  "./samples/agecalculator.png"


const Painting = () => {
  const boxRef = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const lightRef = useRef();

  useFrame(()=>{
      tl.current.seek(tl.current.duration() * scroll.offset);
      console.log(tl.current.duration() * scroll.offset)
  })

  useLayoutEffect(()=>{

       tl.current = gsap.timeline({defaults:{duration:10}});

  
      tl.current.to(boxRef.current.rotation,{y:-2.8},5)

      tl.current.to(boxRef.current.position,{x:-1.1},7)
    


      tl.current.to(boxRef.current.position,{x:1.3},20)
      tl.current.to(boxRef.current.rotation,{x:1.5,y:-.3},20)
      // tl.current.to(boxRef.current.rotation,{x:-2},20)

      // tl.current.to(boxRef.current.rotation,{y:-1},"-=2");

      tl.current.to(boxRef.current.position,{x:-1.3},30)
      // tl.current.to(boxRef.current.rotation,{z:1},"-=2");

      tl.current.to(boxRef.current.position,{x:1.3},40)

  })


  return (
    <group>
      <spotLight ref={lightRef} position={[2,3,7]} intensity={10}/>
      <ambientLight intensity={.5}/>
      {/* <spotLightHelper light={lightRef}/> */}
      <Box ref={boxRef} scale={1.5} rotation={[0,.01,0]} position={[1.3,.5,0]}>
        {/* <meshNormalMaterial/> */}
  
        
        <meshStandardMaterial attachArray="material" map={new THREE.TextureLoader().load(ageCalc)} />
        <meshStandardMaterial attachArray="material" map={new THREE.TextureLoader().load(ageCalc)} />
        <meshStandardMaterial attachArray="material" map={new THREE.TextureLoader().load(ageCalc)} />
        <meshStandardMaterial attachArray="material" map={new THREE.TextureLoader().load(ageCalc)} />
        <meshStandardMaterial attachArray="material" map={new THREE.TextureLoader().load(ageCalc)} />
        <meshStandardMaterial attachArray="material" map={new THREE.TextureLoader().load(ageCalc)} />
      </Box>
    </group>
  )
}

export default Painting