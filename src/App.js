import React, { useEffect , useState } from "react";
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
  const [page, setPage] = useState(1);

  useEffect(() => {
    const accessToken = localStorage.getItem("user");
    if (is_login === false && accessToken !== null) {
      instance
        .get("/api/users/auth", {
          headers: { Authorization : 'Bearer ' + accessToken },
        })
        .then((response) => {
          console.log(response)
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
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ShopPage/>}/>
        <Route path="/product/:productid" element={<ProductPage/>}/>
        <Route path="/product/buy/" element={<ProductBuyPage/>}/>
        <Route path="/product/sell/" element={<ProductSellPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
