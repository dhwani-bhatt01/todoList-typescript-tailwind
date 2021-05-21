import { TodoInput } from 'app/components/TodoInput';
import { TodoList } from 'app/components/TodoList';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

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

export const HomePage: React.FC<Props> = () => {
  const [todoList, setTodoList] = useState([
    {
      key: 1,
      name: 'demo1',
      isCompleted: false,
    },
    {
      key: 2,
      name: 'demo2',
      isCompleted: false,
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <TodoInput />
        <TodoList todoItem={todoList} setTodoItem={setTodoList} />
      </div>
    </>
  );
};
