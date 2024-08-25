import { useEffect } from "react";
import "./Skills.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useTheme } from "../../context/ThemeContext";

const Skills = () => {
  var scene;
  var camera;
  var laptop;
  var renderer;
  var controls;
  const loader = new GLTFLoader().setPath("src/assets/Models/");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    scene = new THREE.Scene();

    // Adjust the camera parameters to focus on the center
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 2, 5); // Position the camera so it's looking at the model from a good distance

    const canvasWidth = window.innerWidth;
    const canvasHeight = 700;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    if (renderer) {
    //   renderer.setClearColor(theme === "dark" ? "#191924" : "white");
    renderer.setClearColor('red')
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvasWidth, canvasHeight);
      const root = document.getElementById("canvas");
      root.appendChild(renderer.domElement);
    }
    // Add OrbitControls to enable interactive rotation
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0); // Set the center of rotation to the laptop's position
    controls.update();

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 5);
    scene.add(ambientLight);

    // Adjust the camera aspect ratio and update projection matrix
    camera.aspect = canvasWidth / canvasHeight;
    camera.updateProjectionMatrix();

    // Load the laptop model and center it
    loader.load("Laptop/Laptop.gltf", (gltf) => {
      laptop = gltf.scene;
      laptop.position.set(0, 0, 1.5); // Center the laptop in the scene
      laptop.rotateX(0);
      scene.add(laptop);
    });

    // Animate the scene
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      if (renderer) {
        renderer.render(scene, camera);
      }
    }
    animate();

    // Cleanup on component unmount
    return () => {
      root.removeChild(renderer.domElement);
    };
  }, []);

  // useEffect(()=>{
  //     if(renderer){
  //     renderer.setClearColor(theme === 'dark' ? '#191924' : 'white');
  //     }
  // },[theme, renderer])

  return (
    <div className="skills-wrapper">
      <div id="canvas" className="skills-right-section"></div>
    </div>
  );
};

export default Skills;
