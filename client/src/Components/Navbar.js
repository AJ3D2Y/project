import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
        ✨ Nail Salon
      </Link>
      <div className="nav-links">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/appointments" className={isActive("/appointments")}>Appointments</Link>
        <Link to="/services" className={isActive("/services")}>Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;
