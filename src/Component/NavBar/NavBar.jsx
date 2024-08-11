import { useTheme } from "../../context/ThemeContext";
import "./NavBar.css";

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
        <input type="checkbox" onChange={toggleTheme} />
      </div>

      <div className="navbar-github ">GitHub</div>
    </div>
  );
};

export default NavBar;
