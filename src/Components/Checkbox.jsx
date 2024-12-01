import React from 'react';
import { Form } from 'react-bootstrap';

const Checkbox = ({ label, name, value, onChange, onBlur, isInvalid, error }) => {
  return (
    <div className="mb-3">
      <Form.Check
        type="checkbox"
        id={name}
        label={label}
        name={name}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={isInvalid}
      />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </div>
  );
};

export default Checkbox;
