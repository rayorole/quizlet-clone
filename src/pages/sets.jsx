import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';
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
              className="relative mt-4 inline-flex items-center px-6 py-2 overflow-hidden text-white bg-indigo-600 rounded group active:bg-indigo-500 focus:outline-none focus:ring"
              href="/sets/create"
            >
              <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                <PlusIcon className="h-4 w-4" />
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                New Set
              </span>
            </a>
          </div>
        </div>
        <div className="flex justify-between border-t border-t-neutral-200 py-2 text-sm font-medium text-gray-500">
          <p>&copy; {new Date().getFullYear()} Quizzie</p>
          <div className="cursor-pointer space-x-2">
            <a href="/" className="hover:underline">
              Support
            </a>
            <span>&#183;</span>
            <a href="/" className="hover:underline">
              Terms
            </a>
            <span>&#183;</span>
            <a href="/" className="hover:underline">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
