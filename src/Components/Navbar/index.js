import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

// Component
import SearchIcon from "@material-ui/icons/Search";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";

function Navbar({ getItems }) {
  const [searchText, setSearchText] = useState("");
  const [collectData, setCollectData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchText !== "") {
      axios
        .get(`https://fakestoreapi.com/products/${searchText}`)
        .then((theData) => setData(theData.data))
        .catch((err) => console.log(err));
    } else {
      console.log("tidak ada query");
    }
  }, [searchText]);

  useEffect(() => {
    setCollectData([...collectData, data]);
  }, [data]);

  useEffect(() => {
    getItems(collectData);
  }, [collectData]);

  return (
    <div className="__navbarWrapper">
      <div></div>
      <div className="__navbarSearch">
        <input
          type="text"
          placeholder="cari..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchIcon className="__navbarSearchIcon" />
      </div>
      <div className="__navbarUserSection">
        <ReceiptRoundedIcon className="__navbarUserSectionIcon" />
        <SettingsRoundedIcon className="__navbarUserSectionIcon" />
        <PersonRoundedIcon className="__navbarUserSectionIcon" />
      </div>
    </div>
  );
}

export default Navbar;
