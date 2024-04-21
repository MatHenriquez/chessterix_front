import React from 'react';
import { SignInForm } from './SignInForm';

const SignInModal = ({ showLoginModal, setShowLoginModal }: props) => {
  return (
    <>
      {showLoginModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-kimono-900/90 outline-none focus:outline-none"
              data-cy="login-modal">
                <button
                  className="btn btn-lg text-xl btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setShowLoginModal(!showLoginModal)}
                  data-cy="close-login-modal"
                >
                  ✕
                </button>
                <div
                  className="flex items-start justify-between p-5 border-blueGray-200 rounded-t w-screen"
                  data-cy="login-modal"
                >
                  <SignInForm />
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
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
};

export default SignInModal;
