import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Healthy Food Available to Everyone.",
      link: "/shop-catalog",
      imageUrl: "./src/assets/hero-img1.jpg",
    },
    {
      id: 2,
      title: "Enjoy Refreshing Summer Drinks.",
      link: "/shop-catalog",
      imageUrl: "./src/assets/hero-img2.jpg",
    },
    {
      id: 3,
      title: "Organic Eggs from home-grown chicken.",
      link: "/shop-catalog",
      imageUrl: "./src/assets/hero-img3.jpg",
    },
  ]);

  return (
    <>
      <div
        id="carouselExampleRide"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to={0}
            className="active"
            id="carouselIndicators"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to={1}
            id="carouselIndicators"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide-to={2}
            id="carouselIndicators"
          />
        </div>

        <div className="carousel-inner">
          {data.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="3000"
              key={item.id}
            >
              <div className="carousel-caption">
                <p className="caption-para">{item.title}</p>
                <Link to={item.link} className="btn btn-outline-light hero-btn">
                  Shop Now
                </Link>
              </div>
              <img
                src={item.imageUrl}
                className="d-block w-100"
                alt="Hero Image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
