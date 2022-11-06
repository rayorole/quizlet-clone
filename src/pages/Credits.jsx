import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Team from '../components/team';

export default function Features() {
  return (
    <div className="bg-gray-50">
      <Nav />
      <div className="bg-gray-100">
        <section className="max-w-screen-xl mx-auto">
          <Team />
        </section>
      </div>
      <Footer />
    </div>
  );
}
