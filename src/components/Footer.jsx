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
    "점심시간 평일 13:00 ~ 14:00",
    "1:1 문의하기는 게더타운에서만 가능합니다.",
  ];

  return (
    <>
      <Banner></Banner>
      <Wrapper>
        <Top>
          <Left>
            <Title>이용안내</Title>
            <ListContainer>
              {USERINFO.map((info, index) => (
                <List key={index}>{info}</List>
              ))}
            </ListContainer>
          </Left>
          <Center>
            <Title>고객지원</Title>
            <ListContainer>
              {USERSUPPORT.map((support, index) => {
                return <List key={index}>{support}</List>;
              })}
            </ListContainer>
          </Center>
          <Right>
            <Title>고객센터 1234-5678</Title>
            <ListContainer>
              {CUSTMOERSURVICE.map((customer, index) => (
                <List key={index}>{customer}</List>
              ))}
            </ListContainer>
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
              <A style={{fontWeight:"bold"}}>개인정보처리방침</A>
            </Group>
          </TopInBottom>
          <Info>IsKREAM 주식회사</Info>

          <BottomInBottom>
            <SmallInfo>
              IsKream은 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
              판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다.
              <br />
              단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에
              있습니다.
            </SmallInfo>
          </BottomInBottom>
        </Bottom>
      </Wrapper>
    </>
  );
};
const Banner = styled.section`
  margin-top: 100px;
  width: 100%;
  height: 15rem;
  background-color: green;
`;

const Wrapper = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
`;

const Top = styled.section`
  flex: 0 0 20vh;
  display: flex;
`;

const Bottom = styled.section`
  flex: 0 0 20vh;
  padding-top: 2rem;
  border-top: 1px solid #c9cdd6;
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

const ListContainer = styled.li`
  list-style: none;
`;

const List = styled.li`
  margin-bottom: 1rem;
  color: #bcbcbc;
  font-size: 0.9rem;
  margin-right: 1rem;
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
  
 margin-right : 0.3rem;


`;

const BottomInBottom = styled.div`
  display: flex;
  width: 100%;
`;

const Group = styled.div`
  flex: 0 0 70vw;
  margin-bottom: 1rem;
`;

const SmallInfo = styled(Info)`
  font-size: 0.8rem;
`;

export default Footer;
