import React, {useState, ChangeEvent, KeyboardEvent, MouseEvent} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../App';
import { Dispatch } from 'redux';
import { nanoid } from 'nanoid';
import { Todo } from '../type';
import { Btn } from '../components/Btn';
import { Container } from '../components/Container';


const TodoMain = () => {
  const getTodo = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();
  const [textField, setTextField] = useState('')

  const handleText = (e: ChangeEvent<HTMLInputElement> ) => setTextField(e.target.value);

  const handleTodoEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if(textField !== '' && e.key === 'Enter'){
      dispatch({type: 'plus', payload: { id: nanoid(), todoText: textField, checkbox: false }});
      setTextField('');
    }
  }

  const handleTodoClick = () => {
    if(textField !== '') {
      dispatch({type: 'plus', payload: { id: nanoid(), todoText: textField, checkbox: false }});
      setTextField('');
    }
  }

  const handleTodoDeleteAll = () => {
    dispatch({ type: 'deleteAll', payload: {getTodo}})
  }

  const handleTodoDelete = (todo: Todo) => (e:  MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: 'delete', payload: { id: todo.id, todoText: todo.todoText, checkbox: todo.checkbox }});
  }

  const handleCheck = (todo: Todo) => (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'checked', payload: { id: todo.id, todoText: todo.todoText, checkbox: todo.checkbox }});
  }

  return (
    <Layout>
      <Header>Simple Todo</Header>
      <TextField type='text' value={textField} onChange={handleText} onKeyPress={handleTodoEnter} placeholder='write what you want to do' />
      <PlusBtn onClick={handleTodoClick}>+버튼</PlusBtn>
      <Container>
        {getTodo.map((todo) => (
          <TodoContainer key={todo.id}>
            <CheckBox type='checkbox' onChange={handleCheck(todo)} checked={todo.checkbox}/> <Todos>{ todo.todoText }</Todos> 
            {' '}  
            <button onClick={handleTodoDelete(todo)}>삭제</button>
          </TodoContainer>
        ))}
      </Container>
      <Btn onClick={handleTodoDeleteAll}  >체크 표시 모두 삭제</Btn>
      <NavLink to='/focus'>
        <Btn>Focus 페이지로 이동</Btn>
      </NavLink>
        
    </Layout>
  )
};

export default TodoMain;


const Layout = styled.div`
  width: 362px;
  height: 600px;
  /* background-color: #F4F4F4; */
  background-color: white;
  border: 1px solid black;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextField = styled.input`
  width: 283px;
  height: 40px;
  margin-left: 14px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.58px;
`;

const PlusBtn = styled.button`
  width: 40px;
  height: 40px;
`;

const TodoContainer = styled.div`
  padding-left: 23px;
`;

const Todos = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 15.23px;
`;

const CheckBox = styled.input`
  width: 13px;
  height: 13px;
  transform: scale(1.5);
  cursor: pointer;
`;