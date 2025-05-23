import React from 'react';

const SignUpButton = ({ showSignUpModal, setShowSignUpModal }: props) => {
  return (
    <button
      className="block w-full text-xl rounded lg:text-lg bg-red-main px-12 py-3 font-medium text-white shadow-md hover:bg-kimono-200 focus:outline-none focus:ring active:bg-kimono-700 sm:w-auto shadow-red-50/75"
      onClick={() => setShowSignUpModal(!showSignUpModal)}
      data-cy="sign-up-button"
    >
      Sing Up
    </button>
  );
};

type props = {
  showSignUpModal: boolean;
  setShowSignUpModal: (value: boolean) => void;
};

export default SignUpButton;
