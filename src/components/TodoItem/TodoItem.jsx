import React from 'react';
import './TodoItem.css';
import CheckButton from '../CheckButton/CheckButton';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function TodoItem({ todoItem }) {
  return (
    <div className="todo-item">
      {todoItem.title}
      <div className="todo-item__btn-wrap">
        <CheckButton />
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
}

export default TodoItem;
