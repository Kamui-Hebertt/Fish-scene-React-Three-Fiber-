import { Environment, MeshPortalMaterial, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Fish from '../components/Fish';

export const Experience = () => {
  const map = useTexture(
    "textures/anime_art_style_a_water_based_pokemon_like_environ.jpg"
  );
  return (
    <>
    <ambientLight intensity={0.5} />
    <Environment preset="sunset" />
    
      <OrbitControls />

    <mesh>
      <planeGeometry args={[2,3]} />
      <MeshPortalMaterial>
    <ambientLight intensity={0.5} />
    <Environment preset="sunset" />
      <Fish scale={0.6} position-y={-1} />
      <mesh>
        {/* <meshNormalMaterial />
        <boxBufferGeometry /> */}

        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
      </MeshPortalMaterial>
    </mesh>


    </>
  );
};
