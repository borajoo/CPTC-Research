import React from 'react';
import './SecondaryButton.css';

function BaseButton(props: any) {

  return (
    <button className="secondarybutton" onClick={props.onClick}>
      {props.children}
    </button>
  )
};

export default BaseButton