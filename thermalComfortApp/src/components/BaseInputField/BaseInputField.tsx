import React from 'react';
import './BaseInputField.css';

function BaseInputField(props: any) {
  const {label, width, password, iduser, onChange, value, placeholder, err} = props

  return (
    <div className = "baseinput-container">
      <label className="baselabel">{label}</label>
      <input
        className={err ? "baseinput-error" : "baseinput"}
        style={{width: width}} //specify width
        type={password ? "password" : "text"} //if password the value will be hidden
        id={iduser} //usually same as name prop, usually: password, username, room, etc
        name={iduser}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required
      />    
    </div>
  )
};

export default BaseInputField