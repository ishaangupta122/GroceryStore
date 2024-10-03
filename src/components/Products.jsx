import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
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
      imgUrl: "./src/assets/prod5.png",
      title: "Dairy & Eggs",
      totalProd: "110 products",
    },
    {
      id: 8,
      link: "/shop-catalog",
      imgUrl: "./src/assets/prod9.png",
      title: "Oils",
      totalProd: "50 products",
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
  ]);

  return (
    <>
      <div className="main-products-container">
        <div className="main-products">
          <div className="categories-container">
            <p className="categories-heading">Categories</p>
            <div className="partition"></div>
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
            <div className="categories-viewAll">
              <p className="categories-heading">Popular Products</p>
              <Link className="view-all" to="/shop-catalog">
                View All
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="partition"></div>
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
                      <i className="fa-regular fa-plus" id="addToCart"></i>
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
    </>
  );
};

export default Products;
