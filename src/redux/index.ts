import { Todo } from '../type';

const initialState: Todo[] = []

export function reducer(state = initialState, action:any ): any{
  if(action.type === 'plus'){
    let copy = [...state];
    copy.unshift(action.payload);
    return copy;
  }
  else if(action.type === 'delete'){
    let copy = [...state];
    copy = copy.filter((todo) => todo.id !== action.payload.id)
    return copy;
  }
  else if(action.type === 'deleteAll'){
    let copy = [...state];
    copy = action.payload.getTodo.filter((todo: Todo) => !todo.checkbox);
    return copy;
  }
  else if(action.type === 'checked'){
    let copy = [...state];
    copy = copy.map((todo) => {
      if(todo.id === action.payload.id) todo.checkbox = !todo.checkbox
      return todo;
    });
    return copy;
  }
  else return state;
}


