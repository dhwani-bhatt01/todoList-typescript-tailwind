/**
 *
 * TodoList
 *
 */
import React from 'react';
// import { TodoInput } from '../TodoInput';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {
  todoItem: {
    name: string;
    key: number;
    isCompleted: boolean;
  }[];
  setTodoItem: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        key: number;
        isCompleted: boolean;
      }[]
    >
  >;
}

// export function TodoList(props: Props) {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const { t, i18n } = useTranslation();

export const TodoList: React.FC<Props> = ({ todoItem, setTodoItem }) => {
  // { value: 'demo2', isCompleted: false },

  // const addTask = () => {
  //   const newTask = { taskName: input };
  //   setTodoList([...todoList, newTask]);
  // };

  return (
    <>
      {/* {todoList.map(newTodo => {
        return <li key={newTodo.key}>{newTodo.name}</li>;
      })} */}

      {todoItem.map(newTodo => (
        <li key={newTodo.key}>{newTodo.name}</li>
      ))}
    </>
  );
};
