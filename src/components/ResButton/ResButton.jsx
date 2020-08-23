import React from 'react';
import './ResButton.css';
import resImg from '../../img/angle-double-up-solid.svg';

function ResButton() {
  return (
    <button className="res-btn" title="Восстановить">
      <img className="res-btn__img" src={resImg}></img>
    </button>
  );
}

export default ResButton;
