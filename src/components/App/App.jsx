import React, { useState } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';
import DoneList from '../DoneList/DoneList';
import Separator from '../Separator/Separator';
import NewTodoItem from '../NewTodoItem/NewTodoItem';

function App() {
  const [todoItems, setTodoItems] = useState([
    { title: 'title1', id: 0 },
    { title: 'title2 fsdhsldfs lhfsdklsd fsdhkfs fksjdgfk uwehw ud wod', id: 1 },
    { title: 'done', id: 2, done: true },
  ]);

  const addNewItem = (newItem) => {
    newItem.id = todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 0;

    setTodoItems([...todoItems, newItem]);
  };

  const updateItem = (id, newItem) => {
    setTodoItems(todoItems.map((item) => (item.id === id ? newItem : item)));
  };

  const removeItem = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <NewTodoItem addNewItem={addNewItem} />
      <TodoList
        todoItems={todoItems.filter((todoItem) => !todoItem.done)}
        updateItem={updateItem}
        removeItem={removeItem}
      />
      <Separator />
      <DoneList doneItems={todoItems.filter((todoItem) => todoItem.done)} updateItem={updateItem} />
    </div>
  );
}

export default App;
