import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

import "./style.css";

function SideMenu({ items }) {
  const [total, setTotal] = useState(0);
  const [pajak, setPajak] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    let totalPrice = 0;
    for (let i of items) {
      totalPrice += i.price;
    }
    setTotal(totalPrice);
    setPajak(items.length * 1.5);
  }, [items]);

  const editHandler = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <div className="__sideMenu">
      <header>
        <h2>Produk</h2>
        {items.length > 0 ? (
          <div className="__iconEditWrappper" onClick={editHandler}>
            <EditIcon />
          </div>
        ) : (
          ""
        )}
      </header>
      <div className="__sideMenu_body">
        <TransitionGroup className="cart-item">
          {items.map((x, index) => (
            <CSSTransition key={index} timeout={500} classNames="cart">
              <div key={index} className="__sideMenuBodyItemWrapper">
                <div className="__sideMenuBodyItemImage">
                  <img src={x.image} alt="" />
                </div>
                <div className="__sideMenuBodyItemName">
                  <h3>
                    {x.title.length > 10
                      ? `${x.title.slice(0, 10)}...`
                      : x.title}
                  </h3>
                  <p>${x.price}</p>
                </div>
                <p className="__sideMenuBodyItemQty"></p>
                <p className="__sideMenuBodyItemTotal">${x.price}</p>
                {isEdit ? (
                  <div className="__iconDeleteWrapper">
                    <DeleteForeverRoundedIcon />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <hr />
      <div className="__totalWrapper">
        <div className="__sideMenu_body_total">
          <p className="__sideMenuBodySubTotal">Sub Total</p>
          <p className="__sideMenuBodyTotal">${total}</p>
        </div>
        <div className="__sideMenu_body_total">
          <p className="__sideMenuBodySubTotal">Pajak</p>
          <p className="__sideMenuBodypajak">${pajak}</p>
        </div>
        <div className="__sideMenu_button">
          <p>
            Charge <span>${total + pajak}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
