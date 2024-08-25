
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./Component/NavBar/NavBar";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <ThemeProvider>
      <div className="wrapper">
        <div className="navbar-outer-wrapper">
        <NavBar />
        </div>
        <div className="body-wrapper">
        <About/>
        <Skills/>
        </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
