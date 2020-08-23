import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoItems, updateItem, removeItem }) {
  return (
    <div className="todo-list">
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          updateItem={updateItem}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}

export default TodoList;
