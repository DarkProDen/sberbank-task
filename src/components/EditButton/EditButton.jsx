import React from 'react';
import './EditButton.css';
import editImg from '../../img/edit-solid.svg';

function EditButton({ onClick }) {
  return (
    <button className="edit-btn" title="Редактировать" onClick={onClick}>
      <img src={editImg}></img>
    </button>
  );
}

export default EditButton;
