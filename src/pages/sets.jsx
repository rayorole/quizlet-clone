import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';
import {
  FolderAddIcon,
  PlusIcon,
  DocumentIcon,
  EyeIcon,
} from '@heroicons/react/outline';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { timeConverter } from '../utils';

export default function Sets() {
  const auth = getAuth();
  const [loading, setLoading] = useState(true);
  const [sets, setSets] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      async function getMySets() {
        console.log('Test');
        const docs = [];
        const q = query(collection(db, 'sets'), where('uid', '==', user.uid));

        const docsSnap = await getDocs(q);

        docsSnap.forEach((doc) => {
          docs.push(doc.data());
        });

        console.log(docs);
        setSets(docs);

        setLoading(false);
      }

      getMySets();
    });
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {sets.length === 0 ? (
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
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8 lg:grid-cols-4">
            {sets?.map((set, id) => (
              <a
                key={id}
                href="/"
                className="block rounded-lg p-4 shadow-sm shadow-indigo-100 border border-neutral-200"
              >
                <img
                  alt="Home"
                  src={set.cover}
                  className="h-56 w-full rounded-md object-contain"
                />

                <div className="mt-2">
                  <dl>
                    <div>
                      <dt className="sr-only">Date</dt>

                      <dd className="text-sm text-gray-500">
                        {set.timestamp?.seconds
                          ? timeConverter(set.timestamp?.seconds)
                          : 'N/A'}
                      </dd>
                    </div>

                    <div>
                      <dt className="sr-only">Title</dt>

                      <dd className="font-medium">{set.title}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex items-center gap-8 text-xs justify-between">
                    <div className="gap-8 space-x-5">
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <DocumentIcon className="h-4 w-4 text-indigo-700" />

                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                          <p className="text-gray-500">Terms</p>

                          <p className="font-medium">{set.terms.length}</p>
                        </div>
                      </div>

                      <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                        <EyeIcon className="h-4 w-4 text-indigo-700" />

                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                          <p className="text-gray-500">Visibility</p>

                          <p className="font-medium">{set.visibility}</p>
                        </div>
                      </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                      <button className="m-1 rounded-full border border-indigo-500 p-1.5 text-indigo-500 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
                        <span className="sr-only">Preview</span>
                        <EyeIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

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
