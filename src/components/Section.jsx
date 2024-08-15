import React from 'react';

const Section = () => {
  const activities = [
    {
      title: "NUKKAD",
      description: "It (street play) is a form of theatrical performance conducted in open, public spaces like streets, markets, or parks. It is typically used to convey social, political, or cultural messages in a lively and engaging manner. The actors use minimal props, rely on their voices and body language, and often interact directly with the audience to involve them in the performance.",
      image: "./public/iit.png"
    },
    {
      title: "MONOACT",
      description: "It is a form of performance in which a single actor portrays multiple characters or delivers a narrative solo. It typically involves dramatic storytelling, using different voices, expressions, and body language to distinguish between characters and convey the story effectively.",
      image: "./public/monoact.png"
    },
    {
      title: "MIME",
      description: "Mime in acting is a performance art where actors use body movements, facial expressions, and gestures to tell a story or convey emotions without speaking. It's like acting out a scene without words, relying solely on physical actions to communicate.",
      image: "./mono.png"
    },
    {
      title: "STAGE PLAY",
      description: "A stage play is a form of live performance where actors portray characters in a story in front of an audience, typically in a theater. The actors use dialogue, actions, and expressions to bring the script to life, often accompanied by props, costumes, and set designs to enhance the storytelling.",
      image: "./public/stage.png"
    }
  ];

  return (
    <section className="bg-[#028393] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">WHAT WE DO!!</h2>
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} space-y-6 md:space-y-0 md:space-x-8`}
            >
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center md:text-left">{activity.title}</h3>
                <p className="text-base md:text-lg lg:text-xl text-center md:text-left">{activity.description}</p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-cover rounded-md md:w-72 lg:w-80" // Adjust size here
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            h3 {
              text-align: center;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Section;
