import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    imageSrc: "https://www.navitas.com/wp-content/uploads/2023/07/professional-agent-laptop-200x200-1.jpg",
    imageAlt: "Professional agent using laptop and smiling",
    title: "Agents",
    description: "Find out how to become a Navitas agent. Explore resources and discover opportunities.",
    link: "",
  },
  {
    imageSrc: "https://www.navitas.com/wp-content/uploads/2023/07/students-sitting-campus-200x200-1.jpg",
    imageAlt: "students sitting on campus talking",
    title: "Universities",
    description: "Find high-quality international opportunities and expand your offerings to all corners of the globe.",
    link: "",
  },
];

const PartnerCards = () => {
  return (
<section className="bg-white py-20">
  <div className="max-w-[1200px] mx-auto px-8">
    <h2 className="text-center text-dark-text text-[2.5rem] font-bold leading-tight mb-12">
      Partner with us
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cardData.map((card) => (
        <div
          key={card.title}
          className="bg-gray-200 rounded-2xl shadow-md overflow-hidden p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-dark-text text-[1.5rem] font-bold mb-3">{card.title}</h3>
              <p className="text-dark-text text-base mb-4">
                {card.description}
              </p>
              <Link
                href={card.link}
                className="inline-block bg-[#C4008C] text-white font-semibold text-center px-6 py-3 rounded-md transition-colors hover:brightness-90"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default PartnerCards;