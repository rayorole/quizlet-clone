import React from 'react';

export default function Cta() {
  return (
    <aside className="">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Have a question?
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
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
                className="w-full p-3 text-gray-700 bg-white border-gray-200 transition rounded-md shadow-sm focus:ring focus:outline-none focus:ring-yellow-400 focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full px-5 py-3 mt-4 text-white transition rounded-md bg-blue-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
            >
              <span className="text-sm font-medium"> Sign Up </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}
