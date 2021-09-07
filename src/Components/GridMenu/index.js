import React from "react";
import "./style.css";

import dataProduct from "../../data";

// Component
import SearchIcon from "@material-ui/icons/Search";

function GridMenu({ getItems }) {
  return (
    <div className="__gridMenuWrapper">
      <div className="__gridMenuCategory">
        <h3>Category</h3>
        <div className="__gridMenuCategoryBody">
          <div className="__gridMenuCategoryItem">
            <div className="__gridMenuCategoryImageWrapper">
              <img
                src="https://n4.sdlcdn.com/imgs/b/n/e/Being-Fab-Green-Formal-Shirt-SDL798545728-1-0b951.jpg"
                alt=""
              />
            </div>
            <p>Shirt</p>
          </div>
          <div className="__gridMenuCategoryItem">
            <div className="__gridMenuCategoryImageWrapper">
              <img
                src="https://static.r-shop.gr/media/catalog/product/cache/1/thumbnail/2000x2667/9df78eab33525d08d6e5fb8d27136e95/m/_/m_5760050982-08.jpg"
                alt=""
              />
            </div>
            <p>Jeans</p>
          </div>
        </div>
      </div>
      <div className="__gridMenu_body">
        <div className="__gridMenuHeader">
          <h3>Shirt</h3>
          <p>37 Result</p>
        </div>
        <div className="row">
          <div className="col-6 col-md-4 col-xl-3">
            <div className="__gridMenuItem">
              <div className="__gridMenuImage">
                <img
                  src="https://www.kustomkit.com/colours/1200/KK710lightblue_front.jpg"
                  alt=""
                />
              </div>
              <div className="__gridMenuItemDetails">
                <p>Kustom Kit</p>
                <p>Rp 200,000</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-3">
            <div className="__gridMenuItem">
              <div className="__gridMenuImage">
                <img
                  src="https://www.kustomkit.com/colours/1200/KK710lightblue_front.jpg"
                  alt=""
                />
              </div>
              <div className="__gridMenuItemDetails">
                <p>Kustom Kit</p>
                <p>Rp 200,000</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-3">
            <div className="__gridMenuItem">
              <div className="__gridMenuImage">
                <img
                  src="https://www.kustomkit.com/colours/1200/KK710lightblue_front.jpg"
                  alt=""
                />
              </div>
              <div className="__gridMenuItemDetails">
                <p>Kustom Kit</p>
                <p>Rp 200,000</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-3">
            <div className="__gridMenuItem">
              <div className="__gridMenuImage">
                <img
                  src="https://www.kustomkit.com/colours/1200/KK710lightblue_front.jpg"
                  alt=""
                />
              </div>
              <div className="__gridMenuItemDetails">
                <p>Kustom Kit</p>
                <p>Rp 200,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridMenu;
