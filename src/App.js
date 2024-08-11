import logo from "./logo.svg";
import "./App.css";
import Design from "./Component/Design";
import { ThemeProvider } from "./context/ThemeContext";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <ThemeProvider>
        <NavBar />
        {/* <Design /> */}
    </ThemeProvider>
  );
}

export default App;
