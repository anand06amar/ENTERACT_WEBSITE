import React from 'react';

const Section = () => {
  const activities = [
    {
      title: "NUKKAD",
      description: "It (street play) is a form of theatrical performance conducted in open, public spaces like streets, markets, or parks. It is typically used to convey social, political, or cultural messages in a lively and engaging manner...",
      image: "path_to_image.jpg"
    },
    {
      title: "MONOACT",
      description: "It is a form of performance in which a single actor portrays multiple characters or delivers a narrative solo...",
      image: "path_to_image.jpg"
    },
    {
      title: "MIME",
      description: "Mime in acting is a performance art where actors use body movements, facial expressions, and gestures to tell a story...",
      image: "path_to_image.jpg"
    },
    {
      title: "STAGE PLAY",
      description: "A stage play is a form of live performance where actors portray characters in a story in front of an audience...",
      image: "path_to_image.jpg"
    }
  ];

  return (
    <section className="bg-teal-700 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">WHAT WE DO!!</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {activities.map((activity, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={activity.image} alt={activity.title} className="w-48 h-48 rounded-md mb-6" />
              <h3 className="text-xl font-bold mb-4">{activity.title}</h3>
              <p className="text-center max-w-sm">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;