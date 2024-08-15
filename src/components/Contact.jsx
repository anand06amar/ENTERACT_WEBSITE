import React from 'react';

const Contact = () => {
  // Sample contact data (replace with actual data as needed)
  const contacts = [
    { name: "Satyaki", post: "President", phone: "+91 9073394144" },
    { name: "Rohan", post: "Vice President", phone: "+91 8583856907" },
    { name: "Rajanish", post: "Vice President", phone: "+91 9142239317" },
    { name: "Tushar", post: "General Secretary", phone: "+91 9142239317" },
    { name: "Ankit", post: "Treasurer", phone: "+91 9354711841" }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#028393] px-4 md:px-8 lg:px-16">
      {/* CONTACT US Section */}
      <div className="w-full text-center mt-[70px] mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-orange-500 text-4xl font-bold mb-8">CONTACT US</h1>
        <div className="bg-light-aqua-blue rounded-3xl shadow-lg p-8 max-w-2xl w-full mx-auto">
          <div className="space-y-8">
            {contacts.map((contact, index) => (
              <div key={index} className="text-center">
                <h2 className="text-teal-900 text-2xl font-semibold mb-2">{contact.name}</h2>
                <p className="text-gray-700 text-lg">{contact.post}</p>
                <p className="text-gray-700 text-lg">{contact.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Inline CSS for media queries */}
      <style>
        {`
          @media (max-width: 768px) {
            .mt-[70px] {
              margin-top: 60px; /* Adjust margin for smaller screens */
            }
            .mb-16 {
              margin-bottom: 20px; /* Adjust bottom margin for smaller screens */
            }
          }
        `}
      </style>
    </div>
  );
}

export default Contact;
