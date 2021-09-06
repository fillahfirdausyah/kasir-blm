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
          <h4>Nama Produk</h4>
          <p>Nike Phantom</p>
        </div>
        <div className="__sideMenu_body_productName">
          <h4>Harga Produk</h4>
          <p>Rp 100,000</p>
        </div>
        <div className="__sideMenu_body_productName">
          <h4>Qty</h4>
          <p>1x</p>
        </div>
        <div className="__sideMenu_body_total">
          <h4>Total</h4>
          <p>100,000</p>
        </div>
        <div className="__sideMenu_button">Proses</div>
      </div>
    </div>
  );
}

export default SideMenu;
