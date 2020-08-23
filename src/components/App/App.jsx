import React from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';

function App() {
  return (
    <div className="app">
      <TodoList
        todoItems={[
          { title: 'title1', id: 0 },
          { title: 'title2', id: 1 },
        ]}
      />
    </div>
  );
}

export default App;
