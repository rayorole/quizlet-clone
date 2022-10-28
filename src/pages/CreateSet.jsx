import React, { useState, useRef, Fragment } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CheckIcon, TemplateIcon } from '@heroicons/react/solid';
import Newset from '../components/newset';
import { Dialog, Transition } from '@headlessui/react';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase';

let terms;

export function setTermsFn(arg) {
  terms = arg;
}

export default function CreateSet() {
  const [fileUrl, setFileUrl] = useState(null);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    window.location.replace('/sets');
  }

  const auth = getAuth();
  const titleRef = useRef();
  const schoolRef = useRef();
  const aboutRef = useRef();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.replace('/');
    }
  });

  const fileUpload = async (file) => {
    if (!file) return;

    const storageRef = ref(storage, `covers/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFileUrl(downloadURL);
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, 'sets'), {
      title: titleRef.current.value || alert('Enter a title please'),
      about: aboutRef.current.value || alert('Enter an about please'),
      school: schoolRef.current.value || alert('Enter a school please'),
      visibility: 'everyone',
      editable: 'everyone',
      terms: terms,
      user: auth.currentUser.displayName || 'Anonymous',
      timestamp: serverTimestamp(),
      cover: fileUrl,
      uid: auth.currentUser.uid,
    });

    console.log('Document uploaded with id of:', docRef.id);
    setIsOpen(true);
  };

  return (
    <div>
      <Nav />
      <div className="max-w-screen-xl mx-auto my-12 px-8">
        <form method="POST">
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Create a new set
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    This information will be displayed publicly.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            ref={titleRef}
                            type="text"
                            name="title"
                            id="title"
                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Enter a title like 'Biology - Chapter 22: Evolution'"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-gray-700"
                      >
                        About
                      </label>
                      <div className="mt-1">
                        <textarea
                          required
                          ref={aboutRef}
                          id="about"
                          name="about"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Brief description of the set.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          School name
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            required
                            ref={schoolRef}
                            type="text"
                            name="school"
                            id="school"
                            className="block w-full flex-1 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Photo
                      </label>
                      <div className="mt-1 flex items-center">
                        {fileUrl ? (
                          <img src={fileUrl} alt="Img" className="w-14" />
                        ) : (
                          <div className="flex h-20 w-20 overflow-hidden items-center justify-center rounded-full bg-gray-100">
                            <TemplateIcon className="h-14 w-14 text-gray-300" />
                          </div>
                        )}

                        <input
                          required
                          onChange={(e) => fileUpload(e.target.files[0])}
                          type="file"
                          accept="image/*"
                          className="ml-5 file:hidden w-40 cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Terms &amp; definitions
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Enter your terms and their definitions here.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div>
                      <Newset />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Visibility &amp; permissions
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Decide who can view and edit your set.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <fieldset>
                      <legend className="sr-only">Visible</legend>
                      <div
                        className="text-base font-medium text-gray-900"
                        aria-hidden="true"
                      >
                        Visible
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="readable-me"
                            name="viewable"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="readable-me"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Just me
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="readable-pass"
                            name="viewable"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="readable-pass"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            People with a password
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="readable-everyone"
                            defaultChecked
                            name="viewable"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="readable-everyone"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Everyone
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="contents text-base font-medium text-gray-900">
                        Editable
                      </legend>

                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="editable-me"
                            name="editable"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="editable-me"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Just me
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="editable-pass"
                            name="editable"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="editable-pass"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            People with a password
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="editable-everyone"
                            defaultChecked
                            name="editable"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="editable-everyone"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Everyone
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      onClick={handleSubmit}
                      className="inline-flex space-x-3 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span>Create set</span>
                      <CheckIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Set created successfully!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your set has been registered, you can view your sets now!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      View my set
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
