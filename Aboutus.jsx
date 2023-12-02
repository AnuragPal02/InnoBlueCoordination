import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Aboutus() {
  const aboutUsRef = useRef(null);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Scroll down to the About Us section when Explore is clicked
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h1>About Us</h1>
      {/* ... (existing content) ... */}

      {/* Ref for the About Us section */}
      <div ref={aboutUsRef}>
        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or just want to say hello? We'd love to
          hear from you! Feel free to reach out to us at{" "}
          <strong>obitouchiha7754@gmail.com</strong>.
        </p>

        <p>
          Thank you for exploring the world with us!
          <br />
          BlueCoordination Team
        </p>
      </div>

      {/* Example of handling Explore click within the Aboutus component */}
      <button onClick={handleExploreClick}>Explore</button>
    </div>
  );
}

export default Aboutus;
