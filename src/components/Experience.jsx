import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Fish from '../components/Fish';
import Dragon from '../components/Dragon';
import Cactoro from '../components/Cactoro';

export const Experience = () => {
  // const map = useTexture(
  //   "textures/anime_art_style_a_water_based_pokemon_like_environ.jpg"
  // );
  return (
    <>
  <ambientLight intensity={0.5} />
  <Environment preset="sunset" />
  <OrbitControls />



  {/* <mesh>
    <planeGeometry args={[2,3]} /> */}
    <MonsterStage texture={"textures/anime_art_style_lava_world.jpg"}>
      <Dragon scale={0.5} position-y={-1} />
    </MonsterStage>

    <MonsterStage texture={"textures/anime_art_style_a_water_based_pokemon_like_environ.jpg"} position-x={-2.5} rotation-y={Math.PI / 8}>
      <Fish scale={0.5} position-y={-1}  />
    </MonsterStage>

    <MonsterStage  texture={"textures/anime_art_style_cactus_forest.jpg"} position-x={2.5} rotation-y={-Math.PI / 8}>
      <Cactoro scale={0.4} position-y={-1} />
    </MonsterStage>
 


 

    </>
  );
};


const MonsterStage = ({children, texture, ...props}) => {
  const map = useTexture(
    texture
  );
  return <group {...props}>
    <RoundedBox args={[2,3,0.1]}>
    <MeshPortalMaterial>
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