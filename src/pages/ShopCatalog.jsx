import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Recipe from "../components/Recipe";

const ShopCatalog = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      link: "/shop-catalog",
      imgUrl: "./src/assets/cp1.png",
      title: "Bakery & Bread",
      totalProd: "230 products",
    },
    {
      id: 2,
      link: "/shop-catalog",
      imgUrl: "./src/assets/cp2.png",
      title: "Vegetables",
      totalProd: "50 products",
    },
    {
      id: 3,
      link: "/shop-catalog",
      imgUrl: "./src/assets/cp3.png",
      title: "Fresh Fruits",
      totalProd: "38 products",
    },
    {
      id: 4,
      link: "/shop-catalog",
      imgUrl: "./src/assets/cp4.png",
      title: "Beverages",
      totalProd: "330 products",
    },
    {
      id: 5,
      link: "/shop-catalog",
      imgUrl: "./src/assets/cp5.png",
      title: "Meat Products",
      totalProd: "50 products",
    },
    {
      id: 6,
      link: "/shop-catalog",
      imgUrl: "./src/assets/prod4.png",
      title: "Sauces & Ketchup",
      totalProd: "142 products",
    },
    {
      id: 7,
      link: "/shop-catalog",
      imgUrl: "./src/assets/prod13.png",
      title: "Dairy & Eggs",
      totalProd: "154 products",
    },
    {
      id: 8,
      link: "/shop-catalog",
      imgUrl: "./src/assets/prod5.png",
      title: "Chips and Snacks",
      totalProd: "78 products",
    },
    {
      id: 9,
      link: "/shop-catalog",
      imgUrl: "./src/assets/prod7.png",
      title: "Exotic Fruits",
      totalProd: "37 products",
    },
    {
      id: 10,
      link: "/shop-catalog",
      imgUrl: "./src/assets/prod8.png",
      title: "Pastas",
      totalProd: "74 products",
    },
    {
      id: 11,
      link: "/shop-catalog",
      imgUrl: "./src/assets/prod9.png",
      title: "Oils",
      totalProd: "174 products",
    },
    {
      id: 12,
      link: "/shop-catalog",
      imgUrl: "./src/assets/prod10.png",
      title: "Fishes",
      totalProd: "14 products",
    },
  ]);

  const [product, setProduct] = useState([
    {
      id: 1,
      link: "/product-card",
      imgUrl: "./src/assets/prod1.png",
      price: "$ 2.15",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
    },
    {
      id: 2,
      link: "/product-card",
      imgUrl: "./src/assets/prod2.png",
      price: "$ 1.5",
      description: "Lorem ipsum dolor sit amet.",
      weight: "800g",
    },
    {
      id: 3,
      link: "/product-card",
      imgUrl: "./src/assets/prod3.png",
      price: "$ 5.10",
      description: "Lorem ipsum dolor sit amet.",
      weight: "350ml",
    },
    {
      id: 4,
      link: "/product-card",
      imgUrl: "./src/assets/prod4.png",
      price: "$ 6.53",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
    },
    {
      id: 5,
      link: "/product-card",
      imgUrl: "./src/assets/prod5.png",
      price: "$ 7.35",
      description: "Lorem ipsum dolor sit amet.",
      weight: "750g",
    },
    {
      id: 6,
      link: "/product-card",
      imgUrl: "./src/assets/prod6.png",
      price: "$ 3.25",
      description: "Lorem ipsum dolor sit amet.",
      weight: "350g",
    },
    {
      id: 7,
      link: "/product-card",
      imgUrl: "./src/assets/prod7.png",
      price: "$ 8.52",
      description: "Lorem ipsum dolor sit amet.",
      weight: "700g",
    },
    {
      id: 8,
      link: "/product-card",
      imgUrl: "./src/assets/prod8.png",
      price: "$ 2.19",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
    },
    {
      id: 9,
      link: "/product-card",
      imgUrl: "./src/assets/prod9.png",
      price: "$ 19.1",
      description: "Lorem ipsum dolor sit amet.",
      weight: "750ml",
    },
    {
      id: 10,
      link: "/product-card",
      imgUrl: "./src/assets/prod10.png",
      price: "$ 11.2",
      description: "Lorem ipsum dolor sit amet.",
      weight: "550g",
    },
    {
      id: 11,
      link: "/product-card",
      imgUrl: "./src/assets/prod11.png",
      price: "$ 5.66",
      description: "Lorem ipsum dolor sit amet.",
      weight: "320g",
    },
    {
      id: 12,
      link: "/product-card",
      imgUrl: "./src/assets/prod12.png",
      price: "$ 2.83",
      description: "Lorem ipsum dolor sit amet.",
      weight: "150g",
    },
  ]);

  return (
    <>
      <div className="catalog-container">
        <div className="main-products ">
          <div className="categories-container ">
            <p className="categories-heading">Shop catalog</p>
            <ul className="categories-list" type="none">
              {categories.map((item, index) => (
                <li className="categories-item" key={item.id}>
                  <Link className="categories-link" to={item.link}>
                    <div className="categories-img">
                      <img src={item.imgUrl} alt="/" className="img" />
                    </div>
                    <div className="categories-desc">
                      <span className="categories-title">{item.title}</span>
                      <span>{item.totalProd}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="right-products-container">
            <div className="categories-viewAll shop-catalog-container">
              <p className="categories-heading shop-catalog-heading">
                Popular Products
              </p>
            </div>
            <div className="right-products-wrapper">
              {product.map((item, index) => (
                <Link
                  className="right-products-card"
                  to={item.link}
                  key={item.id}
                >
                  <div className="img">
                    <img src={item.imgUrl} alt="" />
                    <button
                      className="prod-Icon"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <i class="fa-regular fa-plus" id="addToCart"></i>
                    </button>
                  </div>
                  <div className="prod-desc">
                    <span>{item.price}</span>
                    <span>{item.description}</span>
                    <span>{item.weight}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Recipe />
    </>
  );
};

export default ShopCatalog;
