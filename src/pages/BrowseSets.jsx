import { SearchIcon } from '@heroicons/react/outline';
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
          console.log(docs);
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
        <div class="grid grid-cols-3 gap-4 my-8 lg:grid-cols-4">
          {sets?.map((set) => (
            <div className="relative w-full shadow h-36 bg-neutral-50 rounded-lg border-2 border-zinc-100 p-3">
              <h2 className="font-semibold text-lg text-stone-600">
                {set.title}
              </h2>

              <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-indigo-600 bg-indigo-200 uppercase last:mr-0 mr-1">
                {set.terms.length} {set.terms.length === 1 ? 'term' : 'terms'}
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1">
                public
              </span>
              <div className="absolute left-0 bottom-0 p-2 text-stone-600 font-semibold text-xs">
                {set.user || 'Anonymous'} &#x2022;{' '}
                {set.timestamp?.seconds
                  ? timeConverter(set.timestamp?.seconds)
                  : 'N/A'}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
