import React from 'react';
import { SignUpForm } from './SignUpForm';

const SignUpModal = ({ showSignUpModal, setShowSignUpModal }: props) => {
  return (
    <>
      {showSignUpModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-kimono-900/90 outline-none focus:outline-none"
              data-cy="sign-up-modal">
                <button
                  className="btn btn-lg text-xl btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setShowSignUpModal(!showSignUpModal)}
                  data-cy="close-sign-up-modal"
                >
                  ✕
                </button>
                <div
                  className="flex items-start justify-between p-5 border-blueGray-200 rounded-t w-screen"
                  data-cy="sign-up-modal"
                >
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

type props = {
  showSignUpModal: boolean;
  setShowSignUpModal: (value: boolean) => void;
};

export default SignUpModal;
