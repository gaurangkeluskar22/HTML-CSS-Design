
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./Component/NavBar/NavBar";
import About from "./Component/About/About";

function App() {
  return (
    <ThemeProvider>
        <NavBar />
        <About/>
    </ThemeProvider>
  );
}

export default App;
