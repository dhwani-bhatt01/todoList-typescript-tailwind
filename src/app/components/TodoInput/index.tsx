/**
 *
 * TodoInput
 *
 */
import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

// interface Props {
//   setTodoItem: React.Dispatch<
//     React.SetStateAction<
//       {
//         name: string;
//         key: number;
//         isCompleted: boolean;
//       }[]
//     >
//   >;
// }

export const TodoInput = ({ setTodoList }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((e.target.name = e.target.value));
  };

  const handleSubmit = (e): void => {
    e.preventDefault();
    setInput('');
    console.log(input);
    setTodoList(prevState => {
      return [
        ...prevState,
        {
          name: input,
          isCompleted: false,
          key: Math.random(),
        },
      ];
    });
  };

  return (
    <>
      <label>Add todo</label>
      <input
        type="text"
        value={input}
        placeholder="Enter you todos"
        name="input"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};
