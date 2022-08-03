import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import instance from "../axiosConfig";
import LoadingSpinner from "../components/elements/LoadingSpinner";
import { Helmet } from "react-helmet";

const ShopPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    console.log("스크롤 이벤트");
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    } else {
      setLoading(false);
    }
  };
  const getPost = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get(`/api/products?page=${page}`);
      setPosts(posts.concat(data));
      setLoading(false);
    } catch {
      console.error("fetching error");
    }
  };
  //페이지 표시
  useEffect(() => {
    console.log("page ? ", page);
    getPost();
  }, [page]);
  //이벤트 등록 passive 설정 추가, 쓰로틀링 구현 중
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);
  //새로고침시 페이지 최상단으로 이동
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Helmet>
    <title>SHOP | KREAM</title>
      </Helmet>
      <Warpper>
        <Container>
          <ItemContainer>
            {posts.map((item, index) => (
              <Card onClick={() => navigate(`/products/${item.id}`)} key={item.id + index}>
                <SubItem >
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
          {loading ? <LoadingSpinner /> : null}
        </Container>
      </Warpper>
    </>
  );
};


export default ShopPage;

const Warpper = styled.section`
  display : block;
  max-width: 1280px;
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
  display: grid;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
`;

const SubItem = styled.div`
  width: 100%;
  height: 28rem;
`;

const Item = styled.div`
  display: flex;
  margin: auto;
  width: 18rem;
  background-color: #f5f5f5;
  height: 18rem;
  border-radius: 1rem;
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
  :hover {
    cursor: pointer;
  }
`;

