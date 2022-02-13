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
  background-color: rgb(225, 225, 225, 0.5);
  text-align: center;
  padding: 2px;

  &:hover {
    opacity: 100%;
    background-color: ${(props) => props.theme.toggleBackground};
    color: ${(props) => props.theme.toggleText};
  }
`;
