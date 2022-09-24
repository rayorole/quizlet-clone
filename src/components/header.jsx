import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Header() {
  const [name, setName] = useState('');
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setName(user.displayName);
    } else {
      window.location.replace('/');
    }
  });
  return (
    <header className="bg-gray-50">
      <div className="px-6 lg:px-12 py-8 mx-auto max-w-screen-xl">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back, {name}!
        </h1>

        <p className="mt-1.5 text-sm text-gray-500">
          Here you can find an overview of al your sets you created, feel free
          to create a new set! 🚀
        </p>
      </div>
    </header>
  );
}
