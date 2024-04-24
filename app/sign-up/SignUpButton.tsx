import React from 'react';

const SignUpButton = ({ showSignUpModal, setShowSignUpModal }: props) => {
  return (
    <button
      className="block w-full rounded text-xl bg-white px-12 py-3 lg:text-lg font-medium text-kimono-200 shadow-lg shadow-red-50/75 hover:text-red-main hover:bg-bone-500 focus:outline-none focus:ring active:text-kimono-700 sm:w-auto"
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
