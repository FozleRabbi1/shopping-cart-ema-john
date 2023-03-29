import React from "react";
import "./Shop.css";

const Shop = ({ data, index, addToCartFun }) => {
  const {
    id,
    category,
    name,
    seller,
    price,
    stock,
    ratings,
    ratingsCount,
    img,
    shipping,
    quantity,
  } = data;
  //   let title = name;


  return (
    <div className="container">
      <div className="card">
        <div className="firstrow">
          <span>Best offer</span>
        </div>
        <div className="mediumrow">
          <img src={img} alt="" />
          <div className="content">
            <p> <span className="ditles-style">Category</span> : {category}</p>
            {/* <p> <span className="ditles-style" title={name.slice(0,name.length)}>Name</span> : {name.length > 27 ? `${name.slice(0,27)}` : `${name.slice(0,27)}... `} </p> */}
            {/* <p> <span className="ditles-style" title={title}>Name</span> : {name.length < 25 ? `${name.slice(0,25)}` : `${name.slice(0,20)}... `}</p> */}
            <p title={name.length > 25 ? name : ""} > <span className="ditles-style" >Name</span> : {name.length > 25 ? `${name.slice(0, 20)}... ` : `${name}`}</p>
            <p> <span className="ditles-style">Price</span> : {price}</p>


            <p>   <span className="ditles-style">Ratings</span> : {ratings}</p>

            <p> <span className="ditles-style">Seller</span> :  {seller}</p>
            <p> <span className="ditles-style">Shipping</span> : {shipping}</p>
          </div>
        </div>
        <div className="lastrow">
          <button onClick={() => addToCartFun(data)} >Add to cart {index + 1} </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
