import React, { FC } from 'react';
import SignInButton from '../sign-in/SignInButton';
import SignInModal from '../sign-in/SignInModal';

const Landing: FC<{
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
}> = ({ showLoginModal, setShowLoginModal }) => {
  return (
    <section
      className="bg-[url(/image/anime-2.jpg)] bg-cover bg-center bg-no-repeat h-screen"
      data-cy="landing-container"
    >
      <SignInModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <div
        className="grid grid-rows-12 h-screen justify-items-center max-w-xl text-center mx-auto mb-44"
        data-cy="landing-content"
      >
        <div className="row-span-2 md:row-span-4 place-content-center">
          <Message />
        </div>
        <div className="flex flex-col w-80 md:w-96 gap-y-4 md:grid md:grid-cols-2 grid-rows-12 gap-x-6">
          <div className="col-span-1">
            <SignInButton
              showLoginModal={showLoginModal}
              setShowLoginModal={setShowLoginModal}
            />
          </div>
          <div className="col-span-1">
            <SignUpButton />
          </div>
          <div className="col-span-2">
            <GuestLink />
          </div>
        </div>
      </div>
    </section>
  );
};

const Message = () => (
  <>
    <p
      className="max-w-lg inline-block align-middle py-2 px-12 rounded-md lg:mb-8 lg:mt-0 text-9xl lg:text-title font-stranger shadow-inner shadow-bone-500/50 bg-red-950/10 h-fit font-extrabold text-white"
      style={{
        textShadow: '2px 2px 2px rgba(255, 255, 255, 0.3)',
        padding: '10px'
      }}
      data-cy="welcome-message"
    >
      Welcome to{' '}
      <span
        className="text-kimono-200"
        style={{
          WebkitTextStroke: '1px black',
          textShadow: '5px 5px 5px rgba(255, 0, 0, 0.3)',
          padding: '10px'
        }}
      >
        Chessterix
      </span>
    </p>
  </>
);

const SignUpButton = () => (
  <a
    href="#"
    className="block w-full rounded text-xl bg-white px-12 py-3 lg:text-lg font-medium text-kimono-200 shadow-lg shadow-red-50/75 hover:text-red-main hover:bg-bone-500 focus:outline-none focus:ring active:text-kimono-700 sm:w-auto"
    data-cy="sign-up-button"
  >
    Sing Up
  </a>
);

const GuestLink = () => (
  <a
    href=""
    className="text-rose-700 underline bg-white p-1 w-64 rounded border-2 border-bone-500 shadow-lg shadow-red-400/75"
    data-cy="guest-link"
  >
    Continue as a guest
  </a>
);

export default Landing;
