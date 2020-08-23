import React from 'react';
import './DoneList.css';
import DoneItem from '../DoneItem/DoneItem';

function DoneList({ doneItems }) {
  return (
    <div className="done-list">
      {doneItems.map((doneItem) => (
        <DoneItem doneItem={doneItem} key={doneItem.id} />
      ))}
    </div>
  );
}

export default DoneList;
