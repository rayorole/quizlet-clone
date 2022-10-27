import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src="/logo.png" alt="Quizzie" width={50} />
            <p className="max-w-xs mt-4 text-sm text-gray-500">
              Alexander Mannaerts
            </p>
            <a className="max-w-xs mt-0.5 text-sm text-gray-500">Ray Orolé</a>

            <div className="flex mt-8 text-gray-500 gap-6">
              <strong className="inline-flex items-center gap-2 p-2 text-sm font-medium border border-gray-200 rounded">
                <span>Status:</span>

                <span className="w-3 h-3 bg-green-600 rounded-full" />

                <span className="font-medium text-green-600">
                  All systems operational
                </span>
              </strong>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Team</p>

              <nav className="flex flex-col mt-4 text-sm text-gray-500 space-y-2">
                <a className="hover:opacity-75" href="/Credits">
                  Meet the Team
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">Services</p>

              <nav className="flex flex-col mt-4 text-sm text-gray-500 space-y-2">
                <a className="hover:opacity-75" href="/Sets/Browse">
                  Free use of sets
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">Helpful Links</p>

              <nav className="flex flex-col mt-4 text-sm text-gray-500 space-y-2">
                <a
                  className="hover:opacity-75"
                  href="https://github.com/rayorole/quizlet-clone"
                  rel="noreferrer"
                  target="_blank"
                >
                  Source Code
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium">Legal</p>

              <nav className="flex flex-col mt-4 text-sm text-gray-500 space-y-2">
                <a className="hover:opacity-75" href="/Terms">
                  Terms & Conditions
                </a>
              </nav>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-500">&copy; 2022 Quizzie</p>
      </div>
    </footer>
  );
}
