import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PokemonCard.css";
const PokemonCard = ({ PokName, URL, onShow }) => {
  const [PokData, setPokData] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(URL);
      if (data.status === 200) {
        setPokData(data.data);
      }
    }
    fetchData();
  }, [URL]);
  return (
    <div className="PokemonCard">
      <div
        className="pok-container"
        onClick={() => {
          onShow(PokData);
        }}
      >
        <ul>
          <li>
            {PokData ? (
              <img src={PokData.sprites.front_default} alt="" />
            ) : (
              <div>Loading</div>
            )}
          </li>
          <li>{PokName}</li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
