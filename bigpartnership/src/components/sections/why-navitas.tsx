import React from 'react';

const GiftBoxIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="4" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M12 22V8" />
    <path d="M9.5 8c0-3.5 1-5 2.5-5s2.5 1.5 2.5 5" />
  </svg>
);

const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22h20" />
    <path d="M4 22V7l8-4 8 4v15" />
    <path d="M8 22V12" />
    <path d="M12 22V12" />
    <path d="M16 22V12" />
    <path d="M7 9h10" />
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const PeopleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PassportIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <path d="M12 9a6 6 0 0 0 0 6"/>
    <path d="M12 9a6 6 0 0 1 0 6"/>
  </svg>
);


const statsData = [
  { icon: GiftBoxIcon, number: "700+", text: "programs" },
  { icon: BuildingIcon, number: "38", text: "university partners" },
  { icon: GlobeIcon, number: "18", text: "countries to choose from" },
  { icon: PeopleIcon, number: "60,000", text: "students yearly" },
  { icon: PassportIcon, number: "130+", text: "student nationalities" },
];

const WhyNavitas = () => {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="container mx-auto px-8 md:px-4">
        <h2 className="text-center text-[2.5rem] font-bold text-[#1A1A1A] mb-16 leading-tight">
          Why bigPartnership
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-y-6 md:gap-x-8 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full md:flex-1">
              <div className="h-[60px] w-[60px] text-[#008B8B] mb-6">
                <stat.icon className="w-full h-full" />
              </div>
              <p className="text-5xl font-bold text-[#1A1A1A] leading-none">
                {stat.number}
              </p>
              <p className="text-base text-[#666666] mt-4 max-w-[170px] mx-auto">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNavitas;