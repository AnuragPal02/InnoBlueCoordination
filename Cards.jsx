import React from "react";
import PropTypes from "prop-types";

function Card({ imageSrc, title, description, buttonText, onClick }) {
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imageSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Add onClick prop type
};

export default Card;
