import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useContext, useEffect, useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { Route, Routes, useParams } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import Loading from "./pages/Loading";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivecyPolicy";
import CartIcon from "./components/CartLogo";

function App() {
  const { loading, error } = useContext(ProductContext);
  const [cartItems, setcartItems] = useState([]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  function additems(items) {
    setcartItems(items);
  }

  return (
    <>
      <Header />
      <CartIcon />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart additems={additems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
