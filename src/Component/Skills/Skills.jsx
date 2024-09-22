import "./Skills.css";
import { useTheme } from "../../context/ThemeContext";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import LaptopContainer from "../LaptopContainer/LaptopContainer";

const Skills = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="skills-wrapper">
      <Canvas camera={{ fov: 22, position: [0, -10, 220] }} className="canvas-srollbar">
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr",
          ]}
        />
        <ScrollControls pages={1} >
          <LaptopContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default Skills;
