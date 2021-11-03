import styled from "styled-components";

export const Header = styled.footer`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  background-color: #bce3f0;
`;

export const Footer = styled.footer`
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eeeeee;
  font-size: small;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: lightgrey;
`;

export const TopMarginedDiv = styled.div`
  margin-top: 50px;
`;
export const BottomMarginedDiv = styled.div`
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  text-align: center;
`;

export const MainDiv = styled.div`
  font-size: 25px;
  border: ridge;
  position: static;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
`;

export const WarmMainDiv = styled.div`
  font-size: 25px;
  border: ridge;
  position: static;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  background-image: url(././warm.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
`;

export const ColdMainDiv = styled.div`
  font-size: 25px;
  border: ridge;
  position: static;
  align-items: center;
  margin-left: 150px;
  margin-right: 150px;
  background-image: url(././cold.jpg);
  background-repeat: no-repeat;
  background-position: initial;
  background-attachment: fixed;
`;

export const Select = styled.select`
  color: black;
  padding: 8px 16px;
  border: 1px solid;
  border-color: lightgrey;
  cursor: pointer;
  font-size: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
