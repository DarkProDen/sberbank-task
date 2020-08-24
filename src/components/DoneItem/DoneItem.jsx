import React from 'react';
import './DoneItem.css';
import ResButton from '../ResButton/ResButton';

function DoneItem({ doneItem, updateItem }) {
  const resEventHandler = () => {
    const newItem = Object.assign({}, doneItem);

    newItem.done = false;
    updateItem(doneItem.id, newItem);
  };

  return (
    <div className="done-item">
      {doneItem.title}
      <ResButton onClick={resEventHandler} />
    </div>
  );
}

export default DoneItem;
