import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../App';
import { Dispatch } from 'redux';
import { nanoid } from 'nanoid';


const TodoMain = () => {
  const getTodo = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();
  const [textField, setTextField] = useState('')

  const handleText = (e: ChangeEvent<HTMLInputElement> ) => setTextField(e.target.value);

  const handleTodoEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if(textField !== '' && e.key === 'Enter'){
      dispatch({type: 'add', payload: { id: nanoid(), todoText: textField }});
      setTextField('');
    }
  }

  const handleTodoClick = () => {
    if(textField !== '') {
      dispatch({type: 'add', payload: { id: nanoid(), todoText: textField }});
      setTextField('');
    }
  }

  return (
    <div>
      <h1>Simple Todo</h1>
      <input type='text' value={textField} onChange={handleText} onKeyPress={handleTodoEnter} placeholder='write what you want to do' />
      <button onClick={handleTodoClick}>+버튼</button>
      <div>
      {getTodo.map((todo) => (
        <div key={todo.id}>
          <input type='checkbox'/> { todo.todoText }
        </div>
      ))}
      </div>
      <div>
        <button>체크 표시 모두 삭제</button>
      </div>
      <NavLink to='/focus'>
        <button>Focus 페이지로 이동</button>
      </NavLink>
        
    </div>
  )
};

export default TodoMain;
