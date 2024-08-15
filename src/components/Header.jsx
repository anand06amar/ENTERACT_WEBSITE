import React from 'react';
import Section from './Section';

const Header = () => {
  return (
    <>
    <header className="bg-cover bg-center h-screen">
      <div className="bg-teal-900 bg-opacity-70 h-full flex justify-center items-center text-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-6">WHO ARE WE?!!</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Enteract is the official Dramatics Club of NIT Durgapur. It is a home to all the theatre lovers and nukkad enthusiasts. Enteract produces a wide variety of performances ranging from street plays and stage plays to Monoacts and mimes, arguably with professional competency.
          </p>
        </div>
      </div>
    </header>
    <Section/>
    </>
  );
}

export default Header;