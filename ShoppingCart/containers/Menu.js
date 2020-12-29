import React from "react";
import MenuItem from "../components/MenuItem";
var tableStyle = {
  "text-align": "center",
  "border": "2px solid #ddd",
  "width": "18%",
  "padding-top": "20px",
"padding-bottom": "20px"
};
var tableStyle1 = {
"font-family": "arial, sans-serif",
"width": "100%",
"background-color": "#4CAF50"}
function Menu({ menu, addToCart }) {
  return (
    <div id="menu">
    <h1 className="text-center">ORDER SUMMARY</h1><br></br>
      <div><table style={tableStyle1}>                
<tr> <th style={tableStyle}>IMAGE</th>
    <th style={tableStyle}>PRODUCT</th>
    <th style={tableStyle}>TYPE</th>
    <th style={tableStyle}>PRICE</th>
    <th style={tableStyle}>DISCOUNT</th>
    <th style={tableStyle}>QTY</th></tr>

 </table></div>
      <div id="menu-area">
        {/* menu items */}
        {Object.keys(menu).map((k, index) => (
          <MenuItem
            productName={menu[k].productName}
            price={menu[k].price}
            discount={menu[k].discount}
            type={menu[k].type}
            img_url={menu[k].img_url}
            addToCart={addToCart}
            sku={k}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
