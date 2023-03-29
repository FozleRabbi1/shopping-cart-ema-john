import React, { useEffect, useState } from "react";
import Cart from "./CartFile/Cart";
import "./Home.css";
import Navebar from "./NavbarFile/Navebar";
import Shop from "./ShopFile/Shop";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const addToCartFun = (data) => {
   const newCart = [...cart, data];
   setCart(newCart);
  };

  return (
    <div>
      <Navebar></Navebar>

      <div className="showProducts-OrderSummery">
        <div className="showProduct">
          {datas.map((data, index) => (
            <Shop
              key={data.id}
              data={data}
              index={index}
              addToCartFun={addToCartFun}
            ></Shop>
          ))}
        </div>
        <div className="order-summary">
          <h2>this is order summery</h2>
          
          <Cart cart = {cart}></Cart>

        </div>
      </div>
    </div>
  );
};

export default Home;
