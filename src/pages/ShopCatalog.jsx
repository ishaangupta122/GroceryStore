import { useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "../components/Recipe";

const ShopCatalog = () => {
  const [categories] = useState([
    {
      link: "/shop-catalog",
      imgUrl: "./cp1.png",
      title: "Bakery & Bread",
      totalProd: "230 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./cp2.png",
      title: "Vegetables",
      totalProd: "50 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./cp3.png",
      title: "Fresh Fruits",
      totalProd: "38 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./cp4.png",
      title: "Beverages",
      totalProd: "330 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./cp5.png",
      title: "Meat Products",
      totalProd: "50 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./prod4.png",
      title: "Sauces & Ketchup",
      totalProd: "142 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./prod13.png",
      title: "Dairy & Eggs",
      totalProd: "154 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./prod5.png",
      title: "Chips and Snacks",
      totalProd: "78 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./prod7.png",
      title: "Exotic Fruits",
      totalProd: "37 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./prod8.png",
      title: "Pastas",
      totalProd: "74 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./prod9.png",
      title: "Oils",
      totalProd: "174 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "./prod10.png",
      title: "Fishes",
      totalProd: "14 products",
    },
  ]);

  const [product] = useState([
    {
      link: "/product-card",
      imgUrl: "./prod1.png",
      price: "$ 2.15",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod2.png",
      price: "$ 1.5",
      description: "Lorem ipsum dolor sit amet.",
      weight: "800g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod3.png",
      price: "$ 5.10",
      description: "Lorem ipsum dolor sit amet.",
      weight: "350ml",
    },
    {
      link: "/product-card",
      imgUrl: "./prod4.png",
      price: "$ 6.53",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod5.png",
      price: "$ 7.35",
      description: "Lorem ipsum dolor sit amet.",
      weight: "750g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod6.png",
      price: "$ 3.25",
      description: "Lorem ipsum dolor sit amet.",
      weight: "350g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod7.png",
      price: "$ 8.52",
      description: "Lorem ipsum dolor sit amet.",
      weight: "700g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod8.png",
      price: "$ 2.19",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod9.png",
      price: "$ 19.1",
      description: "Lorem ipsum dolor sit amet.",
      weight: "750ml",
    },
    {
      link: "/product-card",
      imgUrl: "./prod10.png",
      price: "$ 11.2",
      description: "Lorem ipsum dolor sit amet.",
      weight: "550g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod11.png",
      price: "$ 5.66",
      description: "Lorem ipsum dolor sit amet.",
      weight: "320g",
    },
    {
      link: "/product-card",
      imgUrl: "./prod12.png",
      price: "$ 2.83",
      description: "Lorem ipsum dolor sit amet.",
      weight: "150g",
    },
  ]);

  return (
    <>
      <div className='catalog-container'>
        <div className='main-products '>
          <div className='categories-container '>
            <p className='categories-heading'>Shop catalog</p>
            <ul className='categories-list' type='none'>
              {categories.map((item, index) => (
                <li className='categories-item' key={index}>
                  <Link className='categories-link' to={item.link}>
                    <div className='categories-img'>
                      <img src={item.imgUrl} alt='/' className='img' />
                    </div>
                    <div className='categories-desc'>
                      <span className='categories-title'>{item.title}</span>
                      <span>{item.totalProd}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='right-products-container'>
            <div className='categories-viewAll shop-catalog-container'>
              <p className='categories-heading shop-catalog-heading'>
                Popular Products
              </p>
            </div>
            <div className='right-products-wrapper'>
              {product.map((item, index) => (
                <Link
                  className='right-products-card'
                  to={item.link}
                  key={index}>
                  <div className='img'>
                    <img src={item.imgUrl} alt='' />
                    <button
                      className='prod-Icon'
                      type='button'
                      onClick={(e) => {
                        e.preventDefault();
                      }}>
                      <i className='fa-regular fa-plus' id='addToCart'></i>
                    </button>
                  </div>
                  <div className='prod-desc'>
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
