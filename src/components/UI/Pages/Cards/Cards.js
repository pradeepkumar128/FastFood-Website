import React, { useState } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import { imageData } from "../../../API/FoodAPI/FoodAPI";
import Search from "../Search/Search";

const Cards = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredData = imageData.filter((data) =>
    data.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  };
  return (
    <>
      <Search searchValue={searchValue} handleChange={handleChange} />
      <div className="container">
        <div className="row gap">
          {filteredData.map((data, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="card">
                  <img src={data.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title title_txt">{data.title}</h5>
                    <p className="card-text">{data.discription}</p>
                    <Link className="btn btn-primary">Add To Cart</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
