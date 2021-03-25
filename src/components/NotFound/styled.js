import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainBg = styled.div`
  background-color: rgb(14, 30, 37);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const MainBlock = styled.div`
  background-color: #fff;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 20px;
  min-width: 100px;
  text-align: center;
  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 3px;
    background-color: #000;
    top: 18px;
    left: -18px;
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 3px;
    background-color: #000;
    top: 13px;
    left: -18px;
    transform: rotate(-45deg);
  }
  &:hover {
    color: green;
  }
`;

const NotFoundStyled = {
  MainBg,
  StyledLink,
  MainBlock,
};

export default NotFoundStyled;
