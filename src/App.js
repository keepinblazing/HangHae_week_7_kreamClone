import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import instance from "./axiosConfig";
import { login } from "./redux/modules/user";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ProductBuyPage from "./pages/ProductBuyPage";
import ProductSellPage from "./pages/ProductSellPage";

function App() {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.isLogin);
  
  useEffect(() => {
    const accessToken = localStorage.getItem("user");
    if (is_login === false && accessToken !== null) {
      instance
        .get("/api/detail/data", {
          headers: { Authorization: "Bearer " + accessToken },
        })
        .then((response) => {
          console.log(response);
          dispatch(
            login({
              id: response.data.id,
              nickname: response.data.nickname,
            })
          );
        });
      }
   });
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/products" element={<ShopPage />} />
        <Route path="/products/:product_id" element={<ProductPage/>}/>
        <Route path="/buy/:product_id" element={<ProductBuyPage/>}/>
        <Route path="/sell/:product_id" element={<ProductSellPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
