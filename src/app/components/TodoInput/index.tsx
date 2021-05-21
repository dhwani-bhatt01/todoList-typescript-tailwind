/**
 *
 * TodoInput
 *
 */
import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {}

export function TodoInput(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { t, i18n } = useTranslation();

  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((e.target.name = e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // e.target.value = '';
    setInput('');
    console.log(input);
  };

  return (
    <>
      <label>Add todo</label>
      <input
        type="text"
        value={input}
        placeholder="Enter you todos"
        name="todo-input"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}
