import React from 'react';
import Section from './Section';

const Home = () => {
  return (
    <>
      <section className="relative">
        <div className="relative">
          <img
            className="w-full h-1/2 object-cover mx-auto"
            alt=""
            src="/bg1.png"
          />
          <Section />
        </div>
      </section>
    </>
  );
};

export default Home;
