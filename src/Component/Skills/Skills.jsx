import { useEffect, useRef } from "react";
import "./Skills.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useTheme } from "../../context/ThemeContext";

const Skills = () => {
  var scene = null;
  var camera = null;
  var laptop;
  var renderer = null;
  var controls;
  const loader = new GLTFLoader().setPath("src/assets/Models/");
  const { theme, toggleTheme } = useTheme();
  const root = useRef(null)

  useEffect(() => {
    if (root) {
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

      renderer.setClearColor("#191924");
      //renderer.setClearColor('red')
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvasWidth, canvasHeight);
      root.current.appendChild(renderer.domElement);

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

      // Animate the scene
      function animate() {
        setTimeout(() => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        }, 1000 / 20);
      }
      animate();
    }

    // Cleanup on component unmount
    return () => {
      if (root) {
        root.removeChild(renderer?.domElement);
      }
    };
  }, []);


  useEffect(() => {
    if (renderer) {
      // Load the laptop model and center it
      loader.load("Laptop/Laptop.gltf", (gltf) => {
        laptop = gltf.scene;
        laptop.position.set(0, 0, 1.5); // Center the laptop in the scene
        laptop.rotateX(0);
        scene.add(laptop);
      });
    }
  }, [renderer]);


  return (
    <div className="skills-wrapper">
      <div ref={root} className="skills-right-section"></div>
    </div>
  );
};

export default Skills;
