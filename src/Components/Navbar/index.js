import React from "react";
import "./style.css";

// Component
import SearchIcon from "@material-ui/icons/Search";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";

function Navbar() {
  return (
    <div className="__navbarWrapper">
      <div></div>
      <div className="__navbarSearch">
        <input type="text" placeholder="cari..." />
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
