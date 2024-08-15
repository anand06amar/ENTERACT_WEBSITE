import React from 'react';

function Events() {
  const ventureEvents = [
    { title: "IIT Dhanbad", details: "Participated in the annual cultural fest.", image: "./IITDhanbad.jpeg" },
    { title: "IIT Kharagpur", details: "Participated in the cultural fest.", image: "./iit.png" }
  ];

  const performanceEvents = [
    { title: "Monoact Event", details: "Showcased acting skills in a monoact performance.", image: "./mono.png" },
    { title: "Nukkad Play", details: "Performed a street play on social issues.", image: "./nukkad.png" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#028393] px-4 md:px-8 lg:px-16 space-y-16">
      
      {/* VENTURE'S Section */}
      <div className="w-full">
        <h1 className="text-orange-500 text-4xl font-bold text-center mb-8 md:mt-8 lg:mt-16">VENTURE'S</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {ventureEvents.map((event, index) => (
            <div key={index} className="relative flex flex-col w-full md:w-80 rounded-xl bg-white text-gray-700 shadow-md mb-6">
              <div className="relative h-40 overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
                  {event.title}
                </h5>
                <p className="text-base font-light text-gray-700">
                  {event.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PERFORMANCE Section */}
      <div className="w-full">
        <h1 className="text-orange-500 text-4xl font-bold text-center mb-8">PERFORMANCE</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
          {performanceEvents.map((event, index) => (
            <div key={index} className="relative flex flex-col w-full md:w-80 rounded-xl bg-white text-gray-700 shadow-md">
              <div className="relative h-40 overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
                  {event.title}
                </h5>
                <p className="text-base font-light text-gray-700">
                  {event.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply margin and padding for smaller screens */}
      <style>
        {`
          @media (max-width: 768px) {
            .text-center {
              margin-top: 64px; /* Adjust to ensure it doesn't overlap the navbar */
            }
            .mb-6 {
              margin-bottom: 12px; /* Add some space between the cards and the footer */
            }
            .flex-row {
              flex-direction: column;
            }
            .w-full {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Events;
