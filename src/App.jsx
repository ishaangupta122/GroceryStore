import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ShopCatalog from "./pages/ShopCatalog";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop-catalog" element={<ShopCatalog />} />
        <Route path="/product-card" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
