import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const [data] = useState([
    {
      id: 1,
      totaleProducts: "125 products",
      title: "Only fresh fish to your table",
      link: "/shop-catalog",
      imageUrl: "./product-img1.png",
    },
    {
      id: 2,
      totaleProducts: "50 products",
      title: "Products for Easter table",
      link: "/shop-catalog",
      imageUrl: "./product-img2.png",
    },
    {
      id: 3,
      totaleProducts: "35 products",
      title: "Berries from the garden",
      link: "/shop-catalog",
      imageUrl: "./product-img3.png",
    },
  ]);

  return (
    <>
      <div className='product-container'>
        {data.map((item, index) => (
          <div className={`product-item productItem${index + 1}`} key={item.id}>
            <span>{item.totaleProducts}</span>
            <p>{item.title}</p>
            <div className='btnContainer'>
              <Link className='shopBtn' to={item.link}>
                Shop now
              </Link>
              <i className='fa-solid fa-arrow-right' id='rightArrow'></i>
            </div>
            <img src={item.imageUrl} alt='Products' />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
