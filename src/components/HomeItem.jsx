import React, { useEffect, useState } from "react";
import styled from "styled-components";
import instance from "../axiosConfig";

const HomeItem = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await instance.get(`/api/products/recent`);
      return data;
    };

    getPost().then((result) => setPosts(result));
  }, []);

  return (
    <Warpper>
      <Container>
        <TitleContainer>
          <Title>Just Registered</Title>
          <SubTitle>최근 등록 상품</SubTitle>
        </TitleContainer>
       
          <ItemContainer>
          {posts.map((item, index) => (
            <div  key={item.id}>
            <SubItem>
              <Item>
                <img src={item.thumbnail} alt="" />
              </Item>
              <Itemdesc>
                <ItemName>{item.product_brand}</ItemName>
                <ItemFullName>{item.product_name_eng}</ItemFullName>
                <ItemPrice>{item.product_price}원</ItemPrice>
                <RightNow>즉시구매가</RightNow>
              </Itemdesc>
            </SubItem>
            </div>
        
        ))}
          </ItemContainer>
      </Container>
    </Warpper>
  );
};

export default HomeItem;

const Warpper = styled.section`
  max-width: 1280px;
  display: block;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1280px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -0.1px;
  margin-bottom: 0.1rem;
`;

const SubTitle = styled.div`
  color: gray;
  font-size: 0.8rem;
  letter-spacing: -0.21px;
`;

const ItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
`;

const SubItem = styled.div`
  width: 100%;
  height: 28rem;
`;

const Item = styled.div`
  background-color: #f5f5f5;
  width: 18rem;
  height: 18rem;
  border-radius: 1rem;
  margin: auto;
  display: flex;
`;

const Itemdesc = styled.div`
  padding: 1rem;
`;

const ItemName = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  text-decoration: underline;
  margin-bottom: 0.5rem;
`;

const ItemFullName = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.div`
  font-weight: bold;
`;

const RightNow = styled.div`
  font-size: 0.75rem;
  color: gray;
`;
