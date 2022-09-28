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
          <div
            key={index}
            className="flex items-center justify-between space-x-3 my-2"
          >
            <div className="w-full flex-1">
              <label
                htmlFor="term"
                className="block text-sm font-medium text-gray-700"
              >
                Term
              </label>
              <input
                type="text"
                name="term"
                id="term"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="w-full flex-1">
              <label
                htmlFor="definition"
                className="block text-sm font-medium text-gray-700"
              >
                Definition
              </label>
              <input
                type="text"
                name="definition"
                id="definition"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <input
                type="file"
                className="w-10 h-10 rounded bg-neutral-200 flex items-center justify-center"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
