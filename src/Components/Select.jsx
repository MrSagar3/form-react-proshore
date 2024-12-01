import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({ label, name, value, onChange, onBlur, isInvalid, error, options }) => {
  return (
    <div className="mb-3">
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={isInvalid}
      >
        <option value="">Select...</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </div>
  );
};

export default Select;
