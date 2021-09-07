import React, { useState, useEffect } from "react";
import "./style.css";

import { SideMenu, Navbar, GridMenu } from "../../Components";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(items);
  }, [items]);

  const getItems = (data) => {
    setItems(data);
  };

  return (
    <div className="__homePage">
      <SideMenu items={items} />
      <div className="__contentWrapper">
        <Navbar />
        <GridMenu getItems={getItems} />
      </div>
    </div>
  );
}

export default HomePage;
