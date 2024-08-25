
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { lazy, Suspense } from "react";
const NavBar = lazy(() => import("./Component/NavBar/NavBar"));
const About = lazy(() => import("./Component/About/About"));
const Skills = lazy(() => import("./Component/Skills/Skills"));


function App() {
  return (
    <ThemeProvider>
      <div className="wrapper">
        <div className="navbar-outer-wrapper">
          <Suspense fallback={<div></div>}>
            <NavBar />
          </Suspense>
        </div>
        <div className="body-wrapper">
          <Suspense fallback={<div></div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div></div>}>
            <Skills />
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
