import React from 'react';
import './DoneList.css';
import DoneItem from '../DoneItem/DoneItem';

function DoneList({ doneItems, updateItem }) {
  return (
    <div className="done-list">
      <u>{doneItems.length > 0 ? 'Завершенные задачи:' : 'Завершенных задач нет'}</u>
      {doneItems.map((doneItem) => (
        <DoneItem key={doneItem.id} doneItem={doneItem} updateItem={updateItem} />
      ))}
    </div>
  );
}

export default DoneList;
