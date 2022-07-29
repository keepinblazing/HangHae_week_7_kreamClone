import React from "react";
import styled from "styled-components";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img6 from "../images/6.jpeg";
import img7 from "../images/7.jpeg";

const HomeImageSlide = () => {
  return (
    <SliderContainer>
      <ImgContainer>
        <Img src={img2} />
      </ImgContainer>
      <ImgContainer2>
        <Img src={img3} />
      </ImgContainer2>
      <ImgContainer3>
        <Img src={img4} />
      </ImgContainer3>
      <ImgContainer4>
        <Img src={img5} />
      </ImgContainer4>
      <ImgContainer5>
        <Img src={img6} />
      </ImgContainer5>
      <ImgContainer6>
        <Img src={img7} />
      </ImgContainer6>
    </SliderContainer>
  );
};

export default HomeImageSlide;

const SliderContainer = styled.div`
  overflow: hidden;
  position : relative;
`;

const ImgContainer = styled.div`
  display :flex;
  justify-content : center;
  width: 100%;
  background-color: #c9cdd6;
  text-align: center;
  
`;
const ImgContainer2 = styled(ImgContainer)`
  background-color: #f4f1e2;
`;
const ImgContainer3 = styled(ImgContainer)`
  background-color: #dad4c6;
`;
const ImgContainer4 = styled(ImgContainer)`
  background-color: black;
`;
const ImgContainer5 = styled(ImgContainer)`
  background-color: black;
`;

const ImgContainer6 = styled(ImgContainer)`
  background-color: #0568df;
`;

const Img = styled.img`
  width: 50rem;
  height: 20rem;
  background-position: center;
  
`;
