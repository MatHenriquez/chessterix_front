import React from 'react';

const SignInButton = ({ showLoginModal, setShowLoginModal }: props) => (
  <button
    className="block w-full text-xl rounded lg:text-lg bg-red-main px-12 py-3 font-medium text-white shadow-md hover:bg-kimono-200 focus:outline-none focus:ring active:bg-kimono-700 sm:w-auto shadow-red-50/75"
    data-cy="sign-in-button"
    onClick={() => setShowLoginModal(!showLoginModal)}
  >
    Sing In
  </button>
);

type props = {
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
};

export default SignInButton;
