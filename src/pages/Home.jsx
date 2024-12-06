import "./Home.css";
import logo from "../assets/images/VetLocatorLogo.png"; // Update the path if necessary

function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="VetLocator Logo" className="home-logo" />
      <h1>Welcome to VetLocator</h1>
      <p>
        Find veterinarians in your area, available for emergencies and general
        consultations. Designed to support pet owners in urgent situations.
      </p>
    </div>
  );
}

export default Home;
