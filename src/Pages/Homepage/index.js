import React, { useState, useEffect } from "react";
import "./style.css";

import { SideMenu, Navbar, GridMenu } from "../../Components";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(items);
  }, [items]);

  const getItems = (data) => {
    setItems(data);
  };

  // const filterItem = (item) => {
  //   item.length
  // }

  return (
    <div className="__homePage">
      <SideMenu items={items} />
      <div className="__contentWrapper">
        <Navbar getItems={getItems} />
        {/* <GridMenu getItems={getItems} /> */}
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nama Item</th>
                <th scope="col">Harga</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              {items.map((x) => (
                <tr key={x.id}>
                  <td>{x.title}</td>
                  <td>{x.price}</td>
                  <td>1</td>
                  <td>{1}</td>
                  <td>
                    <DeleteForeverIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
