import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
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

  useEffect(() => {
    const stortCard = getShoppingCart();
    const saveCart = [];
    for (const id in stortCard) {
      const saveProduct = datas.find(data => data.id === id)
      if (saveProduct) {
        const quantity = stortCard[id];
        saveProduct.quantity = quantity;
        console.log(saveProduct);
        saveCart.push(saveProduct);
      }
    }
   setCart(saveCart);
  }, [datas])

  const addToCartFun = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
    addToDb(data.id)
  };

  return (
    <div>
      <Navebar></Navebar>

      <div className="showProducts-OrderSummery">
        <div className="showProduct">
          {datas?.map((data, index) => (
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

          <Cart cart={cart}></Cart>

        </div>
      </div>
    </div>
  );
};

export default Home;
