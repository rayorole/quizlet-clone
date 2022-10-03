import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Features() {
  return (
    <div className="bg-gray-50">
      <Nav />
      <section className="max-w-screen-xl mx-auto">
        <div className="my-12 flex">
          <div className="space-y-8">
            <div className="w-2/8">
              <h1 className="font-bold text-3xl text-neutral-700">
                Meet our team
              </h1>
              <p className="font-sans text-neutral-400">
                clowns who made this.
              </p>
            </div>
            <div className="flex-1 space-y-5">
              <div className="flex space-x-5 items-center">
                <img
                  className="w-60 h-60 rounded-full border-2 border-neutral-300"
                  src="/ray.png"
                  alt="Ray"
                />
                <div>
                  <p className="font-bold text-neutral-700">Ray Orolé</p>
                  <p className="text-indigo-600 font-semibold text-sm">
                    database engineer, main coder, cringe femboy
                  </p>
                </div>
              </div>
              <div className="flex space-x-5 items-center">
                <img
                  className="w-60 h-60 rounded-full border-2 border-neutral-300"
                  src="/alexander.png"
                  alt="Ray"
                />
                <div>
                  <p className="font-bold text-neutral-700">
                    Alexander Mannaerts
                  </p>
                  <p className="text-indigo-600 font-semibold text-sm">
                    UI designer, project planning, real chad
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
            <img
              alt="Party"
              src="/undraw-credits.svg"
              className=" inset-0 object-contain w-full h-full"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
