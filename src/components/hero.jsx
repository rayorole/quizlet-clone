import React from 'react';

export default function Hero() {
  return (
    <section>
      <div className="px-4 py-16 lg:pb-0 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
            <img
              alt="Party"
              src="/undraw-hero.svg"
              className="absolute inset-0 object-contain w-full h-full"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Quizzie</h2>

            <p className="mt-4 text-gray-600">
              Free to use online vocabulary learning page.
            </p>

            <a
              className="relative mt-4 inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
              href="/Login"
            >
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                Get started
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
