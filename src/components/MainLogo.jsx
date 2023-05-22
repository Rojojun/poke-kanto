import innerlogo from "../asset/logo-2.GIF";
import logo from "../asset/logo.png";

import React from "react";

export default function MainLogo() {
  return (
    <>
      <div id="wrapper">
        <div className="logo-box" style={{ position: "relative" }}>
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{ width: "1680px", height: "880" }}
          />
          <div
            className="inner-logo-box"
            style={{
              position: "absolute",
            }}
          >
            <img
              src={innerlogo}
              className="img"
              alt="img"
              style={{ width: "700px", marginLeft: "0px", marginTop: "160px" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
