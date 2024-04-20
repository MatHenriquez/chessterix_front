import React from 'react';

export default function Landing() {
  return (
    <section
      className="bg-[url(/image/anime-2.jpg)] bg-cover bg-center bg-no-repeat h-screen"
      data-cy="landing-container"
    >
      <div
        className="grid grid-rows-12 h-screen justify-items-center max-w-xl text-center mx-auto mb-44 ltr:sm:text-left rtl:sm:text-right"
        data-cy="landing-content"
      >
        <div className="row-span-4 place-content-center">
          <Message />
        </div>
        <div className="grid grid-cols-2 grid-rows-12 gap-x-6">
          <div className="col-span-1">
            <SignInButton />
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
}

const Title = () => (
  <h2 className="text-8xl leading-none mb-24 shadow-xl rounded shadow-red-200/25" data-cy="landing-title">
    <strong className="block font-extrabold text-6xl mt-12">Welcome to</strong>
  </h2>
);

const Message = () => (
  <>
    <Title />
    <p
      className="max-w-lg inline-block align-middle h-36 py-2 px-12 rounded-md lg:mb-8 lg:mt-0 text-9xl lg:text-title font-stranger bg-red-100/75 shadow-lg shadow-red-200/75 font-extrabold text-rose-700"
      data-cy="welcome-message"
    >
      Chessterix
    </p>
  </>
);

const SignInButton = () => (
  <a
    href="#"
    className="block w-full rounded text-sm lg:text-lg bg-red-main px-12 py-3 font-medium text-white shadow-lg hover:bg-kimono-200 focus:outline-none focus:ring active:bg-kimono-700 sm:w-auto shadow-red-50/75"
    data-cy="sign-in-button"
  >
    Sing In
  </a>
);

const SignUpButton = () => (
  <a
    href="#"
    className="block w-full rounded bg-white px-12 py-3 text-sm lg:text-lg font-medium text-kimono-200 shadow-lg shadow-red-50/75 hover:text-red-main hover:bg-bone-500 focus:outline-none focus:ring active:text-kimono-700 sm:w-auto"
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
