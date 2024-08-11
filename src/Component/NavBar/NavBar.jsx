import { useTheme } from "../../context/ThemeContext";
import "./NavBar.css";
import { FaSun as Sun } from "react-icons/fa";
import { FaMoon as Moon} from "react-icons/fa";


const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="navbar-wrapper">
      <div className="navbar-left-section">
        <span className="navbar-logo">GK's Portfolio</span>
      </div>
      <div className="navbar-middle-section">
        <span className="navbar-ele">About</span>
        <span className="navbar-ele">Skills</span>
        <span className="navbar-ele">Project</span>
        <span className="navbar-ele">Education</span>
        <label for="checkbox" className="checkbox-label" onClick={toggleTheme}>
            <Sun fill="yellow" className="checkbox-icon"/>
            <Moon className="checkbox-icon" fill="yellow"/>
            <span className="checkbox-ball" style={theme ==='dark' ? {transform: "translateX(35px)", transition:'transform 0.2s liner'} : {transform: "translateX(0px)",transition:'transform 0.2s liner'}}></span>
        </label>

      </div>

      <div className="navbar-github ">GitHub</div>
    </div>
  );
};

export default NavBar;
