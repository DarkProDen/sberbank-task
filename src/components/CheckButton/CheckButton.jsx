import React from 'react';
import './CheckButton.css';
import checkImg from '../../img/check-solid.svg';

function CheckButton({ onClick }) {
  return (
    <button className="check-btn" title="Завершить" onClick={onClick}>
      <img src={checkImg} alt="Завершить" />
    </button>
  );
}

export default CheckButton;
