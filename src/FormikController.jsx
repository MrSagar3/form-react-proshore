import React from 'react';
import { Field } from 'formik';

const FormikController = ({ component, ...props }) => {
  return <Field {...props} component={component} />;
};

export default FormikController;
