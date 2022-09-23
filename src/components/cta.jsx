import { FingerPrintIcon } from '@heroicons/react/solid';
import React from 'react';

export default function Cta() {
  return (
    <aside className="relative">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 z-10">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Have a question?
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            ofc there are no questions cuz we are a perfect site ;)
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-8">
          <form action="#" className="sm:gap-4 sm:flex">
            <div className="sm:flex-1">
              <label for="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 text-gray-700 bg-white border-gray-200 transition rounded-md shadow-sm focus:ring focus:outline-none focus:ring-blue-400 focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="flex items-center hover:bg-indigo-700 duration-100 justify-center w-full space-x-2 px-5 py-3 mt-4 text-white transition rounded-md bg-indigo-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-blue-400"
            >
              <span className="text-sm font-medium">Sign Up</span>
              <FingerPrintIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      <img src="/waves.svg" alt="Waves" className="absolute left-0 top-0 z-0" />
    </aside>
  );
}
