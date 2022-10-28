import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { LogoutIcon } from '@heroicons/react/solid';

export default function Nav() {
  const [signed, setSigned] = useState(false);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setSigned(true);
    }
  });

  function logOut() {
    signOut(auth).then(window.location.replace('/'));
  }

  return (
    <header className="shadow-lg">
      <div className="p-4 mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a className="text-indigo-600 flex items-center space-x-3" href="/">
              <span className="sr-only">Home</span>
              <img src="/logo.png" width={50} alt="Quizzie" />
              <h3 className="font-semibold text-xl font-mono">Quizzie</h3>
            </a>
          </div>
          <nav className="hidden text-sm font-medium gap-8 md:flex">
            <a className="text-gray-500" href="/">
              Home
            </a>
            <a className="text-gray-500" href="/sets/browse">
              Browse Sets
            </a>
            <a className="text-gray-500" href="/sets">
              My Sets
            </a>
            <a className="text-gray-500" href="/credits">
              Credits
            </a>
          </nav>

          <div className="items-center justify-end flex-1 hidden gap-4 sm:flex">
            {signed ? (
              <button
                onClick={logOut}
                className="px-5 flex items-center justify-between space-x-2 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
              >
                <p>Logout</p>
                <LogoutIcon className="w-4 h-4" />
              </button>
            ) : (
              <>
                <a
                  className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                  href="/login"
                >
                  Log in
                </a>

                <a
                  className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
                  href="/signup"
                >
                  Sign up
                </a>
              </>
            )}
          </div>

          <div className="lg:hidden">
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded-lg"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
