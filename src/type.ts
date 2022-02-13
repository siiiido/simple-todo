import { ReactChild, ReactChildren } from "react";

const PLUS = "plus" as const;
const DELETE = "delete" as const;
const DELETEALL = "deleteAll" as const;
const CHECKED = "checked" as const;

const plus = (diff: Todo) => ({
  type: PLUS,
  payload: diff,
});

const deleteTodo = (diff: Todo) => ({
  type: DELETE,
  payload: diff,
});

const deleteAll = (diff: Todo) => ({
  type: DELETEALL,
  payload: diff,
});

const checked = (diff: Todo) => ({
  type: CHECKED,
  payload: diff,
});

const DARK = "dark" as const;
const LIGHT = "light" as const;

const dark = () => ({
  type: DARK,
});

const light = () => ({
  type: LIGHT,
});

export type Todo = {
  id: string;
  todoText: string;
  checkbox: boolean;
  getTodo: any;
};

export type ReducerAction =
  | ReturnType<typeof plus>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof deleteAll>
  | ReturnType<typeof checked>;

export type DarkModeAction = ReturnType<typeof dark> | ReturnType<typeof light>;

export type ReactNode = {
  children: ReactChild | ReactChildren;
};
