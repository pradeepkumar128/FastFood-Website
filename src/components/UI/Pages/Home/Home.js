import React from "react";
import Carousel from "../Carousel/Carousel";
import WordType from "../WordTyper/WordType";
import { imageData } from "../../../API/FoodAPI/FoodAPI";
import pizzaHome from "../../../../assets/Images/HomeImage/pizzaHome.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 Agntext">
            <div className="headinghilight">
              <h2>India No.1</h2>
              <h3>Fast Food Delivery Site</h3>
              <WordType />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="homePizza">
              <img src={pizzaHome} alt="not found" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gap">
          {imageData.map((data, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="card">
                  <img src={data.imageUrl} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title title_txt">{data.title}</h5>
                    <p className="card-text">{data.discription}</p>
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

export default Home;
