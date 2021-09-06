import React from "react";

import { SideMenu, Navbar, GridMenu } from "../Components";

function HomePage() {
  return (
    <div className="__homePage">
      <SideMenu />
      <Navbar />
      <GridMenu />
    </div>
  );
}

export default HomePage;
