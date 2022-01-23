import React, {useState, ChangeEvent, KeyboardEvent, MouseEvent} from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../App';
import { Dispatch } from 'redux';
import { nanoid } from 'nanoid';
import { Todo } from '../type';


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
    <div>
      <h1>Simple Todo</h1>
      <input type='text' value={textField} onChange={handleText} onKeyPress={handleTodoEnter} placeholder='write what you want to do' />
      <button onClick={handleTodoClick}>+버튼</button>
      <div>
        {getTodo.map((todo) => (
          <div key={todo.id}>
            <input type='checkbox' onChange={handleCheck(todo)} checked={todo.checkbox}  /> { todo.todoText }
            {' '}  
            <button onClick={handleTodoDelete(todo)}>삭제</button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleTodoDeleteAll}  >체크 표시 모두 삭제</button>
      </div>
      <NavLink to='/focus'>
        <button>Focus 페이지로 이동</button>
      </NavLink>
        
    </div>
  )
};

export default TodoMain;
