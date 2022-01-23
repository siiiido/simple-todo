import React from 'react';
import { Todo } from '../type';


const initialState: Todo[] = []

export function reducer(state = initialState, action:any ): any{
  if(action.type === 'add'){
    let copy = [...state];
    copy.unshift(action.payload);
    return copy;
  }
  else return state;
}



