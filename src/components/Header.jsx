import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/modules/user";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.isLogin);

  const LogOut = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
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
          <Home
            onClick={() => {
              navigate("/");
            }}
          >
            IsKREAM
          </Home>
        </MenuBox>
        <MenuBox>
          <Shop onClick={() => navigate(`/products`)}>SHOP</Shop>
          <About>ABOUT</About>
        </MenuBox>
      </SecondHeader>
    </MainHeader>
  );
};

const MainHeader = styled.div`
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

const About = styled.div`
  margin-left: 1.2rem;
  margin-right: 1.2rem;
`;

export default Header;
