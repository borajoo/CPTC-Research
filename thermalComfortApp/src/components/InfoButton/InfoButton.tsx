import React from 'react';
import './InfoButton.css';

function InfoButton(props: any) {
  const { onClick } = props;

  return (
    <button className="infobutton" onClick={onClick}>
      i
    </button>
  )
};

export default InfoButton