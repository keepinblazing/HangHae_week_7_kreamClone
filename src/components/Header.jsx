import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/modules/user";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.isLogin);
  const [page, setPage] = useState(1);

  const LogOut = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {window.location.pathname === "/products" ? (
        <>
          <ShopMainHeader>
            <FirstHeader>
              {is_login === true ? (
                <Login onClick={LogOut}>로그아웃</Login>
              ) : (
                <Login
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인
                </Login>
              )}
            </FirstHeader>
            <SecondHeader>
              <MenuBox>
                <Home onClick={() => navigate("/")}>IsKREAM</Home>
              </MenuBox>
              <MenuBox>
                <ShopTwo onClick={() => navigate(`/products?page=${page}`)}>
                  SHOP
                </ShopTwo>
                <About>ABOUT</About>
              </MenuBox>
            </SecondHeader>
            <ShopHeaderContainer>
              <ShopHeader>
                <MenuBox>
                  <Homee onClick={() => window.scrollTo(0, 0)}>SHOP</Homee>
                </MenuBox>
              </ShopHeader>
            </ShopHeaderContainer>
          </ShopMainHeader>
        </>
      ) : (
        <MainHeader>
          <FirstHeader>
            {is_login === true ? (
              <Login onClick={LogOut}>로그아웃</Login>
            ) : (
              <Login
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </Login>
            )}
          </FirstHeader>
          <SecondHeader>
            <MenuBox>
              <Home onClick={() => navigate("/")}>IsKREAM</Home>
            </MenuBox>

            <MenuBox>
              <Shop onClick={() => navigate(`/products?page=${page}`)}>
                SHOP
              </Shop>

              <About>ABOUT</About>
            </MenuBox>
          </SecondHeader>
        </MainHeader>
      )}
    </>
  );
};

const MainHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const ShopMainHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const FirstHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4rem;
  height: 1.8rem;
  background-color: white;
`;

const SecondHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  height: 4.2rem;
  background-color: white;
  border: 1.2px solid #c9cdd6;
  border-bottom: transparent;
  border-right: transparent;
`;

const Home = styled.div`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

const Homee = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  letter-spacing: 0.05rem;
  :hover {
    cursor: pointer;
  }
`;

const Login = styled.div`
  margin-left: 0.6rem;
  font-size: 0.75rem;
  :hover {
    cursor: pointer;
  }
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shop = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  :hover {
    cursor: pointer;
  }
`;

const ShopTwo = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

const About = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`;

const ShopHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  height: 8rem;
  background-color: white;
  border: transparent;
`;

const ShopHeaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 5rem;
  background-color: white;
  z-index: 2;
`;
export default Header;
