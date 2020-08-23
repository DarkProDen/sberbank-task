import React, { useState } from 'react';
import './TodoItem.css';
import CheckButton from '../CheckButton/CheckButton';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function TodoItem({ todoItem, updateItem, removeItem }) {
  const [edit, setEdit] = useState(false);

  const updateItemHandler = (e) => {
    const title = e.target.value;

    updateItem(todoItem.id, { id: todoItem.id, title, done: todoItem.done });
    setEdit(false);
  };

  return (
    <div className="todo-item">
      {edit ? (
        <input
          autoFocus
          className="todo-item__edit"
          type="text"
          onBlur={updateItemHandler}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              updateItemHandler({ target: e.target });
            }
          }}
          defaultValue={todoItem.title}
        />
      ) : (
        todoItem.title
      )}
      <div className="todo-item__btn-wrap">
        <CheckButton />
        <EditButton
          onClick={() => {
            setEdit(true);
          }}
        />
        <DeleteButton
          onClick={() => {
            removeItem(todoItem.id);
          }}
        />
      </div>
    </div>
  );
}

export default TodoItem;
