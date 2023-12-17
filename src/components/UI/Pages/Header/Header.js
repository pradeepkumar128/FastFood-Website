import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";

const Header = () => {
  const [logoName, setLogoName] = useState("Fast Food ");
  const [cardValue, setCardValue] = useState();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light hearderBg">
        <div className="container-fluid">
          <Link className="navbar-brand logotext" to="/">
            {logoName}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link menutxt " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link menutxt" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link menutxt" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link menutxt" to="/Services">
                  Services
                </Link>
              </li>
              <li className="nav-item cartIcon">
                <Link className="nav-link menutxt" >
                <i className="bi bi-cart-check-fill"><sup>{cardValue}</sup></i>
                </Link>
              </li>
             
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
