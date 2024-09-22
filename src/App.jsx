
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { lazy, Suspense } from "react";
// const NavBar = lazy(() => import("./Component/NavBar/NavBar"));
// const About = lazy(() => import("./Component/About/About"));
// const Skills = lazy(() => import("./Component/Skills/Skills"));
import NavBar from './Component/NavBar/NavBar'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Skills1 from "./Component/Skills1/Skills1";

function App() {
  return (
    <ThemeProvider>
      <div className="wrapper">
            <NavBar />
        <div className="body-wrapper">
            <About />
            <Skills1/>
            {/* <Skills /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
