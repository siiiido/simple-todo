import React, { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../App";
import { Dispatch } from "redux";
import { nanoid } from "nanoid";
import { Todo } from "../type";
import { Btn, BtnContainer } from "../style/Btn";
import { Container } from "../style/Container";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import PageTransition from "../style/PageTransition";
import { Header } from "../style/Header";
import { Checked } from "styled-components";

const TodoMain = () => {
  const getTodo = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();
  const [textField, setTextField] = useState("");

  const handleText = (e: ChangeEvent<HTMLInputElement>) =>
    setTextField(e.target.value);

  const handleTodoEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (textField !== "" && e.key === "Enter") {
      dispatch({
        type: "plus",
        payload: { id: nanoid(), todoText: textField, checkbox: false },
      });
      setTextField("");
    }
  };

  const handleTodoClick = () => {
    if (textField !== "") {
      dispatch({
        type: "plus",
        payload: { id: nanoid(), todoText: textField, checkbox: false },
      });
      setTextField("");
    }
  };

  const handleTodoDeleteAll = () => {
    dispatch({ type: "deleteAll", payload: { getTodo } });
  };

  const handleTodoDelete =
    (todo: Todo) => (e: MouseEvent<HTMLButtonElement>) => {
      dispatch({
        type: "delete",
        payload: {
          id: todo.id,
          todoText: todo.todoText,
          checkbox: todo.checkbox,
        },
      });
    };

  const handleCheck = (todo: Todo) => (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "checked",
      payload: {
        id: todo.id,
        todoText: todo.todoText,
        checkbox: todo.checkbox,
      },
    });
  };

  return (
    <PageTransition>
      <Layout>
        <Header>Simple Todo</Header>
        <TextField
          type="text"
          value={textField}
          onChange={handleText}
          onKeyPress={handleTodoEnter}
          placeholder="write what you want to do"
        />
        <PlusBtn onClick={handleTodoClick}>
          <AiOutlinePlusSquare />
        </PlusBtn>
        <Container>
          {getTodo.map((todo) => (
            <TodoContainer key={todo.id}>
              <CheckBox
                type="checkbox"
                onChange={handleCheck(todo)}
                checked={todo.checkbox}
              />{" "}
              <Todos checked={todo.checkbox}>{todo.todoText}</Todos>{" "}
              <DeleteBtn onClick={handleTodoDelete(todo)}>
                <AiFillDelete />
              </DeleteBtn>
            </TodoContainer>
          ))}
        </Container>
        <BtnContainer margtinTop="21px">
          <Btn onClick={handleTodoDeleteAll}>Delete Checked</Btn>
          <NavLink to="/focus">
            <Btn background="#6EA4E4">Focus Mode</Btn>
          </NavLink>
        </BtnContainer>
      </Layout>
    </PageTransition>
  );
};

export default TodoMain;

const Layout = styled.div`
  width: 362px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
`;

const TextField = styled.input`
  width: 283px;
  height: 40px;
  margin-left: 14px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.58px;
  border: none;
  background-color: #f9f7f1;
  padding-left: 7px;
`;

const PlusBtn = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  appearance: none;
  background-color: white;
  font-size: 40px;
  transform: translate(5%, 40%);
  opacity: 50%;
  cursor: pointer;
  &:hover {
    opacity: 100%;
  }
`;

const TodoContainer = styled.div`
  padding-left: 23px;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  appearance: none;
  background-color: white;
  font-size: 17px;
  opacity: 50%;
  &:hover {
    opacity: 100%;
  }
`;

const Todos = styled.span<Checked>`
  font-weight: 13px;
  line-height: 15.23px;
  width: 250px;
  display: inline-block;
  font-weight: 400;
  margin-left: 5px;

  ${(props) =>
    props.checked &&
    css`
      opacity: 50%;
      text-decoration-line: line-through;
    `}
`;

const CheckBox = styled.input`
  width: 13px;
  height: 13px;
  transform: scale(1.5);
  cursor: pointer;
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
  &:checked {
    opacity: 100%;
  }
`;
