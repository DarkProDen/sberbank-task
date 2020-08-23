import React from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoItems }) {
  return (
    <div className="todo-list">
      {todoItems.map((todoItem) => (
        <TodoItem todoItem={todoItem} key={todoItem.id} />
      ))}
    </div>
  );
}

export default TodoList;
