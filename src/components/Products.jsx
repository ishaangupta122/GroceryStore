import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [categories] = useState([
    {
      link: "/shop-catalog",
      imgUrl: "/cp1.png",
      title: "Bakery & Bread",
      totalProd: "230 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "/cp2.png",
      title: "Vegetables",
      totalProd: "50 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "/cp3.png",
      title: "Fresh Fruits",
      totalProd: "38 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "/cp4.png",
      title: "Beverages",
      totalProd: "330 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "/cp5.png",
      title: "Meat Products",
      totalProd: "50 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "/prod4.png",
      title: "Sauces & Ketchup",
      totalProd: "142 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "/prod5.png",
      title: "Dairy & Eggs",
      totalProd: "110 products",
    },
    {
      link: "/shop-catalog",
      imgUrl: "/prod9.png",
      title: "Oils",
      totalProd: "50 products",
    },
  ]);

  const [product] = useState([
    {
      link: "/product-card",
      imgUrl: "/prod1.png",
      price: "$ 2.15",
      description: "Lorem ipsum dolor sit amet.",
      weight: "500g",
    },
    {
      link: "/product-card",
      imgUrl: "/prod2.png",
      price: "$ 1.5",
      description: "Lorem ipsum dolor sit amet.",
      weight: "800g",
    },
    {
      link: "/product-card",
      imgUrl: "/prod3.png",
      price: "$ 5.10",
      description: "Lorem ipsum dolor sit amet.",
      weight: "350ml",
    },
    {
      link: "/product-card",
      imgUrl: "/prod4.png",
      price: "$ 6.53",
      description: "Lorem ipsum dolor sit amet.",
      weight: "250g",
    },
    {
      link: "/product-card",
      imgUrl: "/prod5.png",
      price: "$ 7.35",
      description: "Lorem ipsum dolor sit amet.",
      weight: "750g",
    },
    {
      link: "/product-card",
      imgUrl: "/prod6.png",
      price: "$ 3.25",
      description: "Lorem ipsum dolor sit amet.",
      weight: "350g",
    },
    {
      link: "/product-card",
      imgUrl: "/prod7.png",
      price: "$ 8.52",
      description: "Lorem ipsum dolor sit amet.",
      weight: "700g",
    },
    {
      link: "/product-card",
      imgUrl: "/prod8.png",
      price: "$ 2.19",
      description: "Lorem ipsum dolor sit amet.",
      weight: "200g",
    },
  ]);

  return (
    <>
      <div className='main-products-container'>
        <div className='main-products'>
          <div className='categories-container'>
            <p className='categories-heading'>Categories</p>
            <div className='partition'></div>
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
            <div className='categories-viewAll'>
              <p className='categories-heading'>Popular Products</p>
              <Link className='view-all' to='/shop-catalog'>
                View All
                <i className='fa-solid fa-arrow-right'></i>
              </Link>
            </div>
            <div className='partition'></div>
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
    </>
  );
};

export default Products;
