import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  LoginSigninBox,
  LoginSigninInput,
  LoginSigninBtn,
  Label,
  InputWrapper,
  Msg,
} from "../components/elements/LoginSigninBox";


const SignUpPage = () => {
  //아이디, 비밀번호, 패스워드
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [nickName, SetNickName] = useState();
  //오류메세지
  const [idMsg, setIdMsg] = useState(false);
  const [pwMsg, setPwMsg] = useState(false);
  //유효성 검사
  const [idChk, setIdChk] = useState();
  const [pwChk, setPwChk] = useState();

  const navigate = useNavigate();
  //아이디 유효성 검사  5~16자리 숫자. 영문 혼합
  const Idvalidation = (e) => {
    const IdCheck = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (!e.target.value || IdCheck.test(e.target.value)) setIdMsg(false);
    else setIdMsg(true);
    setId(e.target.value);
  };
  //비밀번호 유효성 검사 8~16자리 숫자,영문,특수문자 혼합
  const Pwvalidation = (e) => {
    const PwCheck = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (!e.target.value || PwCheck.test(e.target.value)) setPwMsg(false);
    else setPwMsg(true);
    setPw(e.target.value);
  };

  const CombineValidation = () => {
    if (!id) setIdMsg(true);
    if (!pw) setPwMsg(true);

    if (id && pw) return true;
    else return false;
  };

  return (
    <LoginSigninBox>
      <Title>회원가입</Title>
      <InputWrapper>
        <Label>아이디</Label>
        <LoginSigninInput type="text" placeholder="예) iskream" value={id || ""} 
        onChange={Idvalidation}/>
        {idMsg && (
          <Msg>올바른 아이디 형식으로 입력해주세요.</Msg>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label>비밀번호</Label>
        <LoginSigninInput
          type="password"
          placeholder="영문, 숫자, 특수문자 조합 8~16자"
          value={pw || ""}
          onChange={Pwvalidation}
        />
        {pwMsg && (
          <Msg>영문, 숫자, 특수문자를 조합하여 입력해주세요.(8~16자)</Msg>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label>닉네임</Label>
        <LoginSigninInput type="text" />
      </InputWrapper>
      <LoginSigninBtn>가입하기</LoginSigninBtn>
    </LoginSigninBox>
  );
};

export default SignUpPage;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 2.5rem;
`;
