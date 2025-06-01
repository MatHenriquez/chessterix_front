import React from 'react';
import SignInModal from '@/sign-in/SignInModal';
import SignUpModal from '@/sign-up/SignUpModal';
import AuthButton from '@/components/AuthButton';
import './landing.css';

type Props = {
  showLoginModal: boolean;
  setShowLoginModal: (value: boolean) => void;
  showSignUpModal: boolean;
  setShowSignUpModal: (value: boolean) => void;
};

const Landing = ({
  showLoginModal,
  setShowLoginModal,
  showSignUpModal,
  setShowSignUpModal
}: Props) => (
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
      className="landing-wrapper bg-[url(/image/anime-background.jpg)] bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center"
      data-cy="landing-container"
    >
      <div
        className="flex flex-col items-center justify-center md:justify-between max-w-xl text-center mx-auto shadow-inner shadow-bone-500/50 bg-red-950/20 rounded-md h-[95vh] p-4"
        data-cy="landing-content"
      >

        <div className="flex-1 flex items-center justify-center">
          <Message />
        </div>

        <div className="w-80 md:w-96 mt-8">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-center gap-y-4 md:gap-x-6">
            <AuthButton
              showAuthModal={showLoginModal}
              setShowAuthModal={setShowLoginModal}
              text="Sign In"
            />
            <AuthButton
              showAuthModal={showSignUpModal}
              setShowAuthModal={setShowSignUpModal}
              text="Sign Up"
            />
          </div>
          <div className="mt-4">
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
        fontSize: '16rem'
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

export default Landing;
