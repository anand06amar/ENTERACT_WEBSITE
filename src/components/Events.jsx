import React from 'react';

function Events() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-teal-900">
      <h1 className="text-orange-500 text-4xl font-bold mb-8">PERFORMANCE</h1>
      <div className="grid grid-cols-2 gap-12">
        <div className="bg-[#D9D9D9] rounded-lg shadow-lg w-80 h-80 p-4 flex flex-col items-center justify-center">
          <p className="text-blue-900 text-xl font-semibold">15 AUGUST<br />AT OVALS</p>
          <div className="mt-auto bg-white w-full h-6 rounded-b-lg flex items-center justify-center">
            <p className="text-blue-900 text-sm font-semibold">Event Details</p>
          </div>
        </div>
        <div className="bg-[#D9D9D9] rounded-lg shadow-lg w-80 h-80 p-4 flex flex-col items-center justify-center">
          <p className="text-blue-900 text-xl font-semibold">26 JANUARY<br />AT OVALS</p>
          <div className="mt-auto bg-white w-full h-6 rounded-b-lg flex items-center justify-center">
            <p className="text-blue-900 text-sm font-semibold">Event Details</p>
          </div>
        </div>
        <div className="bg-[#D9D9D9] rounded-lg shadow-lg w-80 h-80 p-4 flex flex-col items-center justify-center">
          <p className="text-blue-900 text-xl font-semibold">REPUBLIC DAY<br />STREET PLAY</p>
          <div className="mt-auto bg-white w-full h-6 rounded-b-lg flex items-center justify-center">
            <p className="text-blue-900 text-sm font-semibold">Event Details</p>
          </div>
        </div>
        <div className="bg-[#D9D9D9] rounded-lg shadow-lg w-80 h-80 p-4 flex flex-col items-center justify-center">
          <p className="text-blue-900 text-xl font-semibold">INDEPENDENCE DAY<br />STREET PLAY</p>
          <div className="mt-auto bg-white w-full h-6 rounded-b-lg flex items-center justify-center">
            <p className="text-blue-900 text-sm font-semibold">Event Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
