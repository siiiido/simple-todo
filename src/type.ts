export type Todo = {
  id: string;
  todoText: string;
  checkbox: boolean;
};
export type DLMode = () => [string, () => void];
