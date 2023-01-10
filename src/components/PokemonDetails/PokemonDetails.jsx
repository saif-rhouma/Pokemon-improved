import React from "react";
import "./PokemonDetails.css";
const PokemonDetails = ({ data, close }) => {
  return (
    <div
      className="PokemonDetails"
      onClick={() => {
        close();
      }}
    >
      <div className="details-card">
        <div className="details-title">
          <ul>
            <li
              style={{
                backgroundImage: `url("${data.sprites.front_default}")`,
              }}
            ></li>
            <li>{data.name}</li>
          </ul>
        </div>
        <div className="details-content">
          <table>
            <tbody>
              <tr>
                <td>Height :</td>
                <td>{data.height}</td>
              </tr>

              <tr>
                <td>Weight :</td>
                <td>{data.weight}</td>
              </tr>
              <tr>
                <td>Base Experience :</td>
                <td>{data.base_experience}</td>
              </tr>
              <tr>
                <td>Order :</td>
                <td>{data.order}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
