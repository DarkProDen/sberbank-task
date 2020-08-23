import React from 'react';
import './DeleteButton.css';
import delImg from '../../img/trash-alt-solid.svg';

function DeleteButton() {
  return (
    <button className="del-btn" title="Удалить">
      <img src={delImg}></img>
    </button>
  );
}

export default DeleteButton;
