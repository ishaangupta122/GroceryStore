import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import Recipe from "../components/Recipe";
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
