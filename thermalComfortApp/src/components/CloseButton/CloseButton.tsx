import React from 'react';
import './CloseButton.css';

function CloseButton(props: any) {
  const { onClick } = props;

  return (
    <button className="closebutton" onClick={onClick}>
      X
    </button>
  )
};

export default CloseButton