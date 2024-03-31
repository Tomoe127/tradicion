import React from "react";
import ReactDOM from "react-dom";

import './index.css';
import Menu from "./Menu";
import Header from "./header";
import Tradiciones from "./tradiciones";
import RegionFecha from "./RegionFecha";

ReactDOM.render(
  <div className="container">
    <Menu/>
    <Header/>
    <RegionFecha/>
    <Tradiciones/>
  </div>,
  document.getElementById("root")
)