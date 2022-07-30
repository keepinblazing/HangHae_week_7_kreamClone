import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { combineReducers } from "redux";
import styled from "styled-components";
import {
  LoginSigninBox,
  LoginSigninInput,
  LoginSigninBtn,
  LoginSigninDbtn,
  Label,
  InputWrapper,
  Msg,
} from "../components/elements/LoginSigninBox";

const SignUpPage = () => {
  //아이디, 비밀번호, 패스워드
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [nickName, setNickName] = useState();
  //오류메세지
  const [idMsg, setIdMsg] = useState(false);
  const [pwMsg, setPwMsg] = useState(false);
  const [nickMsg, setNickMsg] = useState(false);
  //유효성 검사
  const [idChk, setIdChk] = useState();
  const [pwChk, setPwChk] = useState();
  const [nickChk, setNickChk] = useState();

  const navigate = useNavigate();
  //아이디 유효성 검사  5~16자리 숫자. 영문 혼합
  const IdVaildation = (e) => {
    const IdCheck = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (!e.target.value || IdCheck.test(e.target.value)) setIdMsg(false);
    else setIdMsg(true);
    setId(e.target.value);
  };
  //비밀번호 유효성 검사 8~16자리 숫자,영문,특수문자 혼합 <LoginSigninDbtn>가입하기</LoginSigninDbtn>
  const PwVaildation = (e) => {
    const PwCheck =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (!e.target.value || PwCheck.test(e.target.value)) setPwMsg(false);
    else setPwMsg(true);
    setPw(e.target.value);
  };

  const NickVaildation = (e) => {
    if(e.target.value !== "") setNickChk(false)
    else setNickChk(true)
    setNickName(e.target.value)


  }
  const CombineValidation = () => {
    if (!id) setIdMsg(true);
    if (!pw) setPwMsg(true);
    if (!nickName) setNickMsg(true);
    if (id && pw && nickMsg) return true;
    else return false;
  };

  console.log(idMsg, pwMsg, nickMsg);
  console.log(id,pw,nickName)
  return (
    <LoginSigninBox>
      <Title>회원가입</Title>
      <InputWrapper>
        {idMsg === true ? (
          <>
            <Label style={{ color: "#ef6253" }}>아이디</Label>
            <LoginSigninInput
              type="text"
              value={id || ""}
              onChange={IdVaildation}
              style={{ borderBottomColor: "#ef6253" }}
            />
          </>
        ) : (
          <>
            <Label>아이디</Label>
            <LoginSigninInput
              type="text"
              placeholder="5~16자리 숫자. 영문 혼합"
              value={id || ""}
              onChange={IdVaildation}
            />
          </>
        )}

        {idMsg && <Msg>올바른 아이디 형식으로 입력해주세요.</Msg>}
      </InputWrapper>
      <InputWrapper>
        {pwMsg === true ? (
          <>
            <Label style={{ color: "#ef6253" }}>비밀번호</Label>
            <LoginSigninInput
              type="password"
              value={pw || ""}
              onChange={PwVaildation}
              style={{ borderBottomColor: "#ef6253" }}
            />
          </>
        ) : (
          <>
            <Label>비밀번호</Label>
            <LoginSigninInput
              type="password"
              placeholder="영문, 숫자, 특수문자 조합 8~16자"
              value={pw || ""}
              onChange={PwVaildation}
            />
          </>
        )}

        {pwMsg && (
          <Msg>영문, 숫자, 특수문자를 조합하여 입력해주세요.(8~16자)</Msg>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label>닉네임</Label>
        <LoginSigninInput
          type="text"
          value={nickName || ""}
          placeholder="닉네임을 입력해주세요"
          onChange={NickVaildation}
        />
      </InputWrapper>
          {idMsg === false && pwMsg === false && nickMsg === false && id !== undefined
          && pw !== undefined && nickName !== undefined ? (
            <LoginSigninBtn>가입하기</LoginSigninBtn>
          ):(
            <LoginSigninDbtn>가입하기</LoginSigninDbtn>
          )}
      
    </LoginSigninBox>
  );
};

export default SignUpPage;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 2.5rem;
`;
