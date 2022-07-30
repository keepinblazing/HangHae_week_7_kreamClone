import React from "react";
import styled from "styled-components";
import HomeImageSlider from "../components/HomeImageSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  return (
    <>
      <Margin2 />
      <HomeImageSlider />
      <Margin></Margin>
    </>
  );
};

export default HomePage;

const Margin = styled.div`
  margin-bottom: 500px;
`;
const Margin2 = styled.div`
  margin-left: 500px;
`;
