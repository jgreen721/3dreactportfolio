import React, {useLayoutEffect, useRef, useState} from 'react'
import { ScrollControls,Text, Text3D } from '@react-three/drei'
import {Painting, Overlay} from ".."
import { useFrame } from '@react-three/fiber'


const HeaderText = ()=>{
      const textRef = useRef();
      const [textSettings,setTextSettings] = useState({size:1.2,height:.2,x:-3});

      useLayoutEffect(()=>{
        if(innerWidth < 450){
          setTextSettings({size:.6,height:.1,x:-1.5});
          console.log('changeTextSize')
        }
      },[])

      let deltaZ = .005;
      useFrame(()=>{
        textRef.current.position.z += deltaZ
        textRef.current.position.y -= deltaZ;

        if(textRef.current.position.z > .5 || textRef.current.position.z < -.5){
          deltaZ *= -1;
        }
      })


  return (
    <group>
      <pointLight intensity={3}/>
    <Text3D font={"../../../../node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json"} castShadow={true} ref={textRef} position={[textSettings.x,2,0]} height={textSettings.height} size={textSettings.size}>
    Samples
  </Text3D>
  </group>
  )
}

const Experience = () => {
  return (
    <>
    <ScrollControls pages={5} damping={.2}>
      {/* <HeaderText/> */}
      <Painting/>
        <Overlay/>
    </ScrollControls>
    </>
  )
}

export default Experience