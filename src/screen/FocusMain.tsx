import React, { MouseEvent } from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../App';
import { Dispatch } from 'redux';
import { Todo } from '../type';


const FocusMain = () => {
  const getTodo = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  const handleFocusTodo = (focusTodo: Todo) => (e: MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: 'delete', payload: { id: focusTodo.id, todoText: focusTodo.todoText, checkbox: focusTodo.checkbox }});
  }

  return(
    <div>
      <h1>Focus Mode</h1>

      <h4>집중 집중 집중!!</h4>
      {
        getTodo[0] ?
        (
          <>
            <div> {getTodo[0].todoText}    (최대 글자 수 몇칸으로??)</div>
            <div>
              <button onClick={handleFocusTodo(getTodo[0])}>완료!!</button>
            </div>
          </>
        ) :
        (
          <h3>열공!!</h3>
        )
      }
      <NavLink to='/'>
        <button>todo페이지로 이동</button>
      </NavLink>
    </div>
  ) 
  
};

export default FocusMain;
