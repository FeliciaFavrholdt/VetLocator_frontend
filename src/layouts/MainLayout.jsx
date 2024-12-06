import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/VetLocatorLogo.png"; // Ensure the path is correct
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="VetLocator Logo" className="logo" />
        </div>
        <nav className="navbar">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/endpoints" className="nav-link">
            Endpoints
          </NavLink>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 VetLocator. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
