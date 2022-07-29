import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img6 from "../images/6.jpeg";
import img7 from "../images/7.jpeg";

const HomeImageSlide = () => {
  const totalSlide = 5;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const nextSlide = () => {
    currentSlide >= totalSlide
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(totalSlide)
      : setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translate(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <SliderContainer ref={slideRef}>
      <Img src={img2} />
      <Img src={img3} />
      <Img src={img4} />
      <Img src={img5} />
      <Img src={img6} />
      <Img src={img7} />
    </SliderContainer>
  );
};

export default HomeImageSlide;

const SliderContainer = styled.div`
  overflow: hidden;
  display: flex;
`;

// const ImgContainer = styled.div`
//   background-color: #c9cdd6;
//   justify-content : center;
// `;
// const ImgContainer2 = styled(ImgContainer)`
//   background-color: #f4f1e2;
// `;
// const ImgContainer3 = styled(ImgContainer)`
//   background-color: #dad4c6;
// `;
// const ImgContainer4 = styled(ImgContainer)`
//   background-color: black;
// `;
// const ImgContainer5 = styled(ImgContainer)`
//   background-color: black;
// `;
// const ImgContainer6 = styled(ImgContainer)`
//   background-color: #0568df;
// `;
const Img = styled.img`
  width: 100%;
  height: 35vh;
`;
