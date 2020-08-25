import React from 'react';
import './DoneItem.css';
import ResButton from '../ResButton/ResButton';

function DoneItem({ doneItem, updateItem }) {
  const { id, title } = doneItem;

  const resEventHandler = () => {
    const newItem = Object.assign({}, doneItem);

    newItem.done = false;
    updateItem(id, newItem);
  };

  return (
    <div className="done-item">
      {title}
      <ResButton onClick={resEventHandler} />
    </div>
  );
}

export default DoneItem;
