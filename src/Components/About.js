import React from "react";
import lightning from "./lightning.jpg";
import winter from "./winter.jpg";
import summer from "./summer.jpg";

function About() {
  return (
    <div className="container my-3">
      {/* <h1 style={{ color: "white", margin: "18px 0px" }}>About weather</h1> */}
      <div
        id="carouselExampleControls"
        className="carousel slide my-3"
        data-bs-ride="carousel"
        style={{ border: "2px solid white" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={lightning}
              className="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Lightning</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={winter}
              className="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Winter</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={summer}
              className="d-block w-100"
              alt="..."
              style={{ height: "400px" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Summer</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is Weather
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The day-to-day conditions of the atmosphere at a place with
              respect to elements like humidity, temperature, wind speed,
              rainfall, etc. is called the weather of that place. Weather can be
              cloudy, sunny, rainy, stormy or clear. It is a part of the natural
              phenomenon which maintains the equilibrium in the atmosphere.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Elements of Weather
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Wind speed</li>
                <li>Humidity</li>
                <li>Temperature</li>
                <li>Rainfall</li>
                <li>Thunder</li>
                <li>Snow</li>
                <li>Lightning</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Factors Affecting Weather
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The energy reflected and absorbed by the earth's surface, the
              oceans and the atmosphere play an important role in determining
              the weather at any place. Gases like methane, water vapour and
              carbon dioxide also play a role in determining the weather.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
