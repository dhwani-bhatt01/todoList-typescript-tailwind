/**
 *
 * TodoList
 *
 */
import * as React from 'react';

export interface Props {
  todoList: {
    name: string;
    key: number;
    isCompleted: boolean;
  }[];
  setTodoList: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        key: number;
        isCompleted: boolean;
      }[]
    >
  >;
}

export const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  const handleDelete = key => {
    const deleteTask = todoList.filter(onDelete => onDelete.key !== key);
    setTodoList(deleteTask);
  };

  return (
    <>
      {todoList.map(newTodo => (
        <>
          <li key={newTodo.key}>
            {newTodo.name}
            <button onClick={() => handleDelete(newTodo.key)}>Delete</button>
          </li>
        </>
      ))}
    </>
  );
};
