import SearchBar from "./SearchBar"
import { Link } from "react-router-dom";
import "./Nav.css"
import foto  from "./rick.png";

const Nav = ({onSearch})=>{
    return(
        <nav>
            <img src={foto} alt=""  className="foto-nav"/>
        <button className="boton-nav">
            <Link to={"/about"} className="link-navButtons">About</Link>
        </button>
        <button className="boton-nav">
            <Link to={"/home"} className="link-navButtons">Home</Link>
        </button>
        <SearchBar onSearch={onSearch} />
        </nav>
    )

}

export default Nav;