import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
    
      <NavLink  
        className={ ({isActive})=> `navbar-brand nav-item nav-link ${isActive ? 'active': ''} `} 
        to="/">
            React Test App
      </NavLink>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink  
              className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active': ''} `} 
              to="/search">
                Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
