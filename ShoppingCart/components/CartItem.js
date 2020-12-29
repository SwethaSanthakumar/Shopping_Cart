import React from "react";

function CartItem({}) {
  return (
    <div class="cart-item">
      <span class="item-text">Keyboard x 2</span>
      <span class="item-total">₹1398</span>
      <button class="menu-action">-</button>
    </div>
  );
}

export default CartItem;
