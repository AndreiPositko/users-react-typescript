import styled from 'styled-components';

const Title = styled.h1`
  display: block;
  background-color: green;
  border: 1px double red;
  line-height: 1.3;
  padding: 10px;
  cursor: pointer;
  /* &:hover {
    transform: scale(1.1, 1.1);
    transition: all 0.5s ease-in-out;
  } */
`;

const BtnLogout = styled.button`
  padding: 10px;
  min-width: 100px;
  background-color: #911;
  color: #fff;
  font-weight: bold;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 10px;
  right: 20px;
  &:hover{
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }

`
export default {
  Title,
  BtnLogout,
};