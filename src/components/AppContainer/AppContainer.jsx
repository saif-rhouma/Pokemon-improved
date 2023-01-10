import React from "react";
import "./AppContainer.css";
const AppContainer = (props) => {
  return (
    <div className="AppContainer">
      <div className="grid-4">{props.children}</div>
    </div>
  );
};

export default AppContainer;
