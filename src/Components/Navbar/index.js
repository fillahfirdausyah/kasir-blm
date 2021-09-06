import React from "react";
import "./style.css";

// Component
import StarIcon from "@material-ui/icons/Star";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function Navbar() {
  return (
    <div className="__navbarWrapper">
      <div className="__navbarBody">
        <StarIcon fontSize="large" style={{ color: "white" }} />
        <ListAltIcon fontSize="large" style={{ color: "white" }} />
        <AttachMoneyIcon fontSize="large" style={{ color: "white" }} />
      </div>
    </div>
  );
}

export default Navbar;
