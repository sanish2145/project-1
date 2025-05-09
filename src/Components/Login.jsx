import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const postLoginData = async (values, resetForm) => {
    try {
      const response = await axios.post("https://blog-hqx2-onrender.com/user/login", values);
      toast.success("Login successful!");
      setWelcomeMessage(`Welcome back, ${values.email}!`);
      resetForm();
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error(message);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('This field is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('This field is required'),
      })}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        postLoginData(values, resetForm).finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-2 w-64 p-4 border rounded shadow-md mx-auto mt-5">
          <h2 className="text-lg font-bold mb-2 text-center">Login Form</h2>

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className="border p-1" placeholder="Enter your email" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" className="border p-1" placeholder="Enter your password" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600 transition disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>

          {welcomeMessage && <div className="text-green-500 text-sm mt-2 text-center">{welcomeMessage}</div>}
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
};

export default Login;
