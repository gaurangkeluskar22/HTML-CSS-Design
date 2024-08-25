
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./Component/NavBar/NavBar";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <ThemeProvider>
        <NavBar />
        <About/>
        <Skills/>
    </ThemeProvider>
  );
}

export default App;
