import React from 'react';
import './BaseInputField.css';

function BaseInputField(props: any) {

  return (
    <div className = "baseinput-container">
      <label className="baselabel">{props.label}</label>
      <input
        className="baseinput"
        style={{width: props.width}} //specify width
        type={props.password ? "password" : "text"} //if password the value will be hidden
        id={props.iduser} //usually same as name prop, usually: password, username, room, etc
        name={props.iduser}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        required
      />    
    </div>
  )
};

export default BaseInputField