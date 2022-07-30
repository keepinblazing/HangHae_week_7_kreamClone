import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../axiosConfig";
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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  //오류메세지
  const [idMsg, setIdMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);
  const [nickMsg, setNickMsg] = useState(false);

  const navigate = useNavigate();
  //아이디 유효성 검사  5~16자리 숫자. 영문 혼합
  const IdVaildation = (e) => {
    const IdCheck = /^[a-z]+[a-z0-9]{5,19}$/g;
    if (!e.target.value || IdCheck.test(e.target.value)) setIdMsg(false);
    else setIdMsg(true);
    setId(e.target.value);
  };
  //비밀번호 유효성 검사 8~16자리 숫자,영문,특수문자 혼합
  const PasswordVaildation = (e) => {
    const PasswordCheck =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (!e.target.value || PasswordCheck.test(e.target.value)) setPasswordMsg(false);
    else setPasswordMsg(true);
    setPassword(e.target.value);
  };

  const NickVaildation = (e) => {
    if(e.target.value !== "") setNickMsg(false)
    else setNickMsg(true)
    setNickName(e.target.value)
  }
  const SignUp = () => {
    const data = {
      id,
      password,
      nickname,
    };

    return instance
      .post("/users/signup", data)
      .then((response) => {
        console.log(response);
        alert("가입완료");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };
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
        {passwordMsg === true ? (
          <>
            <Label style={{ color: "#ef6253" }}>비밀번호</Label>
            <LoginSigninInput
              type="password"
              value={password || ""}
              onChange={PasswordVaildation}
              style={{ borderBottomColor: "#ef6253" }}
            />
          </>
        ) : (
          <>
            <Label>비밀번호</Label>
            <LoginSigninInput
              type="password"
              placeholder="영문, 숫자, 특수문자 조합 8~16자"
              value={password || ""}
              onChange={PasswordVaildation}
            />
          </>
        )}

        {passwordMsg && (
          <Msg>영문, 숫자, 특수문자를 조합하여 입력해주세요.(8~16자)</Msg>
        )}
      </InputWrapper>
      <InputWrapper>
        <Label>닉네임</Label>
        <LoginSigninInput
          type="text"
          value={nickname || ""}
          placeholder="닉네임을 입력해주세요"
          onChange={NickVaildation}
        />
      </InputWrapper>
          {idMsg === false && passwordMsg === false && nickMsg === false && id !== ""
          && password !== "" && nickname !== "" ? (
            <LoginSigninBtn onClick={SignUp}>가입하기</LoginSigninBtn>
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
