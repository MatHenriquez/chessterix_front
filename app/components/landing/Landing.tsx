import React from 'react';

export default function Landing() {
  return (
    <section className="relative bg-[url(/image/anime-2.jpg)] bg-cover bg-center bg-no-repeat" data-cy="landing-container">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-screen lg:items-center lg:px-8">
        <div className="flex flex-col items-center max-w-xl text-center mx-auto mb-44 ltr:sm:text-left rtl:sm:text-right">
          <Title />
          <div className='flex flex-col items-center'>
            <Message />
          </div>
          <div className="mt-8 mb-2 lg:mt-60 flex flex-wrap gap-4 text-center">
            <SignInButton />
            <SignUpButton />
          </div>
          <a href="" className='text-rose-700 underline bg-white p-1 rounded border-2 border-bone-500' data-cy="guest-link">Continue as a guest</a>
        </div>
      </div>
    </section>
  );
}

const Title = () => (
  <h1 className="text-9xl font-extrabold leading-none sm:text-title font-stranger lg:mt-32 lg:mb-40" data-cy="landing-title">
    {"Let's play"}
    <strong className="block font-extrabold text-rose-700">
      If you dare...
    </strong>
  </h1>
);

const Message = () => (
  <p className="max-w-lg mt-8 lg:mb-8 lg:mt-0 text-6xl lg:text-8xl font-stranger" data-cy="welcome-message">
    Welcome to <span className="font-bold text-rose-700">Chessterix</span>
  </p>
);

const SignInButton = () => (
  <a
    href="#"
    className="block w-full rounded text-sm lg:text-lg bg-red-main px-12 py-3 font-medium text-white shadow hover:bg-kimono-200 focus:outline-none focus:ring active:bg-kimono-700 sm:w-auto"
    data-cy="sign-in-button"
  >
    Sing In
  </a>
);

const SignUpButton = () => (
  <a
    href="#"
    className="block w-full rounded bg-white px-12 py-3 text-sm lg:text-lg font-medium text-kimono-200 shadow hover:text-red-main hover:bg-bone-500 focus:outline-none focus:ring active:text-kimono-700 sm:w-auto"
    data-cy="sign-up-button"
  >
    Sing Up
  </a>
);
