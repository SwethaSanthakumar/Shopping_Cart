import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Menu from "./Menu";

function MenuCart() {
  const [menuData, setMenuData] = useState({
    "9090": {
      productName: "Item1", 
        price: 200, 
        discount: 10,
        type: "fiction", 
        img_url: "https://place-hold.it/40.jpg" 
    },

    "9091": {
    productName: "Item2", 
    price: 250, 
    discount: 15, 
    type: "literature", 
    img_url: "https://place-hold.it/40.jpg"
    },

    "9092": {
      productName: "Item3", 
        price: 320, 
        discount: 5, 
        type: "literature", 
        img_url: "https://place-hold.it/40.jpg" 

    },
    "9093":{ 
      productName: "Item4", 
      price: 290, 
      discount: 0, 
      type: "thriller", 
      img_url: "https://place-hold.it/40.jpg" },
      
    "9094":{ 
      productName: "Item5", 
      price:500,
      discount: 25, 
      type: "thriller", 
      img_url: "https://place-hold.it/40.jpg" }, 
      
     "9095":{ 
      productName: "Item6", 
      price: 150, 
      discount: 5, 
      type: "literature", 
      img_url: "https://place-hold.it/40.jpg" }, 
      
    "9096":{ 
      productName: "Item7", 
      price: 700, 
      discount: 22, 
      type: "literature", 
      img_url: "https://place-hold.it/40.jpg" }, 
      
    "9097":{ 
     productName: "Item8", 
     price: 350, 
     discount: 18, 
     type: "fiction", 
     img_url: "https://place-hold.it/40.jpg" }
  });

  const [cartData, setCartData] = useState({});
  const [cartPrice, setCartPrice] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);
  const [cartTypeDiscount, setCartTypeDiscount] = useState(0);

  useEffect(() => {
    let total = 0;
    let cost=0;
    let typediscount=0;
    let discounttotal=0;
    Object.keys(cartData).map((sku, _) => {
      let qty = cartData[sku];
      let price = menuData[sku].price;
      let discount=menuData[sku].discount;
      let type = menuData[sku].type;
     if (type==='fiction') {
        typediscount+=(15/100 * price*qty);
        cost+=(qty*price);
        discounttotal+=(qty*discount);
        total += (qty * price)-(qty*discount)-(qty*typediscount);
      } else {
        cost+=(qty*price);
        discounttotal+=(qty*discount);
        total += (qty * price)-(qty*discount);}/*
        cost+=(qty*price);
        discounttotal+=(qty*discount);
        total += (qty * price)-(qty*discount);*/
      
    });

    setCartTotal(total);
    setCartPrice(cost);
    setCartTypeDiscount(typediscount);
    setCartDiscount(discounttotal);
  }, [cartData]);

  const addToCart = sku => {
    // creating a new copy
    // we shouldn't change state directly
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] += 1;
    } else {
      newCart[sku] = 1;
    }

    // setting cart data
    setCartData(newCart);
  };

  const reduceFromCart = sku => {
    // creating a new copy
    // we shouldn't change state directly
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] -= 1;
      if (newCart[sku] < 1) delete newCart[sku];
      alert('Item has been deleted from the cart')
    }

    setCartData(newCart);
  };

  return (
    <div id="menu-cart">
      {/* ids aren't the best way to style in React but the focus of this tutorial isn't on CSS :) */}
      <Menu menu={menuData} addToCart={addToCart} />
      <Cart
        cart={cartData}
        cost={cartPrice}
        discounttotal={cartDiscount}
        typediscount={cartTypeDiscount}
        total={cartTotal}
        reduceCart={reduceFromCart}
        menu={menuData}
      />
    </div>
  );
}

export default MenuCart;
