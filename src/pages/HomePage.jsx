
import React,{useEffect} from "react";
import HomeImageSlider from "../components/HomeImageSlide";
import HomeItem from "../components/HomeItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
}, []);

  return (
    <>
      <HomeImageSlider />
      <HomeItem />
    </>
  );
};

export default HomePage;

