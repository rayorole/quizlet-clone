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
            Ofc there are no questions cuz we are a perfect site ;)
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-8">
          <form action="#" className="sm:gap-4 sm:flex">
            <div className="sm:flex-1">
              <label for="email" className="sr-only"></label>

              <input
                type="email"
                placeholder="Type question or call +32 491 89 78 04 for help."
                className="w-full p-2 px-3 font-semibold text-neutral-700 placeholder:text-sm placeholder:font-semibold placeholder:text-neutral-400 bg-white border-gray-200 transition rounded-md shadow-sm focus:ring focus:outline-none focus:ring-indigo-500 focus:border-white"
              />
            </div>
            <a className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring">
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <FingerPrintIcon className="w-4 h-4" />
              </span>

              <a
                href="mailto:ray.orole@gmail.com"
                className="text-sm font-medium transition-all group-hover:mr-4"
              >
                Send
              </a>
            </a>
          </form>
        </div>
      </div>
      <img src="/waves.svg" alt="Waves" className="absolute left-0 top-0 z-0" />
    </aside>
  );
}
