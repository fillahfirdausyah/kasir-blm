import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import axios from "axios";
import "./style.css";

// Component
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function GridMenu({ getItems }) {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [collectCart, setCollectCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://fakestoreapi.com/products?limit=10").then((res) => {
      setData(res.data);
    });
    setIsLoading(false);
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);

  useEffect(() => {
    getItems(collectCart);
  }, [collectCart]);

  const addItem = (data) => {
    setCollectCart([...collectCart, data]);
  };

  return (
    <div className="__gridMenuWrapper">
      <div className="__gridMenuCategory">
        <h3>Category</h3>
        <div className="__gridMenuCategoryBody">
          {/* <div className="__gridMenuCategoryItem">
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
          </div> */}
          <div className="__categoryItemWrapper">
            <ul>
              {category.map((x, index) => (
                <li key={index} className={index === 0 ? "active" : ""}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="__gridMenu_body">
        <div className="__gridMenuHeader">
          <h3>Shirt</h3>
          <p>37 Hasil</p>
        </div>
        {/* {isLoading ? (
          <div className="__loadingWrapper">
            <BarLoader color={"#04acab"} loading={true} size={150} />
          </div>
        ) : ( */}
        <div className="row">
          {data.map((x, index) => (
            <div
              className="col-6 col-md-4 col-xl-3"
              data-aos="fade-up"
              data-aos-duration={
                index === 0 ? "400" : index === 1 ? "600" : "800"
              }
              key={index}
            >
              <div className="__gridMenuItem">
                <div className="__gridMenuImage">
                  <img src={x.image} alt="" />
                </div>
                <div className="__gridMenuItemDetails">
                  <p>{x.title}</p>
                  <p>${x.price}</p>
                </div>
                <div className="__cartButton" onClick={() => addItem(x)}>
                  <AddShoppingCartIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default GridMenu;
