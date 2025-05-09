import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const postFormData = async (values, resetForm) => {
    try {
      const response = await axios.post("https://blog-hqx2-onrender.com/user/register", values);
      toast.success("Registration successful!");
      setSuccessMessage(`Welcome, ${values.name}!`);
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration.");
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Minimum 3 characters')
            .max(15, 'Must be 15 characters or less')
            .required('This field is required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('This field is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('This field is required'),
        })}
        onSubmit={(values, { resetForm }) => {
          postFormData(values, resetForm);
        }}
      >
        <Form className="flex flex-col gap-2 w-64 p-4 border rounded shadow-md mx-auto mt-5">
          <h2 className="text-lg font-bold mb-2 text-center">Registration Form</h2>

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className="border p-1" placeholder="Enter your name" />
          <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className="border p-1" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" className="border p-1" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition">
            Submit
          </button>

          {successMessage && <div className="text-green-500 text-sm mt-2 text-center">{successMessage}</div>}
          <ToastContainer />
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
