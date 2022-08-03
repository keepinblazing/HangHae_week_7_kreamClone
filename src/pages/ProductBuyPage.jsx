import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import instance from '../axiosConfig';
import { Helmet } from "react-helmet";
import LoadingSpinner from "../components/elements/LoadingSpinner";

import { Btn } from '../components/elements/Detail';

const ProductBuyPage = () => {
    const [productSize, setProductSize] = useState(null)
    const [productList, setProductList] = useState(null)
    const param = useParams()

    const product_id = param.product_id

    const removeClass = (e) => {
        document.querySelectorAll(e).forEach((item) => {
            item.classList.remove('active')
        })
    }

    const getProductList = async () => {
        await instance.get(`/api/products/${product_id}`)
            .then(res => {
                setProductList(res.data)
            })
    }

    const buyPost = async () => {
        const accessToken = localStorage.getItem("user");

        await instance.post(`/api/products/buy/${product_id}`, {
            size: productList.prices[productSize].size
        }, {
            headers: { Authorization: "Bearer " + accessToken }
        })
            .then(res => alert(res.data))
            .catch(res => alert(res.response.data))
    }

    useEffect(() => { getProductList() }, [])

    if (productList === null) {return <LoadingSpinner />}

    return (
        <>
            <Helmet>
                <title>KREAM | 한정판 거래의 FLEX</title>
            </Helmet>
            <ContainerBuy>
                <div className="content_wrap">
                    <div className="product_info">
                        <span className='product_thum'>
                            <img src={productList.thumbnail[0].imgUrl} alt="product" />
                        </span>
                        <span className='product_detail'>
                            <p className='product_brand'>{productList.product_brand}</p>
                            <p className='product_name_eg'>{productList.product_name_eng}</p>
                            <p className='product_name_kr'>{productList.product_name_kor}</p>
                        </span>
                    </div>

                    <div className="select_wrap">
                        <ul className='select_list'>
                            {productList.prices.map((item, idx) => {
                                return (
                                    <li className='select_item'>

                                        <SizeBtn value={idx} className="size_btn" onClick={(e) => {
                                            removeClass('.size_btn')
                                            e.currentTarget.classList.add('active')
                                            setProductSize(idx)
                                        }}>
                                            <span className='btn_body'>
                                                <div>{item.size}</div>
                                                <div>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                            </span>
                                        </SizeBtn>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="btn_wrap">
                        {productSize === null ? <></> :
                            <Btn width="100%" background='#ef6353' color='white' className='buy_btn' onClick={() => {
                                buyPost()
                            }}>
                                구매하기 {productList.prices[productSize].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                            </Btn>
                        }
                    </div>
                </div>
            </ContainerBuy>
        </>
    );
};

const ContainerBuy = styled.div`
    background: #FAFAFA;
    padding: 20px 0 160px 0;
    
    .content_wrap {
        width: 636px;
        height: 736px;
        padding: 32px;
        margin: auto;
        background: #FFF;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px 0px;
        position:relative;
    }

    .product_info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;

        .product_thum {

        }
        .product_thum > img {
            width: 80px;
            height: 80px;
            border-radius: 10px;
        }
        
        .product_detail {
            margin-left: 20px;
            font-size: 14px;

            .product_brand { font-weight: 700; }
            .product_name_kr { color: #bdbdbd }
        }
    }

    .select_wrap {
        padding: 20px 0;
        border-top: 1px solid #BDBDBD;
    }
    .select_list {
        display: flex;
        flex-wrap: wrap;
        width: 644px;
    }
    .select_item {
        width: 33.333%;
    }
    .active {
        border: 1px solid #000000;
        font-weight: 700;
    }


    .buy_btn { 
        position: absolute;
        bottom: 0;
        width: 636px;
        margin-bottom: 20px;
    }
`

const SizeBtn = styled.button`
    box-sizing: border-box;
    width: 205px;
    height: 58px;
    padding: 0px;
    margin-bottom: 8px;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
    outline: none;
    background: none;
    background-color: rgba(0,0,0,0);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    .btn_body > div:last-child {
        font-size: 12px;
        color: #EF6353;
    }
    .btn_body.active { font-weight: 700; }
`

export default ProductBuyPage;