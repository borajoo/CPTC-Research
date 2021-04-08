import React, { useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
//import './BaseCheckbox.css';

const GreenCheckbox = withStyles({
    root: {
      color: "#124B35",
      "&$checked": {
        color: "#124B35"
      }
    },
    checked: {}
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);

function BaseCheckbox(props: any) {
    const { checked, onChange, name, label } = props

    return (
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checked}
              onChange={onChange}
              name={name}
            />
          }
          label={label}
        />
    )   
};

export default BaseCheckbox