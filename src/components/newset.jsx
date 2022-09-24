import { PhotographIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

export default function Newset() {
  const [inputValues, setInputValues] = useState({});
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const handleOnChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Hello
      </button>
      {Array.from(Array(counter)).map((c, index) => {
        return (
          <div key={index} className="grid grid-cols-4 gap-6 content-center">
            <div className="col-span-3 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Term
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-3 sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Definition
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-3 sm:col-span-3">
              <div className="w-8 h-8 rounded bg-neutral-200 flex items-center justify-center">
                <PhotographIcon className="w-6 h-6 text-neutral-400" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
