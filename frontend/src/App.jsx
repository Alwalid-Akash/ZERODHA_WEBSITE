import { Routes, Route } from "react-router-dom";
import Homepage from "./landing_page/home/Homepage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Signup from "./landing_page/signup/Signup";
import SupportPage from "./landing_page/support/SupportPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import Universe from "./landing_page/products/Universe";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./landing_page/Notfound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;