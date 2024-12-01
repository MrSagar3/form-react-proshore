import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../Components/Input';
import Checkbox from '../Components/Checkbox';
import Select from '../Components/Select';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  gender: Yup.string().required('Gender is required'),
  agree: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Agree to terms is required'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  agree: false,
};

const Signup = () => {
  const navigate = useNavigate(); 
  
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    navigate('/login');
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
      <div className="background-container">
        <div className="signup-form-container">
          <div className="signup-form-content">
            <h2 className="text-center">Sign Up</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleBlur, values, touched, errors, isValid }) => (
                <Form>
                  <Input
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.username && errors.username}
                    error={errors.username}
                  />
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
                  <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.confirmPassword && errors.confirmPassword}
                    error={errors.confirmPassword}
                  />
                  <Select
                    label="Gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.gender && errors.gender}
                    error={errors.gender}
                    options={genderOptions}
                  />
                  <Checkbox
                    label="I agree to the terms and conditions"
                    name="agree"
                    value={values.agree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.agree && errors.agree}
                    error={errors.agree}
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
      </div>
    );
    
};

export default Signup;
