import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  LoginSigninBox,
  LoginSigninInput,
  LoginSigninBtn,
  Label,
  InputWrapper

} from "../components/elements/LoginSigninBox";

const LoginPage = () => {
    const navigate = useNavigate();

  return (
    <LoginSigninBox>
      <Home>IsKream</Home>
      <HomeSub>I's KICKS RULE EVERYTHING AROUND ME</HomeSub>
      <InputWrapper>
      <Label >아이디</Label>
      <LoginSigninInput placeholder="예) iskream" />
      </InputWrapper>
      <InputWrapper>
      <Label >비밀번호</Label>
      <LoginSigninInput  type="password" placeholder="영문, 숫자, 특수문자 조합 8~16자"/>
      </InputWrapper>
      <InputWrapper>
      <Label>닉네임</Label>
      <LoginSigninInput/>
      </InputWrapper>
      <GoToSignup onClick={()=> navigate("/signup")}>회원가입</GoToSignup>
      <LoginSigninBtn>로그인</LoginSigninBtn>
    </LoginSigninBox>
  );
};

export default LoginPage;


const Home = styled.div`
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
 
`;

const HomeSub = styled.div`

    font-size : 0.5rem;
    padding-bottom : 2.5rem;
    font-weight : bold;

`;

const GoToSignup = styled.button`

    margin-top : 0.7rem;
    color : gray;
    background-color : transparent;
    border : none;
    font-size : 1rem;
    cursor : pointer;
`;