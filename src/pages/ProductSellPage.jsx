<<<<<<< HEAD
import React, { useState } from 'react';
import styled from 'styled-components';
=======
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import instance from '../axiosConfig';
>>>>>>> b5d31dc0639db4a13621fae0530aa22c8aff0d65

import { Btn } from '../components/elements/Detail';

const ProductSellPage = () => {
    const [productSize, setProductSize] = useState(null)
    const [sellPrice, setSellPrice] = useState(0)
<<<<<<< HEAD

    const productList = 
    {
       id : '상품아이디',
       thumbnail : [
        "https://th-thumbnailer.cdn-si-edu.com/C4MIxDa_YxisZm2EtoTNHweBKZU=/fit-in/1600x0/filters:focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg",
        "https://www.rd.com/wp-content/uploads/2022/01/GettyImages-912084898-e1641834261695.jpg",
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyRWcdIqVMks/v0/1200x-1.jpg",
        "https://th-thumbnailer.cdn-si-edu.com/C4MIxDa_YxisZm2EtoTNHweBKZU=/fit-in/1600x0/filters:focal(3126x2084:3127x2085)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ec/e6/ece69181-708a-496e-b2b7-eaf7078b99e0/gettyimages-1310156391.jpg",
    ],
       product_name_eng : 'Maison Mihara Yasuhiro Peterson OG Sole Canvas Low Sneakers Black',
       product_name_kor : '메종 미하라 야스히로 피터슨 OG 솔 캔버스 로우 스니커즈 블랙',
       prices:[
        {
            size: 230, 
            price: 126000, 
            price_diff: 4100
         },
        {
           size: 240, 
           price: 136000, 
           price_diff: 4200
        },
        {
            size: 250, 
            price: 146000, 
            price_diff: -1000
         },
         {
            size: 260, 
            price: 156000, 
            price_diff: -1200
         },
         {
            size: 270, 
            price: 166000, 
            price_diff: 1300
         }
       ],
       product_brand : 'Mihara Yasuhiro'
    }

=======
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

    const sellPost = async () => {
        await instance.post(`/api/products/sell/${product_id}`, {
            size: productList.prices[productSize].size,
            price: parseInt(sellPrice)
        }). then(res => console.log(res))
    }

    useEffect(() => {getProductList()}, [])

    if(productList === null) { return <></> }

>>>>>>> b5d31dc0639db4a13621fae0530aa22c8aff0d65
    return (
        <div>
            <ContainerSell>
                <div className="content_wrap">
                    <div className="product_info">
                        <span className='product_thum'>
<<<<<<< HEAD
                            <img src={productList.thumbnail[0]} alt="product" />
=======
                            <img src={productList.thumbnail[0].imgUrl} alt="product" />
>>>>>>> b5d31dc0639db4a13621fae0530aa22c8aff0d65
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
<<<<<<< HEAD
                                        <SizeBtn value={idx} onClick={() => setProductSize(idx)}>
=======
                                        <SizeBtn value={idx} className="size_btn" onClick={(e) => {
                                            removeClass('.size_btn')
                                            e.currentTarget.classList.add('active')
                                            setProductSize(idx)
                                            }}>
>>>>>>> b5d31dc0639db4a13621fae0530aa22c8aff0d65
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
                        <form onSubmit={(e) => {
                            e.preventDefault()
<<<<<<< HEAD
                            console.log(sellPrice)
=======
                            sellPost()
>>>>>>> b5d31dc0639db4a13621fae0530aa22c8aff0d65
                        }}>
                            <div className="sell_price_wrap">
                                <label className='sell_price_label' htmlFor="price">판매희망가</label>
                                <input className='sell_price' id="price" type="number" placeholder='희망가 입력' required
                                onChange={(e) => setSellPrice(e.target.value)}></input>
                            </div>
                            <Btn width="100%" background='#41b979' color='white' className='sell_btn'>판매하기</Btn>
                        </form>
                        
                        }
                    </div>
                </div>
            </ContainerSell>
        </div>
    );
};

const ContainerSell = styled.div`
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

    .btn_wrap {
        position: absolute;
        bottom: 0;
        width: 644px;
        margin-bottom: 20px;
    }
    .sell_price_label {
        font-size: 14px;
        font-weight: 700;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
    .sell_price {
        width: 100%;
        height: 1.625rem;
        padding: 10px 0 14px;
        border: none;
        border-bottom: 1px solid #BDBDBD;
        margin-top: 12px;
        outline: none;
        font-size: 20px;
        font-weight: 700;
        text-align: right;
      
        :focus {
            border-bottom: 2px solid black;
            
        }
        ::placeholder {
            font-size: 0.9rem;
        }
    }
    .sell_btn {
        margin-top: 20px;
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
        color: #31B46E
    }
    .btn_body.active { font-weight: 700; }
`

export default ProductSellPage;