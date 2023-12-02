import React from "react";
import { useNavigate } from "react-router-dom";

function ExploreButton() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    // Use navigate to programmatically navigate to the corresponding route
    // Adjust the route paths based on your actual routes
    if (window.location.pathname === "/home") {
      navigate("/explore-home");
    } else if (window.location.pathname === "/aboutus") {
      navigate("/explore-aboutus");
    } else if (window.location.pathname === "/sites") {
      navigate("/explore-sites");
    }
  };

  return (
    <button
      onClick={handleExploreClick}
      style={{ backgroundColor: "transparent" }}
    >
      Explore
    </button>
  );
}

export default ExploreButton;
