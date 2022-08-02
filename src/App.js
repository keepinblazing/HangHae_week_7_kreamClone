import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import ProductBuyPage from "./pages/ProductBuyPage";
import ProductSellPage from "./pages/ProductSellPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/product/:product_id" element={<ProductPage/>}/>
        <Route path="/buy/:product_id" element={<ProductBuyPage/>}/>
        <Route path="/sell/:product_id" element={<ProductSellPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
