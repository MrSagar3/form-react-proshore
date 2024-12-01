import React from 'react';
import { FormControl } from 'react-bootstrap';

const Input = ({ label, error, isInvalid, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{label}</label>
      <FormControl 
        {...props}
        isInvalid={isInvalid} 
        className="input-field"
      />
      {isInvalid && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
