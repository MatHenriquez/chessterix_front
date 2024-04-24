import * as React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';

interface SignInFormValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const initialValues: SignInFormValues = { email: '', password: '' };

  const validate = (values: SignInFormValues) => {
    const errors: Partial<SignInFormValues> = {};

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

    return errors;
  };

  return (
    <div className="w-fit">
      <h2 className="text-4xl mb-4 ml-4">Here again?</h2>
      <span className="text-2xl mb-4 ml-4">Mmm... Ok, be my guest</span>
      <div className="border-b-2 mt-2"></div>
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
          <Form className="flex flex-col w-fit">
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
            </div>
            <div className="flex w-full justify-center">
              <button
                type="submit"
                className="border-2 bg-kimono-200/80 shadow-lg shadow-bone-500 border-white rounded px-8 py-2 mt-8 hover:shadow-white hover:bg-red-400"
                data-cy="submit-login"
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
