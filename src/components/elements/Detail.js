import styled from 'styled-components';

export const Btn = styled.button`
  width: ${(props) => props.width};
  height: 60px;
  padding: 10px;
  border: transparent;
  border-radius: 1rem;
  margin-top: 10px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  outline: none;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer; 

  .btn-price {
    margin-left: 10px;
  }
`; 