import React from 'react';
import './DoneItem.css';
import ResButton from '../ResButton/ResButton';

function DoneItem({ doneItem }) {
  return (
    <div className="done-item">
      {doneItem.title}
      <ResButton />
    </div>
  );
}

export default DoneItem;
