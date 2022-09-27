import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
  CashIcon,
  CubeTransparentIcon,
  DeviceMobileIcon,
  ShieldCheckIcon,
  TemplateIcon,
  UserIcon,
} from '@heroicons/react/outline';

export default function Features() {
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <section className="bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div
              data-aos="fade-right"
              className="block p-4 border cursor-default text-neutral-700 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <CashIcon className="w-6 h-6" />
              </span>

              <h6 className="mt-2 font-bold">Free</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Learning should be free.
              </p>
            </div>

            <div
              className="block p-4 border cursor-default text-neutral-700 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <UserIcon className="w-6 h-6" />
              </span>

              <h6 className="mt-2 font-bold">Personal sets</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                create sets with your vocabulary.
              </p>
            </div>

            <div
              className="block p-4 border cursor-default text-neutral-700 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <TemplateIcon className="w-6 h-6" />
              </span>

              <h6 className="mt-2 font-bold">Set collection</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                View all your sets by clicking "Sets" in the navigation bar.
              </p>
            </div>

            <div
              className="block p-4 border cursor-default text-neutral-700 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              data-aos="fade-right"
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <DeviceMobileIcon className="w-6 h-6" />
              </span>

              <h6 className="mt-2 font-bold">User friendly</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                No useless buttons, clean efficient ui.
              </p>
            </div>

            <div
              className="block p-4 border cursor-default text-neutral-700 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <CubeTransparentIcon className="w-6 h-6" />
              </span>

              <h6 className="mt-2 font-bold">Open source</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                free and open source code available on Github
              </p>
            </div>

            <div
              className="block p-4 border cursor-default text-neutral-700 border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              data-aos="fade-right"
              data-aos-delay={200}
            >
              <span className="inline-block p-3 rounded-lg bg-gray-50">
                <ShieldCheckIcon className="w-6 h-6" />
              </span>

              <h6 className="mt-2 font-bold">Made by chads</h6>

              <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Made by 2 buffed giga chad students.
              </p>
            </div>
          </div>
          <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">Features</h2>
            <p className="my-3 text-sm font-medium text-neutral-700">
              Quizzie offers some great features for you to be able to learn and
              gather more information. Explore some of our features here
            </p>
            <a
              className="relative mt-4 inline-flex items-center px-8 py-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
              href="/sets"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                Create your set now
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
