import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./entrypage.css";
import logo from "../images/logo.jpeg";
import video from "../videos/video.mp4";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Entrypage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.toLowerCase() === "tajmahal") {
      navigate(`/home/${searchQuery.toLowerCase()}`);
    } else {
      navigate(`/search-results?query=${searchQuery}`);
    }
  };

  const handleExploreClick = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });

    setTimeout(() => {
      navigate("/sites");
    }, 500);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="back-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="navigationdiv">
        <div>
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className="navbarpages">
          <ul>
            <li>
              <a href="/home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/aboutus" className="nav-link">
                Aboutus
              </a>
            </li>
            <li>
              <a href="/sites" className="nav-link">
                sites
              </a>
            </li>
          </ul>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Places or Monuments"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="searchbtn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button onClick={handleLoginClick} className="top-right-corner">
          Login
        </button>
        <button onClick={handleRegisterClick} className="top-right-corner">
          Register
        </button>
      </div>
      <div className="content">
        <h1 style={{ fontFamily: "cursive", fontSize: "70px" }}>
          cultural heritage
        </h1>
        <a href="#" onClick={handleExploreClick}>
          Explore
        </a>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
      />
    </div>
  );
};

export default Entrypage;
