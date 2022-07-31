import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux"
import {login} from "../redux/modules/user"
import { useNavigate } from "react-router-dom";
import {
  LoginSigninBox,
  LoginSigninInput,
  LoginSigninBtn,
  LoginSigninDbtn,
  Label,
  InputWrapper,
  Msg,
} from "../components/elements/LoginSigninBox";
import instance from "../axiosConfig";

const LoginPage = () => {
  //아이디, 비밀번호, 패스워드
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  //오류메세지
  const [idMsg, setIdMsg] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

 //아이디 유효성검사
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
    if (!e.target.value || PasswordCheck.test(e.target.value))
      setPasswordMsg(false);
    else setPasswordMsg(true);
    setPassword(e.target.value);
  };
  //로그인
  const LogIn = () => {
    const data = {
      id,
      password,
    };

    instance.post("/api/users/login", data).then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch(
          login({
            id: response.data.id,
            nickname: response.data.nickname,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <LoginSigninBox>
      <Home>IsKream</Home>
      <HomeSub>I's KICKS RULE EVERYTHING AROUND ME</HomeSub>
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
      <GoToSignup onClick={() => navigate("/signup")}>회원가입</GoToSignup>

      {idMsg === false &&
      passwordMsg === false &&
      id !== "" &&
      password !== "" ? (
        <LoginSigninBtn onClick={LogIn}>로그인</LoginSigninBtn>
      ) : (
        <LoginSigninDbtn>로그인</LoginSigninDbtn>
      )}
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
  font-size: 0.5rem;
  padding-bottom: 2.5rem;
  font-weight: bold;
`;

const GoToSignup = styled.button`
  margin-top: 0.7rem;
  color: gray;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;
