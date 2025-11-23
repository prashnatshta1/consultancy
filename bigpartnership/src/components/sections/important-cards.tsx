import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    imageSrc: 'https://www.navitas.com/wp-content/uploads/2023/08/hands-holding-world-200x200-1.jpg',
    imageAlt: 'Planet earth resting in two cradled hands',
    title: 'Our impact',
    description: 'We want to operate in a way that positively impacts current generations – without compromise for future generations.',
    link: '',
  },
  {
    imageSrc: 'https://www.navitas.com/wp-content/uploads/2023/07/child-student-reading-200x200-1.jpg',
    imageAlt: 'Young child student reading in school',
    title: 'NET',
    description: 'The Navitas Education Trust (NET) supports innovative organisations bringing education opportunities to people around the world.',
    link: '/impact/navitas-education-trust',
  },
];

const ImportantCards = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-center text-[2.5rem] font-bold text-foreground mb-12 leading-tight">
          What's important to us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg shadow-md overflow-hidden p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    className="w-[200px] h-[200px] object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[1.5rem] font-bold text-foreground mb-3 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base text-foreground mb-4">
                    {card.description}
                  </p>
                  <a
                    href={card.link}
                    className="inline-block text-center bg-[#C4008C] text-white font-semibold py-3 px-6 rounded-md hover:brightness-90 transition-colors"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantCards;