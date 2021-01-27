import React from 'react';
import './BaseInputField.css';

function BaseInputField(props: any) {

  return (
    <div>
      <label className="baselabel">{props.label}</label>
      <input
        className="baseinput"
        style={{width: props.width}}
        type={props.password ? "password" : "text"}
        id={props.iduser}
        name={props.iduser}
        onChange={props.onChange}
        value={props.value}
        required
      />    
    </div>
  )
};

export default BaseInputField