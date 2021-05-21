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
}

export const HomePage: React.FC = () => {
  const [todoList, setTodoList] = useState<Props['todoItem']>([]);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <TodoInput setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  );
};
