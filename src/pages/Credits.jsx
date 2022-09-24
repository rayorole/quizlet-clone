import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Features() {
  return (
    <div>
      <Nav />
      <section className="bg-gray-50">
        <div className="flex gap-10 pl-80 pt-24 ">
          <div className=" p-6 border text-neutral-700 border-gray-300 rounded-xl">
            <h7 className="mt-2 font-bold"> (cringe) </h7>
            <h6 className="mt-2 font-bold">Ray Orole</h6>
            <br></br>
            <h7 className="mt-2 font-bold">-main coder and database builder</h7>

            <img src="ray.png" width={350} />
          </div>

          <div className=" p-6 border text-neutral-700 border-gray-300 shadow-sm rounded-xl">
            <h8 className="mt-2 font-bold"> (giga chad) </h8>
            <h6 className="mt-2 font-bold">Alexander Mannaerts</h6>
            <br></br>
            <h7 className="mt-2 font-bold"> -the main idea and gui</h7>

            <img src="alexander.png" width={350} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
