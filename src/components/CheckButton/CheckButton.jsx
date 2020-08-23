import React from 'react';
import './CheckButton.css';
import checkImg from '../../img/check-solid.svg';

function CheckButton() {
  return (
    <button className="check-btn" title="Завершить">
      <img src={checkImg}></img>
    </button>
  );
}

export default CheckButton;
