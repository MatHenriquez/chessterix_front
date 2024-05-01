import * as React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import axiosInstance from '@/axios-config/axios-instance';
import { BackEndLinks } from '@/axios-config/back-end-links';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from '@/common-components/LoadingButton';
import { AxiosError } from 'axios';

interface SignUpFormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

export const SignUpForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const initialValues: SignUpFormValues = {
    email: '',
    password: '',
    repeatPassword: ''
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    try {
      const { data } = await axiosInstance.post(BackEndLinks.REGISTER, {
        email,
        password
      });

      console.log(data);

      const jwt = data.data.token;
      localStorage.setItem('jwt', jwt);

      setIsLoading(false);
      toast.success('Success!');

      setTimeout(() => {
        window.location.href = '/home';
      }, 3000);
    } catch (error) {
      console.error(error);      
      setIsLoading(false);

      const axiosError = error as AxiosError;
      
      if (axiosError?.response?.status === 409)
        toast.error('Error! User already exists.');
      else toast.error('Error! Please try again.');
    }
  };

  const validate = (values: SignUpFormValues) => {
    const errors: Partial<SignUpFormValues> = {};

    if (!values.email) {
      errors.email = '*Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = '*Invalid email address';
    }

    if (!values.password) {
      errors.password = '*Required';
    } else if (values.password.length < 8) {
      errors.password = '*Password must be at least 8 characters';
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = '*Required';
    } else if (values.password !== values.repeatPassword) {
      errors.repeatPassword = '*Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="w-fit">
      <h2 className="text-4xl mb-4 ml-4">Go ahead...</h2>
      <span className="text-2xl mb-4 ml-4 pl-32">if you dare</span>
      <div className="border-b-2 mt-2"></div>
      <ToastContainer />
      <br />
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange }) => (
          <Form className="flex flex-col w-fit" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row ml-4 md:ml-0">
              <div className="flex flex-col md:mx-8">
                <label htmlFor="email" className="md:my-0 underline">
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@mail.com"
                  className="text-red-700 px-2 mt-2 border-2 border-red-800 focus:border-red-500 focus:border-3 focus: outline-none"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                  }}
                  data-cy="email-input"
                />
                <div style={{ width: '300px', minHeight: '50px' }}>
                  <ErrorMessage
                    name="email"
                    component="div"
                    data-cy="email-error"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col md:mx-8">
                  <label htmlFor="password" className="md:my-0 underline">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                    }}
                    className="text-red-700 px-2 border-2 mt-2 border-red-800 focus:border-red-500 focus:border-3 focus: outline-none"
                    data-cy="password-input"
                  />
                  <div style={{ width: '300px', minHeight: '50px' }}>
                    <ErrorMessage
                      name="password"
                      component="div"
                      data-cy="password-error"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:mx-8">
                  <label htmlFor="repeatPassword" className="md:my-0 underline">
                    Repeat password
                  </label>
                  <Field
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="********"
                    type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                    }}
                    className="text-red-700 px-2 border-2 mt-2 border-red-800 focus:border-red-500 focus:border-3 focus: outline-none"
                    data-cy="repeat-password-input"
                  />
                  <div style={{ width: '300px', minHeight: '50px' }}>
                    <ErrorMessage
                      name="repeatPassword"
                      component="div"
                      data-cy="repeat-password-error"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-center">
              {!isLoading ? (
                <button
                  type="submit"
                  className="border-2 bg-kimono-200/80 shadow-lg shadow-bone-500 border-white rounded px-8 py-2 mt-8 hover:shadow-white hover:bg-red-400"
                  data-cy="submit-sign-up"
                >
                  Register
                </button>
              ) : (
                <LoadingButton dataTestId="submit-sign-up" />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
