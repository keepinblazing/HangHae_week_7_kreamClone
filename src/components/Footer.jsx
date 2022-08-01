/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

const Footer = () => {
  const USERINFO = [
    "검수기준",
    "이용정책",
    "패널티 정책",
    "커뮤니티 가이드라인",
  ];

  const USERSUPPORT = [
    "공지사항",
    "서비스 소개",
    "패널티 정책",
    "판매자 방문접수",
  ];

  const CUSTMOERSURVICE = [
    "운영시간 평일 09:00 ~ 21:00 (일 휴무)",
    "점심시간 평일 11:30 ~ 13:00",
    "1:1 문의하기는 게더타운에서만 가능합니다.",
  ];

  return (
    <Wrapper>
      <BannerContainer>
        <Banner>
          <BannerTitle>SERVICE GUIDE</BannerTitle>
          <BannerContent>
            IsKREAM은 처음이지?
            <br />
            서비스 소개를 확인해 보세요.
          </BannerContent>
          <BannerBtn>서비스 안내</BannerBtn>
        </Banner>
        <Banner2>
          <BannerTitle>DOWNLOAD THE APP</BannerTitle>
          <BannerContent>
            IsKREAM 앱을 설치하여
            <br />
            한정판 스니커즈를 FLEX 하세요!
          </BannerContent>
          <BannerBtn>앱 설치하기</BannerBtn>
        </Banner2>
      </BannerContainer>

      <Top>
        <Left>
          <Title>이용안내</Title>

          {USERINFO.map((info, index) => (
            <List key={index}>{info}</List>
          ))}
        </Left>
        <Center>
          <Title>고객지원</Title>

          {USERSUPPORT.map((support, index) => {
            return <List key={index}>{support}</List>;
          })}
        </Center>
        <Right>
          <Title>고객센터 1234-5678</Title>

          {CUSTMOERSURVICE.map((customer, index) => (
            <List key={index}>{customer}</List>
          ))}

          <Button>자주 묻는 질문</Button>
        </Right>
      </Top>

      <Bottom>
        <TopInBottom>
          <Group>
            <A>회사소개</A>
            <A>인재채용</A>
            <A>제휴제안</A>
            <A>이용약관</A>
            <A style={{ fontWeight: "bold" }}>개인정보처리방침</A>
          </Group>
        </TopInBottom>
        <Info>IsKREAM 주식회사</Info>

        <BottomInBottom>
          <SmallInfo>
            IsKream은 판매를 하지 않습니다. 신발을 구매하고 싶으시면 KREAM으로
            가주세요.
          </SmallInfo>
        </BottomInBottom>
      </Bottom>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const BannerContainer = styled.div`
  margin-bottom: 0.7rem;
  position: relative;
`;

const Banner = styled.div`
  width: 50%;
  float: left;
  height: 20rem;
  background-color: #565656;
  background-image: url("https://kream.co.kr/_nuxt/img/home_banner_bottom1.79549cb.png");
  background-position: right bottom;
  background-size: 25rem 15rem;
  background-repeat: no-repeat;
`;

const Banner2 = styled.section`
  width: 50%;
  float: left;
  height: 20rem;
  background-color: #3b3a3c;
  background-image: url("https://kream.co.kr/_nuxt/img/home_banner_bottom2.0077547.png");
  background-position: right bottom;
  background-size: 25rem 15rem;
  background-repeat: no-repeat;
`;

const BannerTitle = styled.div`
  font-weight: bold;
  padding: 0rem 0rem 0rem 1rem;
  margin-top: 4rem;
  color: white;
  font-size: 0.8rem;
`;

const BannerContent = styled.div`
  font-size: 1rem;
  padding: 1rem 0rem 1rem 1rem;
  color: white;
`;

const BannerBtn = styled.button`
  margin-left: 1rem;
  border: 1px solid hsla(0, 0%, 100%, 0.8);
  letter-spacing: 0.1rem;
  border-radius: 0.2rem;
  background-color: transparent;
  padding: 0.3rem;
  color: white;
  font-size: 0.2rem;
`;

const Top = styled.section`
  flex: 0 0 20vh;
  display: flex;
  padding: 1.5rem;
`;

const Bottom = styled.section`
  flex: 0 0 20vh;
  border-top: 1px solid #c9cdd6;
  padding: 1.5rem;
`;

const Left = styled.div`
  flex: 0 0 20vw;
`;

const Right = styled.div`
  flex: 0 0 30vw;
`;

const Center = styled.div`
  flex: 0 0 45vw;
`;

const Title = styled.div`
  padding-bottom: 1rem;
  font-weight: bold;
`;

const List = styled.li`
  margin-bottom: 1rem;
  color: #bcbcbc;
  font-size: 0.9rem;
  margin-right: 1rem;
  list-style: none;
`;

const Info = styled.p`
  margin-bottom: 0.1rem;
  color: #bcbcbc;
  font-size: 0.9rem;
`;

const Button = styled.button`
  padding: 0.7rem;
  color: white;
  background-color: black;
`;

const TopInBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const A = styled.a`
  margin-right: 0.3rem;
`;

const BottomInBottom = styled.div`
  display: flex;
  width: 100%;
`;

const Group = styled.div`
  flex: 0 0 70vw;
  margin-bottom: 1rem;
`;

const SmallInfo = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.1rem;
  color: #bcbcbc;
`;

export default Footer;
