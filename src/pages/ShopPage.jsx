import React, { useEffect, useState, useRef, useCallback } from "react";
// import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import instance from "../axiosConfig";

const ShopPage = () => {
  const obsRef = useRef(null);

  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [posts, setPosts] = useState([]);

  const preventRef = useRef(true);
  const endRef = useRef(false);
  // const [searchParams, setSearchParms] = useSearchParams();

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  // useEffect(()=> {
  //   getPost();
  // },[page])

  const obsHandler = (entries) => {
    const target = entries[0];
    if (!endRef.current && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (page !== 1) getPost();
  }, [page]);

  const getPost = useCallback(async () => {
    setLoad(true);
    // const page_number = searchParams.get("page");
    const response = await instance.get(`/api/products?page=${page}`);
    if (response.data) {
      if (response.data.end) {
        endRef.current = true;
      }
      setPosts((prev) => [...prev, ...response.data.posts]);
      preventRef.current = true;
    }
    setLoad(false);
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
        {posts && (
          <Container>
            {posts.map((item, index) => (
              <ItemContainer key={item.id}>
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
              </ItemContainer>
            ))}
          </Container>
        )}
        {load ? <div>로딩중</div> : <> </>}

        <div ref={obsRef}></div>
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

export default ShopPage;
