import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Recta from "recta-clones";

import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

import "./style.css";

function SideMenu({ items }) {
  const [total, setTotal] = useState(0);
  const [pajak, setPajak] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  // useEffect(() => {
  //   let totalPrice = 0;
  //   for (let i of items) {
  //     totalPrice += i.price;
  //   }
  //   setTotal(totalPrice);
  //   setPajak(items.length * 1.5);
  // }, [items]);

  // const editHandler = () => {
  //   if (isEdit) {
  //     setIsEdit(false);
  //   } else {
  //     setIsEdit(true);
  //   }
  // };

  const testPrint = () => {
    let printer = new Recta("4840749736", "1811");
    printer.open().then(() => {
      printer
        .align("center")
        .bold(true)
        .underline(false)
        .text("TINUQU")
        .newline()
        .bold(false)
        .text("Sumberejo - Malang")
        .newline()
        .text("08212383483472")
        .newline()
        .newline()
        .newline()
        // .align("left")
        .text("09 Desember 2021                       14:17:58")
        .newline()
        .text("Nomor Invoice         INV/20211109/Q21758/9D8QY")
        .newline()
        .text("Nama Kasir                                 Vina")
        .newline()
        .newline()
        .underline(2)
        .text("-----------------------------------------------")
        .newline()
        .align("center")
        .underline(false)
        .text("Daftar Pembelian")
        .newline()
        .underline(true)
        .text("-----------------------------------------------")
        .newline()
        .newline()
        .underline(false)
        .text("Kerudung Kantong Fendi JU  x1          Rp.35.000")
        .text("Celana Legging List Fendi  x1          Rp.25.000")
        .feed(8)
        .cut()
        .print();
    });
  };

  return (
    <div className="__sideMenu">
      <header>
        <h2>Produk</h2>
        {/* {items.length > 0 ? (
          <div className="__iconEditWrappper" onClick={editHandler}>
            <EditIcon />
          </div>
        ) : (
          ""
        )} */}
      </header>
      <div className="__sideMenu_body">
        {/* <TransitionGroup className="cart-item">
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
        </TransitionGroup> */}
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
        <div className="__sideMenu_button" onClick={testPrint}>
          <p>
            Charge <span>${total + pajak}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
