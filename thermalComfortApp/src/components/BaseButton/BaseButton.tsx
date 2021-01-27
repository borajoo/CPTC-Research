import React from 'react';
import './BaseButton.css';

function BaseButton(props: any) {

  return (
    <button className="basebutton" style={{width: props.width}} onClick={props.onClick}>
      {props.children}
    </button>
  )
};

export default BaseButton