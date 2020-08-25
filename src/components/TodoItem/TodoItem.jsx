import React, { useState } from 'react';
import './TodoItem.css';
import CheckButton from '../CheckButton/CheckButton';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';

function TodoItem({ todoItem, updateItem, removeItem }) {
  const [edit, setEdit] = useState(false);
  const [style, setStyle] = useState(null);
  const todoItemRef = React.createRef();
  const { id, title, done } = todoItem;

  const updateItemHandler = (e) => {
    updateItem(id, { id, title: e.target.value, done });
    setStyle(null);
    setEdit(false);
  };

  const doneEventHandler = () => {
    const newItem = Object.assign({}, todoItem);

    newItem.done = true;
    updateItem(todoItem.id, newItem);
  };

  return (
    <div ref={todoItemRef} className="todo-item" style={style}>
      {edit ? (
        <textarea
          autoFocus
          className="todo-item__edit"
          onBlur={updateItemHandler}
          onKeyPress={({ target, key }) => {
            if (key === 'Enter') {
              updateItemHandler({ target });
            }
          }}
          defaultValue={title}
        />
      ) : (
        title
      )}
      <div className="todo-item__btn-wrap">
        <CheckButton onClick={doneEventHandler} />
        <EditButton
          onClick={() => {
            setStyle({
              width: `${todoItemRef.current.clientWidth - 40}px`,
              height: `${todoItemRef.current.clientHeight - 20}px`,
            });
            setEdit(true);
          }}
        />
        <DeleteButton
          onClick={() => {
            removeItem(id);
          }}
        />
      </div>
    </div>
  );
}

export default TodoItem;
