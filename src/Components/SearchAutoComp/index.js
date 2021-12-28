import React from "react";

import "./style.css";

function SearchAutoComp({ show }) {
  return (
    <>
      {show ? (
        <>
          {" "}
          <div className="auto-complete">
            <div className="box-white">
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
              <div className="item-auto-complete">
                <p>NXJS00028372</p>
                <p>Mejikom</p>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <> </>
      )}
    </>
  );
}

export default SearchAutoComp;
