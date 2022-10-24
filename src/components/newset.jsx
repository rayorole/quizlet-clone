import { MinusCircleIcon } from '@heroicons/react/outline';
import { PhotographIcon } from '@heroicons/react/solid';
import { CheckIcon, PlusIcon, TemplateIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

export default function Newset(props) {
  const [inputValues, setInputValues] = useState([]);
  const [counter, setCounter] = useState(3);

  const addClick = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const reduceClick = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  const handleOnChange = (e) => {
    const abc = {};
    abc[e.target.className] = e.target.value;
    setInputValues({ ...inputValues, ...abc });
  };

  return (
    <div>
      <div className="max-h-screen overflow-y-auto px-2">
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

              {/* <div>
              <input
                type="file"
                className="w-10 h-10 rounded bg-neutral-200 flex items-center justify-center"
              />
            </div> */}
            </div>
          );
        })}
      </div>

      <div className="mt-3">
        <button
          type="button"
          onClick={addClick}
          className="inline-flex justify-center space-x-2 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          <span>Add new word</span>
          <PlusIcon className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={reduceClick}
          className="inline-flex justify-center mx-3 space-x-2 rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700"
        >
          <span>Delete last word</span>
          <MinusCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
