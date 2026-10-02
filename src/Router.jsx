import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Distribution from "./pages/Distribution";
import RetailPharmacies from "./pages/RetailPharmacies";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/distribution" element={<Distribution />} />
      <Route path="/retail-pharmacies" element={<RetailPharmacies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
