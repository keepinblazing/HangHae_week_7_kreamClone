import React from "react";
import styled from "styled-components";
import HomeImageSlider from "../components/HomeImageSlide";
import HomeItem from "../components/HomeItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  return (
    <>
 
      <HomeImageSlider />
      <HomeItem/>
    </>
  );
};

export default HomePage;

const Margin = styled.div`
  margin-bottom: 500px;
`;

