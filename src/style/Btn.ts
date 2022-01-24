import styled from "styled-components";
import { Button, ButtonnContainer } from "../type";

export const BtnContainer = styled.div<ButtonnContainer>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: ${(props) => (props.margtinTop)};
`;

export const Btn = styled.button<Button>`
  width: 100px;
  height: 35px;
  
  border: none;
  cursor: pointer;
  border-radius: 5px;

  font-size: 13px;
  font-weight: 400;
  line-height: 15.23px;

  &:hover{
    background-color: ${(props) => (props.background || "#E1E1E1")};
    color: ${(props) => (props.color || "black")};
  }
`;