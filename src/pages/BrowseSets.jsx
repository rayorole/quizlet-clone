import { EyeIcon, SearchIcon, DocumentIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { timeConverter } from '../utils';

export default function BrowseSets() {
  const [sets, setSets] = useState([]);

  useEffect(() => {
    async function getTerms() {
      try {
        const docs = [];
        const docsSnap = await getDocs(collection(db, 'sets'));
        docsSnap.forEach((doc) => {
          docs.push(doc.data());
          setSets(docs);
        });
      } catch (error) {
        console.log(error);
      }
    }

    getTerms();
  }, []);

  return (
    <div>
      <Nav />
      <div className="max-w-screen-xl px-5 mx-auto">
        <div className="flex justify-start py-5">
          <div className="relative text-gray-600 border-2 border-gray-300 bg-white rounded-lg w-min flex items-center group-active:border-indigo-600">
            <input
              className="bg-white font-medium group-active:border-indigo-600 h-10 px-5 pr-16 rounded-lg text-sm focus:border-none focus:ring-0 appearance-none border-none outline-none ring-0 focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button className="px-4 py-3 hover:bg-neutral-100 transition duration-150 rounded-r-md">
              <SearchIcon className="w-4 h-4 text-neutral-500" />
            </button>
          </div>
        </div>
        <div className="border-b-2 border-b-neutral-200 font-semibold text-lg text-neutral-500 py-2">
          Study Sets
        </div>
        <div className="grid grid-cols-3 gap-4 my-8 lg:grid-cols-4">
          {sets?.map((set) => (
            // <div className="flex justify-between relative w-full shadow h-36 bg-neutral-50 rounded-lg border-2 border-zinc-100 p-3">
            //   <div>
            //     <h2 className="font-semibold text-lg text-stone-600">
            //       {set.title}
            //     </h2>

            //     <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1">
            //       {set.terms.length} {set.terms.length === 1 ? 'term' : 'terms'}
            //     </span>
            //     <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1">
            //       public
            //     </span>
            //     <div className="absolute left-0 bottom-0 p-2 text-stone-600 font-semibold text-xs">
            //       {set.user || 'Anonymous'} &#x2022;{' '}
            //       {set.timestamp?.seconds
            //         ? timeConverter(set.timestamp?.seconds)
            //         : 'N/A'}
            //     </div>
            //   </div>
            //   <div className="min-w-fit">
            //     {set.cover ? (
            //       <img src={set.cover} alt={set.title} className="h-14" />
            //     ) : (
            //       <div className="flex h-20 w-20 overflow-hidden items-center justify-center rounded bg-gray-50">
            //         <TemplateIcon className="h-14 w-14 text-gray-300" />
            //       </div>
            //     )}
            //   </div>

            //   <button className="absolute bottom-0 right-0 m-1 rounded-full border border-indigo-500 p-1.5 text-indigo-500 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
            //     <span className="sr-only">Preview</span>
            //     <EyeIcon className="w-4 h-4" />
            //   </button>
            // </div>
            <a
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
      </div>
      <Footer />
    </div>
  );
}
