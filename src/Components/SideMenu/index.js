import React from "react";

import "./style.css";

function SideMenu() {
  return (
    <div className="__sideMenu">
      <header>
        <h1>Produk</h1>
      </header>
      <div className="__sideMenu_body">
        <div className="__sideMenu_body_productName">
          <h4>Nike Phantom</h4>
          <p>200,000</p>
        </div>
        <div className="__sideMenu_body_productName">
          <h4>Nike Phantom</h4>
          <p>200,000</p>
        </div>
        <div className="__sideMenu_body_productName">
          <h4>Nike Phantom</h4>
          <p>200,000</p>
        </div>
        <div className="__sideMenu_body_productName">
          <h4>Nike Phantom</h4>
          <p>200,000</p>
        </div>
        <div className="__sideMenu_body_productName">
          <h4>Nike Phantom</h4>
          <p>200,000</p>
        </div>
      </div>
      <div className="__totalWrapper">
        <div className="__sideMenu_body_total">
          <h4>Total</h4>
          <p>1,000,000</p>
        </div>
        <div className="__sideMenu_button">Proses</div>
      </div>
    </div>
  );
}

export default SideMenu;
