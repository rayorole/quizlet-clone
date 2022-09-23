import React from 'react';

export default function Hero() {
  return (
    <section>
      <div className="px-4 py-16 lg:pb-0 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
            <img
              alt="Party"
              src="/undraw-hero.svg"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Quizzie</h2>

            <p className="mt-4 text-gray-600">
              Tired from using books to learn a vocabulary? Search no more,
              Quizzie is an online learning platform.
            </p>

            <a
              href="/login"
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            >
              <span className="text-sm font-medium"> Get Started </span>

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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
