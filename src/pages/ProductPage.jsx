import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);

  const product = {
    name: "Organic Mountain Blend Whole Bean Coffee",
    brand: "Green Valley Roasters",
    rating: 4.5,
    reviewCount: 2731,
    price: 249.99,
    originalPrice: 299.99,
    description:
      "Experience the rich, bold flavors of our Organic Mountain Blend. Sourced from high-altitude farms and roasted to perfection, this whole bean coffee delivers a smooth, full-bodied taste with hints of dark chocolate and a subtle fruity finish.",
    features: [
      "100% Organic Arabica beans",
      "Fair Trade certified",
      "Medium-dark roast",
      "12 oz (340g) bag",
      "Resealable bag for freshness",
      "Roasted in small batches",
      "Best brewed within 2 weeks of opening",
    ],
    images: [
      "./src/assets/prod1.png",
      "./src/assets/prod2.png",
      "./src/assets/prod3.png",
      "./src/assets/prod4.png",
    ],
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= Math.floor(rating) ? "#FFA41C" : "#E7E7E7",
            fontSize: "20px",
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const ImageGallery = () => (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "15%",
        }}
      >
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.name} view ${index + 1}`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              border:
                index === mainImage ? "2px solid #e77600" : "1px solid #a2a6ac",
              cursor: "pointer",
              opacity: index === mainImage ? 1 : 0.7,
              transition: "all 0.3s ease",
            }}
            onClick={() => setMainImage(index)}
          />
        ))}
      </div>
      <div
        style={{
          width: "85%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={product.images[mainImage]}
          alt={product.name}
          style={{
            width: "95%",
            height: "auto",
            borderRadius: "8px",
            transition: "all 0.3s ease",
          }}
        />
      </div>
    </div>
  );

  return (
    <>
      <div
        style={{
          maxWidth: "1300px",
          margin: "50px auto 100px auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {/* Left column: Images */}
          <div style={{ flex: "1 1 500px" }}>
            <ImageGallery />
          </div>

          {/* Right column: Product details */}
          <div style={{ flex: "1 1 300px" }}>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {product.name}
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "#0066c0",
                marginBottom: "10px",
              }}
            >
              by {product.brand}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              {renderStars(product.rating)}
              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "14px",
                  color: "#0066c0",
                }}
              >
                {product.reviewCount} ratings
              </span>
            </div>
            <div
              style={{
                borderTop: "1px solid #e7e7e7",
                borderBottom: "1px solid #e7e7e7",
                padding: "10px 0",
                marginBottom: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#B12704",
                }}
              >
                ${product.price.toFixed(2)}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  textDecoration: "line-through",
                  color: "#565959",
                }}
              >
                List Price: ${product.originalPrice.toFixed(2)}
              </p>
            </div>

            {/* Add to Cart section */}
            <div
              style={{
                border: "1px solid #D5D9D9",
                borderRadius: "8px",

                padding: "14px",
                marginTop: "20px",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="quantity"
                  style={{ marginRight: "10px", fontSize: "14px" }}
                >
                  Qty:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  style={{
                    padding: "5px",
                    borderRadius: "4px",
                    border: "1px solid #D5D9D9",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    width: "50%",
                    padding: "10px",
                    marginBottom: "10px",
                    backgroundColor: "#FFD814",
                    border: "1px solid #FCD200",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  Add to Cart
                </button>
                <button
                  style={{
                    width: "50%",
                    padding: "10px",
                    backgroundColor: "#FFF",
                    border: "1px solid #D5D9D9",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Add to Wish List
                </button>
              </div>
            </div>
            <p
              style={{
                marginTop: "15px",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              {product.description}
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  style={{ marginBottom: "5px", fontSize: "14px" }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ProductCard />
      <div style={{ margin: "100px 0" }}></div>
    </>
  );
};

export default ProductPage;
