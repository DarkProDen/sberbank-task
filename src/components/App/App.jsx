import React, { useState } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';
import DoneList from '../DoneList/DoneList';
import Separator from '../Separator/Separator';

function App() {
  const [todoItems, setTodoItems] = useState([
    { title: 'title1', id: 0 },
    { title: 'title2 fsdhsldfs lhfsdklsd fsdhkfs fksjdgfk uwehw ud wod', id: 1 },
    { title: 'done', id: 2, done: true },
  ]);

  const updateItem = (id, newItem) => {
    setTodoItems(todoItems.map((item) => (item.id === id ? newItem : item)));
  };

  const removeItem = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <TodoList
        updateItem={updateItem}
        removeItem={removeItem}
        todoItems={todoItems.filter((todoItem) => !todoItem.done)}
      />
      <Separator />
      <DoneList doneItems={todoItems.filter((todoItem) => todoItem.done)} />
    </div>
  );
}

export default App;
