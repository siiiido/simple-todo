import { Todo } from "../type";
import { ReducerAction, DarkModeAction } from "../type";

const localStorage = window.localStorage.getItem("todos");
const initialState: Todo[] =
  localStorage !== null ? JSON.parse(localStorage) : [];

export function reducer(state = initialState, action: ReducerAction) {
  if (action.type === "plus") {
    let copy = [...state];
    copy.unshift(action.payload);
    window.localStorage.setItem("todos", JSON.stringify(copy));
    return copy;
  } else if (action.type === "delete") {
    let copy = [...state];
    copy = copy.filter((todo) => todo.id !== action.payload.id);
    window.localStorage.setItem("todos", JSON.stringify(copy));
    return copy;
  } else if (action.type === "deleteAll") {
    let copy = [...state];
    copy = action.payload.getTodo.filter((todo: Todo) => !todo.checkbox);
    console.log(action.payload.getTodo)
    window.localStorage.setItem("todos", JSON.stringify(copy));
    return copy;
  } else if (action.type === "checked") {
    let copy = [...state];
    copy = copy.map((todo) => {
      if (todo.id === action.payload.id) todo.checkbox = !todo.checkbox;
      return todo;
    });
    return copy;
  } else return state;
}

const initialDarkModeState = window.localStorage.getItem("theme");

export function darkMode(state = initialDarkModeState, action: DarkModeAction) {
  if (action.type === "dark") {
    window.localStorage.setItem("theme", "dark");
    return "dark";
  } else if (action.type === "light") {
    window.localStorage.setItem("theme", "light");
    return "light";
  } else return state;
}
