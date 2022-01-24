import React, { MouseEvent } from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../App';
import { Dispatch } from 'redux';
import { Todo } from '../type';
import styled from 'styled-components';
import { Btn } from '../components/style/Btn';
import { Container } from '../components/style/Container';
import PageTransition from '../components/style/PageTransition';


const FocusMain = () => {
  const getTodo = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  const handleFocusTodo = (focusTodo: Todo) => (e: MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: 'delete', payload: { id: focusTodo.id, todoText: focusTodo.todoText, checkbox: focusTodo.checkbox }});
  }

  return(
    <PageTransition>
      <FocusLayout>
        <Header>Focus Mode</Header>
        <Quote>집중 집중 집중!!</Quote>
        <Container>
          {
            getTodo[0] ?
            (
              <>
                <Focus> {getTodo[0].todoText}    (최대 글자 수 몇칸으로??)</Focus>
                <div>
                  <Btn onClick={handleFocusTodo(getTodo[0])}>완료!!</Btn>
                </div>
              </>
            ) :
            (
              <h3>열공!!</h3>
            )
          }
        </Container>
        <NavLink to='/'>
          <Btn>todo페이지로 이동</Btn>
        </NavLink>
      </FocusLayout>
    </PageTransition>
  ) 
  
};

export default FocusMain;

const FocusLayout = styled.div`
  width: 362px;
  height: 600px;
  border: 1px solid black;
`;
const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quote = styled.h4`
  text-align: center;
`;

const Focus = styled.div`
  padding-top: 100px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;
`;