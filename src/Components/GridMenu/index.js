import React from "react";
import "./style.css";

import dataProduct from "../../data";

// Component
import SearchIcon from "@material-ui/icons/Search";

function GridMenu() {
  return (
    <div className="__gridMenuWrapper">
      <div className="__gridMenuSearch">
        <input type="text" placeholder="Cari" />
        <SearchIcon className="__gridMenuSearch_icon" />
      </div>
      <div className="__gridMenu_body">
        <div className="row">
          {dataProduct.map((x) => (
            <div className="col-xl-3 col-md-3 col-sm-6 product">
              <div className="__productWrapper">
                <img src={x.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridMenu;
