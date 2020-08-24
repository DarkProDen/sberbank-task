import React, { useState } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';
import DoneList from '../DoneList/DoneList';
import Separator from '../Separator/Separator';
import NewTodoItem from '../NewTodoItem/NewTodoItem';
import BackendService from '../../BackendService';

const backendService = new BackendService();

function App() {
  const [todoItems, setTodoItems] = useState(backendService.getTodoList());

  const addNewItem = (newItem) => {
    newItem.id = todoItems.length > 0 ? todoItems[todoItems.length - 1].id + 1 : 0;

    const newTodoItems = [...todoItems, newItem];

    backendService.setTodoList(newTodoItems);
    setTodoItems(newTodoItems);
  };

  const updateItem = (id, newItem) => {
    const newTodoItems = todoItems.map((item) => (item.id === id ? newItem : item));

    backendService.setTodoList(newTodoItems);
    setTodoItems(newTodoItems);
  };

  const removeItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);

    backendService.setTodoList(newTodoItems);
    setTodoItems(newTodoItems);
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
