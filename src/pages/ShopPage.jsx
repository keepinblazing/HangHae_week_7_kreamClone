import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../axiosConfig";

const ShopPage = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };
  const getItem = async () => {
    try {
      const { data } = await instance.get(`/api/products?page=${page}`);
      setPosts(posts.concat(data));
    } catch {
      console.error("fetching error");
    }
  };

  useEffect(() => {
    console.log("page ? ", page);
    getItem();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <>
      <MainHeader>
        <SecondHeader>
          <MenuBox>
            <Home>SHOP</Home>
          </MenuBox>
        </SecondHeader>
      </MainHeader>
      <Warpper>
        <Container>
          <ItemContainer>
            {posts.map((item, index) => (
              <Card onClick={() => navigate(`/product/:${posts.id}`)}>
                <SubItem key={item.id + index}>
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
              </Card>
            ))}
          </ItemContainer>
        </Container>
      </Warpper>
    </>
  );
};

const MainHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  z-index: 2;
`;

const SecondHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 2.8rem;
  padding-left: 2.8rem;
  height: 8rem;
  background-color: transparent;
  border: transparent;
`;

const Home = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  letter-spacing: 0.05rem;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



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

const Card = styled.div`


:hover{

cursor :pointer;

}

`;



export default ShopPage;
