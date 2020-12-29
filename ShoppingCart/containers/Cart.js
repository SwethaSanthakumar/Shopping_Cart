import React from "react";

function Cart({ cost, discounttotal,total,typediscount, cart, menu, reduceCart }) {
  return (
    <div id="cart">
      <h2 className="text-center">Cart</h2>
      <div id="cart-area">
              {Object.keys(cart).map((sku, index) => (
          <div className="cart-item" key={index}>
            <span className="item-text">
              {menu[sku].productName} x {cart[sku]}
            </span>
            <span className="item-total">${menu[sku].price}</span>
            <button className="remove-button" onClick={() => reduceCart(sku)}>
              -
            </button>

          </div>
        ))}
        <div id="cart-total">
          <div className="cart-item">
            <p className="item-total">
            <span className="item-text" id="total-amount">Items - ${cost}</span>
            
            <div>
            <span  className="item-text" id="total-amount">Discount - ${discounttotal}</span>
            </div>
            <div>
            <span className="item-text" id="total-amount">Type discount - ${typediscount}</span>
            </div>
              <span className="item-text" id="total-amount">Order Total - ${total}</span>
            </p>
          </div>
        </div>
      
      </div>  
    </div>
  );
}

export default Cart;
