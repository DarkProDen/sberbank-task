import React from 'react';
import './EditButton.css';
import editImg from '../../img/edit-solid.svg';

function EditButton() {
  return (
    <button className="edit-btn" title="Редактировать">
      <img src={editImg}></img>
    </button>
  );
}

export default EditButton;
