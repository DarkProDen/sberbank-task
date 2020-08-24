import React from 'react';
import './DeleteButton.css';
import delImg from '../../img/trash-alt-solid.svg';

function DeleteButton({ onClick }) {
  return (
    <button className="del-btn" title="Удалить" onClick={onClick}>
      <img src={delImg} alt="Удалить"></img>
    </button>
  );
}

export default DeleteButton;
