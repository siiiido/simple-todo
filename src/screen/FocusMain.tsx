import { MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "..";
import { Dispatch } from "redux";
import { Todo } from "../type";
import styled from "styled-components";
import { Btn, BtnContainer } from "../style/Btn";
import { Container } from "../style/Container";
import PageTransition from "../style/PageTransition";
import { Header } from "../style/Header";

const FocusMain = () => {
  const getTodo = useSelector((state: RootState) => state.reducer);
  const getTheme = useSelector((state: RootState) => state.darkMode);
  const dispatch: Dispatch = useDispatch();
  const handleTheme = () => {
    let themeColor = getTheme === "light" ? "dark" : "light";
    dispatch({ type: `${themeColor}` });
  };

  const handleFocusTodo =
    (focusTodo: Todo) => (e: MouseEvent<HTMLButtonElement>) => {
      dispatch({
        type: "delete",
        payload: {
          id: focusTodo.id,
          todoText: focusTodo.todoText,
          checkbox: focusTodo.checkbox,
        },
      });
    };

  return (
    <PageTransition>
      <FocusLayout>
        <Header>Focus Mode</Header>
        <Container>
          {getTodo[0] ? (
            <>
              <Focus> {getTodo[0].todoText}</Focus>
            </>
          ) : (
            <Focus>Let's get it!</Focus>
          )}
        </Container>
        <BtnContainer margtinTop="98px">
          <Btn onClick={handleFocusTodo(getTodo[0])}>Complete</Btn>
          <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">
            <Btn>Todo Mode</Btn>
          </NavLink>
          {getTheme === "light" ? (
            <Btn onClick={handleTheme}>Dark Mode</Btn>
          ) : (
            <Btn onClick={handleTheme}>Light Mode</Btn>
          )}
        </BtnContainer>
      </FocusLayout>
    </PageTransition>
  );
};

export default FocusMain;

const FocusLayout = styled.div`
  width: 362px;
  height: 600px;
  background-color: ${(props) => props.theme.mainBackground};
  border-radius: 20px;
`;

const Focus = styled.div`
  height: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-weight: 400;
  line-height: 35.16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
