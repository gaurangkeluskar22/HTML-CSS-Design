import { useTheme } from "../../context/ThemeContext"
import './NavBar.css'


const NavBar = () =>{
   const {theme, toggleTheme} = useTheme() 
    return(
        <div className="navbar-wrapper">
            <div>
            <span>GK's Portfolio</span>

            <span>Home {theme}</span>
            <span>Home {theme}</span>
            <span>Home {theme}</span>
            </div>

            <div>
            <input type="checkbox" onChange={toggleTheme}></input>
            <span>gitHub</span>
            </div>
        </div>
    )
}

export default NavBar;