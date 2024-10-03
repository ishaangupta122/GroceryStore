import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import Recipe from "../components/Recipe";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Carousel />
      <ProductCard />
      <Products />
      <Recipe />
    </>
  );
};

export default Home;
