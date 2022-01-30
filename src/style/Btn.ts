import styled from "styled-components";
import { ButtonnContainer, Button } from "styled-components";

export const BtnContainer = styled.div<ButtonnContainer>`
  all: unset;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: ${(props) => props.margtinTop};
`;

export const Btn = styled.button<Button>`
  all: unset;
  width: 100px;
  height: 35px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  line-height: 15.23px;
  -webkit-text-fill-color: black;
  /* background-color: #E1E1E1; */
  background-color: rgb(225, 225, 225, .5);
  text-align: center;
  padding: 2px;

  &:hover {
    opacity: 100%;
    background-color: ${(props) => props.background || "#E1E1E1"};
    color: ${(props) => props.color || "black"};
    -webkit-text-fill-color:${(props) => props.color || "black"} ;
  }
`;
