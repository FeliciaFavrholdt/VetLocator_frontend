import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Overview</h1>
      <p className="about-description">
        The VetLocator helps users find available veterinarians, particularly in
        emergency situations outside regular business hours. Users can also
        retrieve a list of all veterinarians in their area to make informed
        decisions about which vet to contact. This API is designed for easy
        integration into applications that aim to support pet owners in urgent
        situations.
      </p>
    </div>
  );
}

export default About;
