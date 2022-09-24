import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import { FolderAddIcon, PlusIcon } from '@heroicons/react/outline';

export default function Sets() {
  return (
    <div>
      <Nav />
      <Header />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="my-12 flex h-96 items-center justify-center rounded-lg border-4 border-dashed border-gray-200">
          <div className="flex flex-col items-center justify-center text-center">
            <FolderAddIcon className="h-16 w-16 stroke-0 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-700">
              No sets created
            </h3>
            <p className="text-sm font-normal text-gray-500">
              Get started by creating a new set.
            </p>
            <a
              href="/sets/create"
              className="mt-6 flex items-center justify-center space-x-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              <PlusIcon className="h-4 w-4" />
              <span>New Set</span>
            </a>
          </div>
        </div>
        <div className="flex justify-between border-t border-t-neutral-200 py-2 text-sm font-medium text-gray-500">
          <p>&copy; {new Date().getFullYear()} Quizzie</p>
          <div className="cursor-pointer space-x-2">
            <a href="#" className="hover:underline">
              Support
            </a>
            <span>&#183;</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <span>&#183;</span>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
