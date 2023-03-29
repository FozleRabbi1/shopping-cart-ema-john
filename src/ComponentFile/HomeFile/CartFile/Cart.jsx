import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    console.log(cart);
    let price = 0;
    let shipping = 0;
    for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    // console.log(price);
    const tax = price * 7 / 100;
    const grandTotal = price + shipping + tax;

    return (
        <div>
            <p>Total cart : {cart.length}</p>

            <div>
                <h4>Price : {price} </h4>
                <h4>shipping : {shipping} </h4>
                <h4>tax : {tax} </h4>
                <h4>Total : {grandTotal} </h4>
            </div>
        </div>
    );
};

export default Cart;