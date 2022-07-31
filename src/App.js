import "./App.css";
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

function App() {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.isLogin);

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("user"));
    if (is_login === false && accessToken !== null) {
      instance
        .get("/api/users/login", {
          headers: { Authorization : accessToken },
        })
        .then((response) => {
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
