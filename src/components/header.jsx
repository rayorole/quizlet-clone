import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-50">
      <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back, Barry!
        </h1>

        <p className="mt-1.5 text-sm text-gray-500">
          Your website has seen a 52% increase in traffic in the last month.
          Keep it up! 🚀
        </p>
      </div>
    </header>
  );
}
