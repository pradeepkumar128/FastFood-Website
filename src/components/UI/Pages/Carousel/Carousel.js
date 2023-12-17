import React from "react";
import breakfast from "../../../../../src/assets/Images/Carousel/breakfast.jpg";
import dinner from "../../../../assets/Images//Carousel/dinner.jpg";
import lunch from "../../../../assets/Images/Carousel/lunch.jpg";
import './Carousel.css';

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item imgheight active">
            <img src={dinner} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Dinner</h5>
              <p>
              Pulvinar auctor hac eget praesent proin phasellus curae. Senectus odio aenean lacus porta molestie ex.
              </p>
            </div>
          </div>
          <div className="carousel-item imgheight">
            <img src={breakfast} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Break Fast</h5>
              <p>
              Mattis facilisis ullamcorper vehicula dui donec finibus bibendum massa.
              </p>
            </div>
          </div>
          <div className="carousel-item imgheight">
            <img src={lunch} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Lunch</h5>
              <p>
              Maecenas viverra integer adipiscing tortor vitae primis tristique litora auctor lacinia hendrerit.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
