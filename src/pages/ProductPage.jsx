import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Btn } from '../components/elements/Detail';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../axiosConfig';

const ProductPage = () => {
    const [isActive, setIsActive] = useState(false)
    const [productImg, setPorductImg] = useState(0);
    const [productSize, setProductSize] = useState(0);
    const [productList, setProductList] = useState(null)
    const navigate = useNavigate()
    const param = useParams()    

    const product_id = param.product_id

    const getProductList = async () => {
        await instance.get(`/api/products/${product_id}`)
            .then(res => {
                setProductList(res.data)
            })
    }

    useEffect(() => {
        getProductList()
    }, [productList])

    if(productList === null) { return <></> }


    return (
        <Content>
            <div className="col-wrap">
                <div className="col-fixed">
                    <Carousel>
                        <div className='container' style={{ width: `${560 * productList.thumbnail.length}px` }}>
                            {productList.thumbnail.map((item) => {
                                return (
                                    <div className="inner">
                                        <img src={item.imgUrl} alt="product_img"/>
                                    </div>
                                )
                            })}                            
                        </div>

                        <div className="slickarrow-wrap">
                            <div className='slickarrow' id='prev'>
                                <button onClick={() => {
                                    if (productImg !== 0) {
                                        document.querySelector('.container').style.transform = `translate(-${(productImg - 1) * 560}px)`
                                        setPorductImg(productImg - 1)
                                    }
                                }}></button>
                            </div>
                            <div className='slickarrow' id='next'>
                                <button onClick={() => {
                                    if (productImg < productList.thumbnail.length - 1) {
                                        document.querySelector('.container').style.transform = `translate(-${(productImg + 1) * 560}px)`
                                        setPorductImg(productImg + 1)
                                    }
                                }}></button>
                            </div>
                        </div>
                            
                        <ul className='clickdot-wrap'>
                            {productList.thumbnail.map((item, index) => {
                                return (
                                    <li className='click-dot'>
                                        <button 
                                        style={{ width: `${100 / productList.thumbnail.length}%` }}
                                        onClick={() => {
                                            document.querySelector('.container').style.transform = `translate(-${560 * index}px)`
                                        }}></button>
                                    </li>
                                )
                            })}     
                        </ul>                        
                    </Carousel>
                </div>

                <div className="col">
                    <div className="title-wrap">
                        <h2 className='brand'>{productList.product_brand}</h2>
                        <p className='name-eg'>{productList.product_name_eng}</p>
                        <p className='name-kr'>{productList.product_name_kor}</p>
                    </div>
                    <div className="detail-wrap">
                        <div className='detail-size'>
                            <span>사이즈</span>
                            <span>
                                <select name="" className="size-select" onChange={e => setProductSize(e.target.value)}>
                                    {productList.prices.map((item, idx) => {
                                        return (
                                            <option value={idx}>{item.size}</option>
                                        )
                                    })}
                                </select>
                            </span>
                        </div>
                        <div className="price-wrap">
                            <span>최근거래가</span>
                            <span className="price-detail">
                                <div className="price-select">{productList.prices.map((item, idx) => {
                                        if(idx === productSize) {
                                            return item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                    }
                                })}원</div>
                                {productList.prices.map((item, idx) => {
                                    if(idx === productSize) {
                                        if (item.price_diff > 0) {
                                            return (
                                                <div className="price-diff positive">
                                                    {Math.abs(item.price_diff).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="price-diff negative">
                                                    {Math.abs(item.price_diff).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                                                </div>
                                            )
                                        }
                                    }
                                })}
                            </span>
                            
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <Btn width='49%' background='#ef6353' color='white' onClick={() => navigate(`/buy/${product_id}`)}>
                            <span className='type'>구매</span>
                            <span className='btn-price'>{productList.prices[productSize].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                        </Btn>
                        <Btn width='49%' background='#41b979' color='white' style={{ marginLeft: '2%'}} onClick={() => navigate(`/sell/${product_id}`)}>
                            <span className='type'>판매</span>
                            <span className='btn-price'>{productList.prices[productSize].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                        </Btn>
                        <Btn className={isActive ? 'active' : ''}
                             background='white'
                             width='100%'
                             style={{ marginTop: '12px', border: '1px solid #bdbdbd' , textAlign: 'center', fontWeight: 400}}
                             onClick={() => setIsActive(!isActive)}>
                                관심상품
                        </Btn>
                    </div>

                    <div className="delivery-wrap">
                        <div>배송 정보</div>
                        <div className="delivery-info">
                            <span className='delivery-icon'>
                                <img  src="https://kream-phinf.pstatic.net/MjAyMTExMjlfMTQ4/MDAxNjM4MTc4MjI5NTk3.2phJLPtRvFqViNfhZu06HzNRiUBlT4cmZR4_Ukqsyesg.ikrfWOrL7WXCVO0Rqy5kMvOn3B2YpjLUj6RuJqosPX0g.PNG/a_8b54cbca40e945f4abf1ee24bdd031f7.png" alt="icon"/>
                            </span>
                            <span className='delivery-desc'>
                                <div>
                                    <span>일반배송</span>
                                    <span>3,000원</span>
                                </div>
                                <div>
                                    <span>검수 후 배송 ・ 5-7일 내 도착 예정</span>
                                </div>      
                            </span>
                        </div>
                    </div>

                    <div className="chart-wrap">

                    </div>
                            
                    <div className="confirm-wrap">
                        <div className="confirm-notice">구매 전 꼭 확인해주세요!</div>
                        <div className="confirm-info">
                            <div className="confirm-title no1" onClick={() => {
                                document.querySelector('.confirm-title.no1').classList.toggle('active')
                                document.querySelector('.confirm-desc.no1').classList.toggle('active')
                                }}>배송 기간 안내</div>
                            <div className="confirm-desc no1">
                                <strong>ISKREAM은 최대한 빠르게 모든 상품을 배송하기 위해 노력하고 있습니다. 배송 시간은 판매자가 검수를 위하여 상품을 검수센터로 보내는 속도에 따라 차이가 있습니다.</strong>
                                <p>[빠른배송 구매]</p>
                                <p>- 판매자가 보관 신청한 상품 중 검수에 합격한 상품을 ISKREAM의 전용 창고에 보관합니다. 보관 상품에 한하여 바로 구매와 95점 구매가 가능합니다.</p>
                                <p>- 오늘(오후 11:59까지) 결제하면 내일 바로 출고되어 빠른 배송이 가능합니다. (연휴 및 공휴일, 천재지변, 택배사 사유 등 예외적으로 출고일이 변경될 수 있습니다.</p>
                                <p>[일반 구매]</p>
                                <p>- 거래가 체결된 시점부터 48시간(일요일•공휴일 제외) 내에 판매자가 상품을 발송해야 하며, 통상적으로 발송 후 1-2일 내에 ISKREAM 검수센터에 도착합니다.</p>
                                <p>- 검수센터에 도착한 상품은 입고 완료 후 3영업일 이내에 검수를 진행합니다. 검수 합격시 배송을 준비합니다.</p>
                                <p>* 상품 종류 및 상태에 따라 검수 소요 시간은 상이할 수 있으며, 구매의사 확인에 해당할 경우 구매자와 상담 진행으로 인해 지연이 발생할 수 있습니다.</p>
                                <p>- 검수센터 출고는 매 영업일에 진행하고 있으며, 출고 마감시간은 오후 5시입니다. 출고 마감시간 이후 검수 완료건은 운송장번호는 입력되지만 다음 영업일에 출고됩니다.</p>
                            </div>
                        </div>
                        <div className="confirm-info">
                            <div className="confirm-title no2" onClick={() => {
                                document.querySelector('.confirm-title.no2').classList.toggle('active')
                                document.querySelector('.confirm-desc.no2').classList.toggle('active')
                                }}>검수 안내</div>
                            <div className="confirm-desc no2">
                                <strong>판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과 검사로 정가품 확인을 진행합니다.</strong>
                                <p>- 검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를 쌓고 분석하여 기록하고 있습니다.</p>
                                <p>- 업계 전문가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착, 소재 등 모든 것을 검수합니다.</p>
                                <strong>검수 결과는 불합격•검수 보류•합격의 세가지 상태로 결과가 변경됩니다.</strong>
                                <p>* 검수 합격: ISKREAM 검수택(Tag)이 부착되어 배송을 준비함</p>
                                <p>* 검수 보류: 앱에서 사진으로 상품의 상태 확인 및 구매 여부를 선택. (24시간 이후 자동 검수 합격)</p>
                                <p>* 검수 불합격: 즉시 거래가 취소되고 구매하신 금액을 환불 처리함.(환불 수단은 결제 수단과 동일)</p>
                            </div>
                        </div>
                        <div className="confirm-info">
                            <div className="confirm-title no3" onClick={(e) => {
                                document.querySelector('.confirm-title.no3').classList.toggle('active')
                                document.querySelector('.confirm-desc.no3').classList.toggle('active')
                                }}>구매 환불/취소/교환 안내</div>
                            <div className="confirm-desc no3">
                                <strong>ISKREAM은 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가 실시간으로 구매하여 거래를 체결합니다.</strong>
                                <p>- 단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다. 상품을 원하지 않으시는 경우 언제든지 ISKREAM에서 재판매를 하실 수 있습니다.</p>
                                <p>- 상품 수령 후, 이상이 있는 경우 ISKREAM 고객센터로 문의해주시기 바랍니다.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pointguide-wrap">
                        <div className='piontguide-info'>
                            <span className='pointguide-icon'>
                                <img src='https://kream.co.kr/_nuxt/img/img-guide-item-01.fa306b8.svg' alt='icon'/>
                            </span>
                            <span className='pointguide-desc'>
                                <div>100% 정품 보증</div>
                                <div>ISKREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.</div>      
                            </span>
                        </div>
                        <div className='piontguide-info'>
                            <span className='pointguide-icon'>
                                <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA0MCAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjUgMjYuM0MxMS41MzUzIDI2LjMgNi43IDIxLjQ2NDcgNi43IDE1LjVDNi43IDkuNTM1MzMgMTEuNTM1MyA0LjcgMTcuNSA0LjdDMjMuNDY0NyA0LjcgMjguMyA5LjUzNTMzIDI4LjMgMTUuNUMyOC4zIDIxLjQ2NDcgMjMuNDY0NyAyNi4zIDE3LjUgMjYuM1oiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMyMjIyMjIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNSAyM0wzMSAyOSIgc3Ryb2tlPSIjMjIyMjIyIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cGF0aCBkPSJNMTYgMTMuMzMzM0wyMC43NzI3IDE4TDMxIDgiIHN0cm9rZT0iIzIyMjIyMiIgc3Ryb2tlLXdpZHRoPSIyLjIiLz4KPC9zdmc+Cg==' alt='icon'/>
                            </span>
                            <span className='pointguide-desc'>
                                <div>엄격한 다중 검수</div>
                                <div>모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.</div>      
                            </span>
                        </div>
                        <div className='piontguide-info'>
                            <span className='pointguide-icon'>
                                <img src='https://kream.co.kr/_nuxt/img/img-guide-item-03.963fee7.svg' alt='icon'/>
                            </span>
                            <span className='pointguide-desc'>
                                <div>정품 인증 패키지</div>
                                <div>검수에 합격한 경우에 한하여 ISKREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.</div>      
                            </span>
                        </div>
                    </div>

                    <div className="notice">
                        <p>아이스크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 아이스크림(주)에 있습니다.</p>
                    </div>
                </div>
            </div>
        </Content>
    );
};

const Carousel = styled.div`
    overflow: hidden;
    width: 560px;
    height: 560px;
    position: sticky;
    top: 0px;

    .container {
        width: ${(props) => props.width};
        transition: transform 0.5s;
    }

    .inner {
    width: 560px;
    float: left;
    }
    .inner > img {
        width: 100%;
    }

    .slickarrow-wrap {

        .slickarrow {
            position: absolute;
            bottom: 50%;
            transform: translateY(50%);

            button {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                width: 44px;
                height: 44px;
                border: none;
                background: red;
                cursor: pointer;
            }
        }
        #prev {  }
        #next {
            right: 0;
        }
    }

    .clickdot-wrap {
        width: 536px;
        margin: 0 12px;
        position: absolute;
        bottom: 0;
        list-style: none;

        button {
            height: 22px;
            border: none;
            border-top: 1px solid #bdbdbd;
            background: transparent;
            float: left;
            cursor: pointer;

            :focus {
                border-top: 2px solid black;
            }
        }
    }
`

const Content = styled.div`
    margin: 30px 0 120px 0;

    .col-wrap {
        width: 1200px;
        margin: auto;
        display: flex;
    }

    .col-fixed {
        width: 50%;
        padding-right: 40px;
    }
    
    .col {
        width: 50%;
        padding-left: 40px;
        border-left: 1px solid #bdbdbd;
    }
    .col > .title-wrap {
        font-size: 18px;

        .brand {
            font-weight: 700;
            text-decoration: underline;
        }
        .name-eg {
            margin-top: 10px;
        }
        .name-kr {
            font-size: 14px;
            color: #bdbdbd;
            margin-top: 4px;
        }
    }
    .col > .detail-wrap {
        position: relative;
        margin-top: 10px;
        font-size: 14px;

        .detail-size {
            padding: 12px 0;

            .size-select {
                width: 100px;
                padding: .1em 1em;
                border: none;
                font-family: inherit;
                font-size: 18px;
                font-weight: 700;
                background: url('arrow.jpg') no-repeat 95% 50%;
                position: absolute;
                right: 0;
            }
        }
        .price-wrap {
            border-top: 1px solid #bdbdbd;
            padding: 12px 0;


            .price-detail {
                position: absolute;
                right: 0px;
            }
            .price-select {
                font-size: 18px;
                font-weight: 700;
            }
            .price-diff {
                font-size: 14px;
                text-align: right;
            }
            .price-diff.positive {
                color: red;
            }
            .price-diff.negative {
                color: blue;
            }
        }
    }
    .col > .btn-wrap {
        margin-top: 40px;

        .active {
            background: red;
        }
    }
    .col > .delivery-wrap {
        margin-top: 40px;
        font-size: 14px;
        
        .delivery-info {
            margin-top: 12px;
            display: flex;
        }
        .delivery-icon > img {      
            width: 40px;
            height: 40px;
        }
        .delivery-desc {
            margin-left: 12px;

            span:nth-child(1) {
                font-weight: 700;
            }
            span:nth-child(2) {
                margin-left: 8px;
            }
            div:nth-child(2) {
                color: #bdbdbd;
            }
            
        }
    }
    .chart-wrap {
        width: 560px;
        height: 560px;
        margin-top: 40px;
        background: #bdbdbd;
    }
    .confirm-wrap {
        margin-top: 40px;

        .confirm-notice {
            padding: 20px 0;
            border-bottom: 1px solid #bdbdbd;
            font-size: 18px;
            font-weight: 700;
        }
        .confirm-info {
        }
        .confirm-title {
            padding: 20px 0;
            font-size: 16px;
            border-bottom: 1px solid #bdbdbd;
        }
        .confirm-title.active {
            font-weight: 700;
            border-bottom: 2px solid #000000;
        }
        .confirm-desc {
            padding: 20px 0;
            font-size: 14px;
            display: none;
            border-bottom: 1px solid #bdbdbd;

            strong:nth-of-type(2) {
                display:block;
                margin-top: 10px;
            }
            p {
                margin-top: 10px;
            }
        }
        .confirm-desc.active {
            display: block;
        }

    }
    .col > .pointguide-wrap {
        margin-top: 40px;
        font-size: 14px;

        div {
            display: flex;
        }
        .piontguide-info {
            margin-top: 20px;
        }

        .pointguide-icon > img {      
            width: 40px;
            height: 40px;
        }
        .pointguide-desc {
            margin-left: 12px;
            
            div:nth-child(1) {
                font-weight: 700;
            }
            span:nth-child(2) {
                margin-left: 8px;
            }
            div:nth-child(2) {
                color: #bdbdbd;
            }
        }
    }
    .col > .notice {
        padding-top: 40px;
        border-top: 1px solid #bdbdbd;
        margin-top: 20px;
        font-size: 14px;
        color: #bdbdbd;
    }
`

export default ProductPage;