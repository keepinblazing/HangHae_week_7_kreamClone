import React from "react"
import styled from "styled-components"

const LoadingSpinner = () => {

    return(
        <ImgContainer>
        <Img src = "https://kream.co.kr/_nuxt/img/loading.410eb77.gif" alt=""></Img>
        </ImgContainer>
    )
}

export default LoadingSpinner


const Img = styled.img`

display : flex;
justify-content : center;
align-items : center;
vertical-align : top;

`;
const ImgContainer = styled.div`

display : flex;
width : 100%;
background-color : white;
justify-content : center;
align-items : center;


`;