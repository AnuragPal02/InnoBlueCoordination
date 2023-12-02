import React from "react";
import Hampi from "../images/Hampi.jpeg";
function Home() {
  return (
    <center>
      <div className="Homecontainer" style={{ backgroundColor: "white" }}>
        <h1 className="display-4">Tourism and Culture</h1>
        <div className="Image">
          <img src={Hampi} alt="img"></img>
        </div>
        <p1 className="lead">
          The Tourism Division provides strategic and directional guidance to
          the Union and State Governments for the development of the tourism
          sector. The Division seeks to develop India into the most preferred
          destination for tourists through the development of responsible and
          sustainable tourism policies, focusing on niche tourism, eco-tourism
          and wellness tourism, infrastructure development, capacity
          development, and increasing tourist footfall. The Culture Division
          seeks to develop, preserve and promote India’s arts, culture and
          heritage, with a greater policy and planning coherence in the sector.
        </p1>
      </div>
    </center>
  );
}

export default Home;
