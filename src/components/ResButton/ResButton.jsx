import React from 'react';
import './ResButton.css';
import resImg from '../../img/angle-double-up-solid.svg';

function ResButton({ onClick }) {
  return (
    <button className="res-btn" title="Восстановить" onClick={onClick}>
      <img className="res-btn__img" src={resImg} alt="Восстановить"></img>
    </button>
  );
}

export default ResButton;
