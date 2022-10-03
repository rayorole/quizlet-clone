import React from 'react';
import Nav from '../components/nav';

export default function BrowseSets() {
  return (
    <div>
      <Nav />
      <div className="max-w-screen-xl mx-auto my-12">
        <input
          className="px-3 flex items-center border focus:ring focus:outline-none focus:ring-indigo-500 focus:border-transparent border-neutral-300 justify-between space-x-2 py-2 text-sm font-medium text-gray-500 rounded-lg"
          type="text"
          placeholder="Search study sets..."
        />
      </div>
      <div className="box-content h-16 w-16 border-4 pl-50">
        <p>hi</p>
      </div>
    </div>
  );
}
