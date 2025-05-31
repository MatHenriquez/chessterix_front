import React from 'react';
import SignInModal from '@/sign-in/SignInModal';
import SignUpModal from '@/sign-up/SignUpModal';
import AuthButton from '@/components/AuthButton';
import './landing.css';

const Landing = ({
  showLoginModal,
  setShowLoginModal,
  showSignUpModal,
  setShowSignUpModal
}: props) => (
  <>
    <div className="modal-container">
      <SignInModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      <SignUpModal
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
      />
    </div>
    <section
      className="landing-wrapper bg-[url(/image/anime-background.jpg)] bg-cover bg-center bg-no-repeat h-screen flex flex-col place-items-center justify-center"
      data-cy="landing-container"
    >
      <div
        className="grid grid-rows-12 justify-items-center max-w-xl text-center mx-auto shadow-inner shadow-bone-500/50 bg-red-950/20 rounded-md h-[80vh] gap-y-4 p-4"
        data-cy="landing-content"
      >
        <div className="row-span-6 flex items-center justify-center">
          <Message />
        </div>

        <div className="row-span-6 flex flex-col w-80 md:w-96 gap-y-4 md:grid md:grid-cols-2 gap-x-6 mt-auto">
          <div className="col-span-1">
            <AuthButton
              showAuthModal={showLoginModal}
              setShowAuthModal={setShowLoginModal}
              text="Sign In"
            />
          </div>
          <div className="col-span-1">
            <AuthButton
              showAuthModal={showSignUpModal}
              setShowAuthModal={setShowSignUpModal}
              text="Sign Up"
            />
          </div>
          <div className="col-span-2 mt-4">
            <GuestLink />
          </div>
        </div>
      </div>
    </section>
  </>
);

const Message = () => (
  <p
    className="max-w-lg inline-block align-middle py-2 px-12 lg:mb-8 lg:mt-0 text-9xl lg:text-title font-stranger shadow-inner h-fit font-extrabold text-white"
    style={{
      WebkitTextStroke: '1px black',
      textShadow: '2px 2px 2px rgba(255, 255, 255, 0.3)',
      padding: '10px',
      fontSize: '10rem'
    }}
    data-cy="welcome-message"
  >
    Welcome to{' '}
    <span
      className="text-kimono-200"
      style={{
        WebkitTextStroke: '2px black',
        textShadow: '5px 5px 5px rgba(255, 0, 0, 0.3)',
        padding: '10px',
        fontSize: '14rem'
      }}
    >
      Chessterix
    </span>
  </p>
);

const GuestLink = () => (
  <a
    href="/board"
    className="text-white underline p-1 w-64 underline-offset-2 font-bold"
    data-cy="guest-link"
  >
    Continue as a guest
  </a>
);

type props = {
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
  showSignUpModal: boolean;
  setShowSignUpModal: (value: boolean) => void;
};

export default Landing;
