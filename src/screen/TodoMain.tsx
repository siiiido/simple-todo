import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import {NavLink} from 'react-router-dom';

type Todo = {
  todoText: string
}

const TodoMain = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [textField, setTextField] = useState('')

  const handleText = (e: ChangeEvent<HTMLInputElement> ) => setTextField(e.target.value);

  const handleTodoEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if(textField !== '' && e.key === 'Enter'){
      setTodoList((prevTodos) => [...prevTodos, { todoText: textField }]);
      setTextField('');
    }
  }

  const handleTodoClick = () => {
    if(textField !== '') {
      setTodoList((prevTodos) => [...prevTodos, { todoText: textField }]);
      setTextField('');
    }
  }

  return (
    <div>
      <h1>Simple Todo</h1>
      <input type='text' value={textField} onChange={handleText} onKeyPress={handleTodoEnter} placeholder='write what you want to do' />
      <button onClick={handleTodoClick}>+버튼</button>
      <div>
      {todoList.map((todo, idx) => (
        <div key={idx}>
          <input type='checkbox'/> { todo.todoText}
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
