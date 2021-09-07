import React from "react";
import { useEffect } from "react";
import "./style.css";

function SideMenu({ items }) {
  return (
    <div className="__sideMenu">
      <header>
        <h2>Produk</h2>
      </header>
      <div className="__sideMenu_body">
        <div className="__sideMenuBodyItemWrapper">
          <div className="__sideMenuBodyItemImage">
            <img
              src="https://www.kustomkit.com/colours/1200/KK710lightblue_front.jpg"
              alt=""
            />
          </div>
          <div className="__sideMenuBodyItemName">
            <h3>Kustom Kit</h3>
            <p>Rp 200,000</p>
          </div>
          <p className="__sideMenuBodyItemQty">x1</p>
          <p className="__sideMenuBodyItemTotal">Rp 200,00</p>
        </div>
        <div className="__sideMenuBodyItemWrapper">
          <div className="__sideMenuBodyItemImage">
            <img
              src="https://www.kustomkit.com/colours/1200/KK710lightblue_front.jpg"
              alt=""
            />
          </div>
          <div className="__sideMenuBodyItemName">
            <h3>Kustom Kit</h3>
            <p>Rp200,000</p>
          </div>
          <p className="__sideMenuBodyItemQty">x1</p>
          <p className="__sideMenuBodyItemTotal">Rp200,00</p>
        </div>
      </div>
      <hr />
      <div className="__totalWrapper">
        <div className="__sideMenu_body_total">
          <p className="__sideMenuBodySubTotal">Sub Total</p>
          <p className="__sideMenuBodyTotal">Rp200,000</p>
        </div>
        <div className="__sideMenu_body_total">
          <p className="__sideMenuBodySubTotal">Pajak</p>
          <p className="__sideMenuBodypajak">Rp6,500</p>
        </div>
        <div className="__sideMenu_button">
          <p>
            Charge <span>Rp206,500</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
