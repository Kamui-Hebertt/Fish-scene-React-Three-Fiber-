import { CameraControls, Environment, MeshPortalMaterial, OrbitControls, RoundedBox, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Fish from '../components/Fish';
import Dragon from '../components/Dragon';
import Cactoro from '../components/Cactoro';
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";



export const Experience = () => {
  const [ active, setActive] = useState(null);
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);
 

  useEffect(()=>{
    if(active) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true,
      )
    }
    else{
      controlsRef.current.setLookAt(
        0,
        0,
        10,
         0,
         0,
         0,
        true,
      )
    }
  }, [active]);
  // const map = useTexture(
  //   "textures/anime_art_style_a_water_based_pokemon_like_environ.jpg"
  // );
  return (
    <>
  <ambientLight intensity={0.5} />
  <Environment preset="sunset" />
  {/* <OrbitControls />  because is not easy to animate */}
  <CameraControls ref={controlsRef} />



  {/* <mesh>
    <planeGeometry args={[2,3]} /> */}
    <MonsterStage 
    name={"Dragon"} color={"#df8d52"} texture={"textures/anime_art_style_lava_world.jpg"}
    active={active}
    setActive={setActive}>
      <Dragon scale={0.5} position-y={-1} />
    </MonsterStage>

    <MonsterStage name={"Fish King"} 
    color={"#38adcf"}
     texture={"textures/anime_art_style_a_water_based_pokemon_like_environ.jpg"} 
     position-x={-2.5} rotation-y={Math.PI / 8}
     active={active}
     setActive={setActive}
     
     >
      <Fish scale={0.5} position-y={-1}  />
    </MonsterStage>

    <MonsterStage name={"Cactoro"} 
    color={"#739d3c"}
      texture={"textures/anime_art_style_cactus_forest.jpg"} 
      position-x={2.5} rotation-y={-Math.PI / 8}
    active={active}
    setActive={setActive}
    >
      <Cactoro scale={0.4} position-y={-1} />
    </MonsterStage>
 


 

    </>
  );
};




const MonsterStage = ({children, texture,color, name, active, setActive, ...props}) => {
  const map = useTexture(
    texture
  );
    const portalMaterial = useRef();

    useFrame((_state, delta)=> {
      const worldOpen = active === name;
      easing.damp(portalMaterial.current, "blend", worldOpen ? 1 : 0, 0.2, delta)
    })


  return <group {...props}>

   <Text font="fonts/Caprasimo-Regular.ttf" fontSize={0.3} position={[0, -1.3, 0.051]} anchorY={"bottom"} >
    {name}
    <meshBasicMaterial color={color} toneMapped={false} />
   </Text>
    <RoundedBox args={[2,3,0.1]} name={name} onDoubleClick={()=> setActive(active === name ? null : name)}>
    <MeshPortalMaterial side={THREE.DoubleSide}
    //  blend={active === name ? 1 : 0}
    ref={portalMaterial}
    >
    <mesh>
    <ambientLight intensity={1} />
   <Environment preset="sunset" />
    
    {children}
    

    <sphereGeometry args={[5, 64, 64]} />
    <meshStandardMaterial map={map} side={THREE.BackSide} />

  </mesh>
    </MeshPortalMaterial>
    </RoundedBox>
  </group>
}