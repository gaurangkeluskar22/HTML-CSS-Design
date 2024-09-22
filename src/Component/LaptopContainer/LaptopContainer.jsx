import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from 'three'

const LaptopContainer = () => {
  const model = useGLTF("./Models/Laptop/mac.glb");
  let texture = useTexture("./images/skills.png");
  console.log("t:",texture)
  const meshes = {};

  model.scene.traverse((e) => {
    if (e instanceof THREE.Mesh || e instanceof THREE.Group) {
      meshes[e.name] = e;
    }
  });
  console.log("m:", meshes);
  meshes.back.rotation.x = THREE.MathUtils.degToRad(90);
  meshes.matte.rotation.x = THREE.MathUtils.degToRad(90);
  meshes.matte.material.map = texture;


  console.log("mesh:",meshes.matte.material.map)
  meshes.matte.material.emissiveIntensity = 0; 

  const data = useScroll();


  useFrame((state, delta) => {
     meshes.back.rotation.x = THREE.MathUtils.degToRad(90 - (data.offset*90));
     meshes.matte.rotation.x = THREE.MathUtils.degToRad(90 - (data.offset*90));
     meshes.Scene.rotation.y = THREE.MathUtils.degToRad(180 - (data.offset*180));
  });

  return (
    <group position={[0, -18, 140]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default LaptopContainer;
