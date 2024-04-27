
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

function Todos() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title, text }));
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Text" />
      <button type="submit">Add Todo</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <h3>{todo.title}</h3>
          <p>{todo.text}</p>
        </div>
      ))}
    </form>
  );
}

export default Todos;