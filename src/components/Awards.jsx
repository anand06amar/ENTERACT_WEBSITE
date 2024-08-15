import React from 'react';

const Awards = () => {
  const awards = [
    { 
      year: "2023", 
      event: "Nukkad Natak, IIT Kharagpur", 
      position: "Best Actor", 
      description: "Awarded for an outstanding performance as the lead actor in the Nukkad Natak." 
    },
    { 
      year: "2023", 
      event: "Nukkad Natak, IIT (ISM) Dhanbad", 
      position: "1st", 
      description: "Achieved 1st position for an impactful and engaging street play performance." 
    },
    { 
      year: "2023", 
      event: "Monoact, IIT (ISM) Dhanbad", 
      position: "3rd", 
      description: "Secured 3rd place for an emotional and expressive monoact performance." 
    },
    { 
      year: "2021", 
      event: "Monoact, IIIT Vadodara", 
      position: "1st", 
      description: "Won 1st place for an exceptional solo performance." 
    },
    { 
      year: "2021", 
      event: "Monoact, IIT Kharagpur", 
      position: "3rd", 
      description: "Secured 3rd place for a compelling monoact presentation." 
    },
    { 
      year: "2020", 
      event: "Nukkad Natak, IIT Kharagpur", 
      position: "2nd", 
      description: "Earned 2nd place for a thought-provoking and energetic street play." 
    },
    { 
      year: "2020", 
      event: "Nukkad Natak, IIT (ISM) Dhanbad", 
      position: "1st", 
      description: "Achieved 1st position for a powerful and engaging street play." 
    },
    { 
      year: "2020", 
      event: "Stage Play, IIT Kharagpur", 
      position: "Best Actor", 
      description: "Awarded Best Actor for a remarkable performance in the stage play." 
    },
    { 
      year: "2020", 
      event: "Monoact, IIT (ISM) Dhanbad", 
      position: "2nd", 
      description: "Secured 2nd place for an impactful solo performance." 
    },
    { 
      year: "2020", 
      event: "Stage Play, IIT (ISM) Dhanbad", 
      position: "3rd", 
      description: "Earned 3rd place for an impressive stage play performance." 
    },
    { 
      year: "2019", 
      event: "Nukkad Natak, IIT Kharagpur", 
      position: "2nd", 
      description: "Achieved 2nd place for a compelling street play presentation." 
    },
    { 
      year: "2019", 
      event: "Nukkad Natak, IIM Calcutta", 
      position: "2nd", 
      description: "Secured 2nd position for a well-received Nukkad Natak." 
    },
    { 
      year: "2019", 
      event: "Stage Play, IIM Calcutta", 
      position: "2nd", 
      description: "Earned 2nd place for an outstanding stage play performance." 
    },
    { 
      year: "2018", 
      event: "Nukkad Natak, IIT Kharagpur", 
      position: "2nd", 
      description: "Earned 2nd place for a socially impactful street play." 
    },
    { 
      year: "2018", 
      event: "Nukkad Natak, IIM Calcutta", 
      position: "2nd", 
      description: "Secured 2nd position for a powerful Nukkad Natak performance." 
    },
    { 
      year: "2018", 
      event: "Stage Play, IIM Calcutta", 
      position: "3rd", 
      description: "Achieved 3rd place for a captivating stage play." 
    },
    { 
      year: "2017", 
      event: "Nukkad Natak, IIM Calcutta", 
      position: "3rd", 
      description: "Secured 3rd position for a noteworthy street play performance." 
    },
    { 
      year: "2017", 
      event: "Mime, IIM Calcutta", 
      position: "1st, 2nd", 
      description: "Won 1st and 2nd positions for an outstanding mime performance." 
    },
    { 
      year: "2017", 
      event: "Stage Play, IIM Calcutta", 
      position: "2nd", 
      description: "Earned 2nd place for an impressive stage play production." 
    },
    { 
      year: "2016", 
      event: "Nukkad Natak, IIM Calcutta", 
      position: "3rd", 
      description: "Achieved 3rd place for an engaging Nukkad Natak." 
    },
    { 
      year: "2015", 
      event: "Nukkad Natak, IIM Calcutta", 
      position: "1st", 
      description: "Secured 1st place for a highly impactful street play performance." 
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#028393] px-4 md:px-8 lg:px-16">
      {/* AWARD'S Section */}
      <div className="w-full text-center mt-[70px] mb-16 md:mb-24 lg:mb-32">
        <h1 className="text-orange-500 text-4xl font-bold mb-8">AWARDS</h1>
        <div className="bg-light-aqua-blue rounded-3xl shadow-lg p-8 max-w-5xl mx-auto">
          <div className="space-y-8 max-h-[400px] overflow-y-auto">
            {awards.map((award, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="text-left">
                  <h2 className="text-teal-900 text-xl font-semibold mb-1">{award.event}</h2>
                  <p className="text-gray-700 text-sm font-bold">{award.position}</p>
                  <p className="text-gray-600 text-xs">{award.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Query for Small Devices */}
      <style>
        {`
          @media (max-width: 768px) {
            .text-center {
              margin-top: 0; /* Adjust to prevent overlap with navbar */
            }
            h1 {
              font-size: 2.5rem; /* Reduce font size for smaller screens */
              margin-top: 20px; /* Provide enough margin-top for the heading */
            }
          }
        `}
      </style>
    </div>
  );
}

export default Awards;
