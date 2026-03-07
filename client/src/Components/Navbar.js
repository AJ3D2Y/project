import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className = "navbar"> 
      <div className = "nav-links">
        <Link to="/">Home</Link>
        <Link to="/appointments">Appointments</Link>
      </div>
    </nav>
  );
};

export default Navbar;
