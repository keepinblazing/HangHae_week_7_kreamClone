import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default class HomeImageSlide extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 250,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,

      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <div style={{display:"flex", backgroundColor:"black", width:"100%", height:"35vh", justifyContent:"center"}}>
            <img
              src={
                "https://kream-phinf.pstatic.net/MjAyMjA3MjdfMjQw/MDAxNjU4ODgzNzA5NTE5.kZ2RDD87cLTtfHWpX_5pQAK-mXbTHtUc72wip5o5rQgg.m0dhhQj747H8fLEVrT_UvrscNzRUCWbcS0TVLx6lwjQg.JPEG/a_fc1fe6d2b1e944b09b523cddfb718566.jpg?type=m_2560"
              }
              
              alt=""/>
     
            </div>
          </div>
          <div>
          <div style={{display:"flex", backgroundColor:"#0568DF", width:"100%", height:"35vh", justifyContent:"center"}}>
            <img
              src={
                "https://kream-phinf.pstatic.net/MjAyMjA3MjlfNzUg/MDAxNjU5MDgzNjg1NzU1.K8UQe_1XIB7cjIm9Ft-c5xfsZ1PpPkN_lTX84zVd7HEg.pOIHVaAivuTpn4JbkcSGKdPp4Hgh_NOF02HsJhUc4Pwg.JPEG/a_d397a1f77ec848738b9bae9ff240dc8b.jpg?type=m_2560"
              }
             
              alt=""
            />
            </div>
          </div>
          
          <div>
          <div style={{display:"flex", backgroundColor:"#C9CDD6", width:"100%", height:"35vh", justifyContent:"center"}}>
            <img
              src={
                "https://kream-phinf.pstatic.net/MjAyMjA3MjdfMTAg/MDAxNjU4OTEzOTYwMTQ0.JDLvPUcF6HhuYwFylUDm7SoDliZB9jYfmEIKWHZ1ilgg.FYbUeZIDZBl2XFmYnrsMhX-jeb1xuOu3BrvhkmWNi94g.JPEG/a_d09e5a095f6d49caa3fc09c6d6cc29dc.jpg?type=m_2560"
              }
             
              alt=""
            />
            </div>
          </div>
          <div>
          <div style={{display:"flex", backgroundColor:"#F4F1E2", width:"100%", height:"35vh", justifyContent:"center"}}>
            <img
              src={
                "https://kream-phinf.pstatic.net/MjAyMjA3MjVfMTY5/MDAxNjU4NzM4NzQ4MTQ3.NKmkuL3uSrQemYhtLZWc8mEaBBz4XSveeyAA0AIs6z4g.0lw8da4wydWDTQ9CxgMfn3VYcJ9Ik2fG5jWAw8MuK00g.JPEG/a_064940215a0f4734b5ede9b9b973d8c9.jpg?type=m_2560"
              }
              alt=""
            />
            </div>
          </div>
          <div>
          <div style={{display:"flex", backgroundColor:"black", width:"100%", height:"35vh", justifyContent:"center"}}>
            <img
              src={
                "https://kream-phinf.pstatic.net/MjAyMjA3MjlfMjk5/MDAxNjU5MDYzNjU5ODc4.TonFcfhSmIhezIckmLvRl7OFZFQLBKo9UPVGNj3uRBIg.hgW9mVxYIHi0xNIVtQTOPh19hUzHbU4jGPV6IPxTFL4g.JPEG/a_b10ebb01a12044e7a8a42c66caf22a0c.jpg?type=m_2560"
              }
              alt=""
            />
            </div>
          </div>
          <div>
          <div style={{display:"flex", backgroundColor:"#34302D", width:"100%", height:"35vh", justifyContent:"center"}}>
            <img
              src={
                "https://kream-phinf.pstatic.net/MjAyMjA3MjFfNTMg/MDAxNjU4MzgyOTg0MjE3.vfor0-_-8X7IdfkxX5KDk1uonWExOZyOcKFtATwAleAg.3qElZ4DdZksnrq9idEPT8MP_4ggds7MOflg1OhgsxrMg.JPEG/a_bcaf6b515384429c8f245129082bece4.jpg?type=m_2560"
              }
              alt=""
            />
            </div>
          </div>
        </Slider>
        </Wrapper>
    );
  }
}

const Wrapper = styled.div`


.slick-dots {

  bottom : 1rem ;

}
.slick-prev {

  left : 0px;
  z-index : 1;

  & ::before{

    content : url("")


  }

}
.slick-next {

  right : 0px;
  z-index : 1;
  
  & ::before{

content : url("")


}


}


`;