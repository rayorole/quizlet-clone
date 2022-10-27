import React, { useRef } from 'react';
import { CloudUploadIcon } from '@heroicons/react/outline';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Cta() {
  const emailRef = useRef();
  const textRef = useRef();

  const handleForm = async () => {
    if (!emailRef.current.value || !textRef.current.value) {
      alert('Please enter your email and/or message');
    } else {
      const docRef = await addDoc(collection(db, 'questions'), {
        email: emailRef.current.value,
        message: textRef.current.value,
      });

      console.log('Document uploaded with id of:', docRef.id);
    }
  };

  return (
    <aside className="relative">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 z-10">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Have a question?
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            You can contact us with the following form. You will be replied back
            via mail.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-8">
          <div className="sm:gap-4">
            <div>
              <label for="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                ref={emailRef}
                placeholder="Email address"
                className="w-full p-2 px-3 font-semibold text-neutral-500 placeholder:text-sm placeholder:font-semibold placeholder:text-neutral-400 bg-white border-gray-200 transition rounded-md shadow-sm focus:ring focus:outline-none focus:ring-indigo-500 focus:border-white"
              />

              <textarea
                placeholder="Enter your message here"
                id="text"
                ref={textRef}
                className="w-full p-2 mt-3 px-3 font-semibold text-neutral-500 placeholder:text-sm placeholder:font-semibold placeholder:text-neutral-400 bg-white border-gray-200 transition rounded-md shadow-sm focus:ring focus:outline-none focus:ring-indigo-500 focus:border-white"
              />
            </div>
            <button
              onClick={handleForm}
              className="flex mt-5 items-center px-6 py-2.5 space-x-3 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
            >
              <span className="text-sm font-medium">Send</span>
              <CloudUploadIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <img src="/waves.svg" alt="Waves" className="absolute left-0 top-0 z-0" />
    </aside>
  );
}
