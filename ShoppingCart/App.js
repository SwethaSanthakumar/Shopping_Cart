import React from "react";
import "./css/reset.css";
import "./css/style.css";
import MenuCart from "./containers/MenuCart";
var menu= {
  "font-size": "20px",
  "padding-top": "20px",
  "padding-bottom": "20px",
  "background-color": "#4CAF50"}

function App() {
  return (
    <div class="container">
      <div id="app-holder">
        <MenuCart />
      </div>
    </div>
  );
}

export default App;