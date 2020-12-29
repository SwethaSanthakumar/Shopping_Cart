import React from "react";
var tableStyle = {
    "text-align": "center",
    "border": "2px solid #ddd",
    "width": "18%"
};
var tableStyle1 = {
  "font-family": "arial, sans-serif",
  "width": "100%"
}
function MenuItem({ productName, price,discount, type,img_url,addToCart, sku }) {
  return (
    <>
    
    <div>
<table style={tableStyle1}>                
<tr>
 <td style={tableStyle}>
      <img src={img_url} alt="product" /></td>
<td style={tableStyle}><h3>{productName}  </h3></td>
<td style={tableStyle}><h3>{type}</h3></td>
<td style={tableStyle}>{price}</td>
<td style={tableStyle}><h3>{discount}</h3></td>

<td style={tableStyle}>

<span class="menu-action">
        <button onClick={() => addToCart(sku)}>+</button>
      </span>
</td>
</tr>
</table>
</div>
 </>
  );
}

export default MenuItem;
