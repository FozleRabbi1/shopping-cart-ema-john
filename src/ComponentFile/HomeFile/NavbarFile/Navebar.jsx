import React from "react";
import "./Navebar.css";
// import logo from "../../../images/Logo";
import Logo from "../../../images/Logo.svg";

const Navebar = () => {
  return (
    <div className="nav-style">
      <nav>
        <img src={Logo} alt="" />

        <ul>
          {/* <div class="container">
            <button><a href="/Shop">Shop</a></button>
          </div> */}

          <li>
            <a href="/Shop">Shop</a>
          </li>
          <li>
            <a href="/Order">Order</a>
          </li>
          <li>
            <a href="/Inventory">Inventory</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navebar;
