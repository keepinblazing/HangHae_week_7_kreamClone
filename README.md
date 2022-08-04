## Frontend

|  이름  | 담당                     |
| :----: | :----------------------- |
| 이동현 | 상품 상세 페이지, 상품 구매-판매, 관심상품 등록 |
| 박지민 | 로그인-회원가입, 메인 페이지, 상품 페이지 |

### Stack

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![Redux_toolkit](https://img.shields.io/badge/redux_toolkit-5F04B4.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![React_helmet](https://img.shields.io/badge/react_helmet-D8D8D8.svg?style=for-the-badge&logo=react&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![Axios](https://img.shields.io/badge/Axios-9F81F7?style=for-the-badge&logo=)
- ![React_slick](https://img.shields.io/badge/react_slick-A9F5F2.svg?style=for-the-badge&logo=react&logoColor=%white)
- ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
- ![Chart JS](https://img.shields.io/badge/Chart.js-FF6384.svg?style=for-the-badge&logo=Chart.js&logoColor=white)
- ![AWS](https://img.shields.io/badge/aws_S3-232F3E?style=for-the-badge&logo=aws&logoColor=white)

### 구현 중점사항

공통 : 실제 Kream 사이트와 똑같은 페이지를 구현해보는 것.

1. 라이브러리를 최대한 사용하지 않고 구현해보기. 
=> 라이브러리 자체가 JS 기반인 만큼 순수 코드를 작성한 경험이 있다면 라이브러리도 더 잘 사용할 수 있을 것 같아서.

2. 사용자의 편의를 중점사항으로 구현.
=> 페이지 상단으로 가는 버튼이나, 페이지 이동시 페이지 상단으로 올라가는 등 유저의 편의에 초점을 맞춤.

3. 최대한 빠르게 구현해보기.
=> 백엔드의 서버를 연동했을 때 오류를 핸들링하는 시간을 최대한 여유롭게 잡기 위해서 프론트 엔드 작업을 최대한 속도감 있게 진행함.


### TruobleShooting

1. 상품 리스트를 서버로 부터 받기 위해서 api 요청 후 요청 결과가 얻은 데이터를 state를 통해 관리를 했었는데 state에 주어진 초기값 null에 배열 함수가 적용되지 않아 렌더링에 문제가 발생.
=> 로딩 스피너를 렌더링이 되지 않았을 때 예외처리를 해주어서 해결.

2. 무한 스크롤을 스크롤 이벤트로 구현 했을 때 지속적인 리렌더링이 일어나서 전체적인 페이지에 로딩 속도가 저하됨.
=> 스크롤 이벤트가 아닌 intersetcionObserver api를 사용하여 리렌더링을 막고 페이지의 로딩 속도를 향상 시킴.

### 신기술 도입

1. 무한 스크롤
=> instersectionObserver를 사용

2. 차트
=> chart.js 라이브러리를 사용

3. 무한 캐러셀
=> reack-slick 라이브러리를 사용

4. 캐러셀
=> react-hook과 css를 이용하여 구현

5. react-helmet
=> 각 페이지 마다 다른 태그 적용

6. git flow 전략 사용

7. global style reset
=> 크로스 브라우징 시 우리가 의도 했던 ui가 보여지지 않을 수 있기 때문에 global style reset
