import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import "./AppHeader.css";
const AppHeader = ({ setSearchPok, setModalShow }) => {
  const dataToSearch = useRef();
  return (
    <div className="AppHeader">
      <div className="header-container">
        <ul>
          <li>
            <input
              type="text"
              name="search"
              placeholder="Pokemon name"
              onChange={(e) => {
                dataToSearch.current = e.target.value;
              }}
            />
          </li>
          <li
            onClick={() => {
              console.log("Clicking", dataToSearch.current);
              setSearchPok(dataToSearch.current);
            }}
          >
            <BsSearch />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
