import React, { useState } from 'react';
import './NewTodoItem.css';

function NewTodoItem({ addNewItem }) {
  const [writing, setWriting] = useState(false);
  const inputRef = React.createRef();

  return writing ? (
    <form
      className="new-todo-item"
      onSubmit={(e) => {
        e.preventDefault();

        const title = inputRef.current.value;

        if (title.trim() === '') {
          alert('Некорректный заголовок');
        } else {
          addNewItem({ title, done: false });
          setWriting(false);
        }
      }}
    >
      <input
        ref={inputRef}
        autoFocus
        type="text"
        placeholder="Введите заголовок"
        className="new-todo-item__input"
      />
    </form>
  ) : (
    <button
      className="new-todo-item"
      onClick={() => {
        setWriting(true);
      }}
    >
      Добавить задачу
    </button>
  );
}

export default NewTodoItem;
