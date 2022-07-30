import React from "react";
import styled from "styled-components";
import {
    LoginSigninBox,
    LoginSigninInput,
    LoginSigninBtn,
    Label,
    InputWrapper
  
  } from "../components/elements/LoginSigninBox";

const SignUpPage = () => {

    return (
        <LoginSigninBox>
          <Title>회원가입</Title>
          <InputWrapper>
          <Label >아이디</Label>
          <LoginSigninInput placeholder="예) iskream" />
          </InputWrapper>
          <InputWrapper>
          <Label >비밀번호</Label>
          <LoginSigninInput placeholder="영문, 숫자, 특수문자 조합 8~16자"/>
          </InputWrapper>
          <InputWrapper>
          <Label>닉네임</Label>
          <LoginSigninInput/>
          </InputWrapper>
          <LoginSigninBtn>가입하기</LoginSigninBtn>
        </LoginSigninBox>
      );
    };
    
    export default SignUpPage;
    
    
    const Title = styled.div`
    
    font-size : 2rem;
    font-weight : bold;
    padding-bottom : 2.5rem;
    
    
    
    `;




