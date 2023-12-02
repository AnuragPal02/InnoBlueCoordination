// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Cards";
import Tajmahal from "../images/Tajmahal.jpeg";
import EiffelTower from "../images/EiffelTower.jpeg";
import jaipurfort from "../images/jaipurfort.jpeg";
import charminar from "../images/charminar.jpeg";
import "./Sites.css";

function Sites() {
  const navigate = useNavigate();

  const places = [
    {
      name: "Taj Mahal",
      description: "Some description about Taj Mahal.",
      imageUrl: "path_to_taj_mahal_image.jpg",
    },
    // Add more places as needed
  ];

  // State to handle rendering specific place details
  const [selectedPlace, setSelectedPlace] = React.useState(null);

  // Handle the "Explore" button click
  const handleExploreClick = (place) => {
    // Set the selected place for rendering details
    setSelectedPlace(place);
  };

  const redirectToPlace = (componentName) => {
    // Redirect to /home/{componentName}
    navigate(`/sites/${componentName}`);
  };

  return (
    <center>
      <div className="carddivhandle">
        <div className="cardsdiv">
          <Card
            imageSrc={Tajmahal}
            title="Taj Mahal"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Explore"
            onClick={() => redirectToPlace("tajmahal")}
          />
          <Card
            imageSrc={jaipurfort}
            title="Amber Fort"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Explore"
            onClick={() => redirectToPlace("amberfort")}
          />
          <Card
            imageSrc={charminar}
            title="Charminar"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Explore"
            onClick={() => redirectToPlace("charminar")}
          />
          <Card
            imageSrc={EiffelTower}
            title="Eiffel Tower"
            description="Another card with different content."
            buttonText="Explore"
            onClick={() => redirectToPlace("eiffeltower")}
          />
        </div>
        <div className="cardsdiv">
          <Card
            imageSrc={Tajmahal}
            title="Taj Mahal"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Explore"
            onClick={() => redirectToPlace("tajmahal")}
          />
          <Card
            imageSrc={jaipurfort}
            title="Amber Fort"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Explore"
            onClick={() => redirectToPlace("amberfort")}
          />
          <Card
            imageSrc={charminar}
            title="Charminar"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Explore"
            onClick={() => redirectToPlace("charminar")}
          />
          <Card
            imageSrc={EiffelTower}
            title="Eiffel Tower"
            description="Another card with different content."
            buttonText="Explore"
            onClick={() => redirectToPlace("eiffeltower")}
          />
          {/* Add more cards as needed */}
        </div>
      </div>
    </center>
  );
}

export default Sites;
