import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Components/Input';
import { Button} from 'react-bootstrap';
import './Login.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2)); 
  };

  return (
  <>
    <div className="background-container">
      <div className="signup-form-container">
        <h2>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values, touched, errors, isValid }) => (
            <Form>
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && errors.email}
                error={errors.email}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && errors.password}
                error={errors.password}
              />
              <Button 
                type="submit" 
                variant="primary" 
                className="w-100 mt-3" 
                disabled={!isValid}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default Login;
