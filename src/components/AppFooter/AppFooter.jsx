import React from "react";
import "./AppFooter.css";
import ArrowButton from "./components/ArrowButton";
const AppFooter = ({ previous, next, setLoadingUrl }) => {
  return (
    <div className="AppFooter">
      {previous && (
        <ArrowButton
          action={() => {
            setLoadingUrl(previous);
          }}
        />
      )}
      {next && (
        <ArrowButton
          type={"next"}
          action={() => {
            setLoadingUrl(next);
          }}
        />
      )}
    </div>
  );
};

export default AppFooter;
