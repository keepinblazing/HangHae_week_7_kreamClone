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
          <Login>로그아웃</Login>
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
          <Shop>SHOP</Shop>
          <About>ABOUT</About>
        </MenuBox>
      </SecondHeader>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  z-index: 2;
`;
const FirstHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 65px;
  height: 30px;
  background-color: white;
`;

const SecondHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  padding-left: 50px;
  height: 68px;
  background-color: white;
  border: 1.2px solid #c9cdd6;
  border-bottom: transparent;
  border-right: transparent;
`;

const Home = styled.button`
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: bold;
  font-style: italic;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Login = styled.div`
  margin-left: 10px;
  font-size: 11px;
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
  margin-left: 20px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
`;

const About = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export default Header;
