import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
       <nav>
          <SearchBar onSearch={onSearch} />
          <Link to="/favorites" >favorites</Link>
          <Link to="/home" >home</Link>
       </nav>
       
    );
 }
 
 export default Nav;