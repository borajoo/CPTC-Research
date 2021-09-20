import React from 'react';
import './SecondaryButton.css';

function BaseButton(props: any) {

  return (
    <button className="secondarybutton" onClick={props.onClick} style={{width: props.width, fontSize: props.fontSize}}>
      {props.children}
    </button>
  )
};

export default BaseButton