import React from "react";
import "./ArrowButton.css";

import { GrNext, GrPrevious } from "react-icons/gr";

const ArrowButton = ({ type, action }) => {
  const render = (type) => {
    switch (type) {
      case "next":
        return (
          <ul onClick={action}>
            <li>
              <GrNext />
            </li>
            <li> Next</li>
          </ul>
        );

      default:
        return (
          <ul onClick={action}>
            <li> Previous</li>
            <li>
              <GrPrevious />
            </li>
          </ul>
        );
    }
  };
  return <div className="ArrowButton">{render(type)}</div>;
};

export default ArrowButton;
