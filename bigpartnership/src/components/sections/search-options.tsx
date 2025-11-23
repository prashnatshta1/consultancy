"use client";

import { useState } from "react";
import Link from "next/link";
import type { FC } from "react";

interface RadioOptionProps {
  name: string;
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const RadioOption: FC<RadioOptionProps> = ({
  name,
  id,
  label,
  checked = false,
  onChange,
}) => (
  <div className="relative flex items-center gap-x-2">
    <input
      id={id}
      name={name}
      type="radio"
      checked={checked}
      onChange={() => onChange?.(true)}
      className="peer absolute h-full w-full cursor-pointer opacity-0"
    />
    <div
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-gray-400 transition-colors peer-checked:border-[#006B5C]"
      aria-hidden="true"
    >
      <div className="h-2 w-2 rounded-full bg-[#006B5C] scale-0 transition-transform peer-checked:scale-100" />
    </div>
    <label htmlFor={id} className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
      {label}
    </label>
  </div>
);

const SearchOptions = () => {
  const [activeTab, setActiveTab] = useState("Courses");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [collegeFilter, setCollegeFilter] = useState("");
  const [courseLevel, setCourseLevel] = useState("undergraduate");
  const [searchResults, setSearchResults] = useState<string>("");

  const tabs = ["Courses", "Destinations", "Colleges/Campuses", "Resources"];

  const destinations = [
    { name: "Australia", image: "/images/countries/australia.jpg" },
    { name: "Canada", image: "/images/countries/canada.jpg" },
    { name: "Germany", image: "/images/countries/germany.jpg" },
    { name: "Indonesia", image: "/images/countries/indonesia.jpg" },
    { name: "Netherlands", image: "/images/countries/netherlands.jpg" },
    { name: "New Zealand", image: "/images/countries/newzealand.jpg" },
    { name: "Singapore", image: "/images/countries/singapore.jpg" },
    { name: "Sri Lanka", image: "/images/countries/srilanka.jpg" },
    { name: "UAE", image: "/images/countries/uae.jpg" },
    { name: "UK", image: "/images/countries/uk.jpg" },
    { name: "USA", image: "/images/countries/usa.jpg" },
  ];

  const colleges = [
    { name: "ACAP University College - Adelaide", country: "Australia", city: "Adelaide" },
    { name: "ACAP University College - Melbourne", country: "Australia", city: "Melbourne" },
    { name: "ACAP University College - Perth", country: "Australia", city: "Perth" },
    { name: "ACAP University College - Sydney", country: "Australia", city: "Sydney" },
    { name: "Anglia Ruskin University College", country: "United Kingdom", city: "Cambridge" },
    { name: "Birmingham City University International College", country: "United Kingdom", city: "Birmingham" },
    { name: "Brunel University London Pathway College", country: "United Kingdom", city: "London" },
    { name: "Centre for English Language in the University of South Australia", country: "Australia", city: "Adelaide" },
    { name: "Charles Sturt University Melbourne", country: "Australia", city: "Melbourne" },
    { name: "Charles Sturt University Sydney", country: "Australia", city: "Sydney" },
    { name: "Christchurch College of English", country: "New Zealand", city: "Christchurch" },
    { name: "Curtin College", country: "Australia", city: "Perth" },
    { name: "Curtin Singapore", country: "Singapore", city: "Singapore" },
    { name: "Deakin College", country: "Australia", city: "Melbourne" },
    { name: "Deakin College - Geelong Waterfront", country: "Australia", city: "Geelong" },
    { name: "Deakin College - Geelong Waurn Ponds", country: "Australia", city: "Geelong" },
    { name: "Deakin University Lancaster University Indonesia", country: "Indonesia", city: "Bandung" },
    { name: "Edith Cowan College", country: "Australia", city: "Perth" },
    { name: "Edith Cowan University English Centre", country: "Australia", city: "Perth" },
    { name: "Edith Cowan University Sri Lanka", country: "Sri Lanka", city: "Colombo" },
    { name: "Eynesbury College", country: "Australia", city: "Adelaide" },
    { name: "Eynesbury College | Adelaide Uni", country: "Australia", city: "Adelaide" },
    { name: "Eynesbury College | Flinders Uni", country: "Australia", city: "Adelaide" },
    { name: "Eynesbury College | UniSA", country: "Australia", city: "Adelaide" },
    { name: "Eynesbury College | UoA", country: "Australia", city: "Adelaide" },
    { name: "Fraser International College", country: "Canada", city: "Vancouver" },
    { name: "Griffith College - Brisbane", country: "Australia", city: "Brisbane" },
    { name: "Griffith College - Gold Coast", country: "Australia", city: "Gold Coast" },
    { name: "Hawthorn-Melbourne", country: "Australia", city: "Melbourne" },
    { name: "Hertfordshire International College", country: "United Kingdom", city: "Hertfordshire" },
    { name: "ICN International College Paris", country: "France", city: "Paris" },
    { name: "International College of Manitoba", country: "Canada", city: "Winnipeg" },
    { name: "International College Portsmouth", country: "United Kingdom", city: "Portsmouth" },
    { name: "International College Robert Gordon University", country: "United Kingdom", city: "Aberdeen" },
    { name: "Keele University International College", country: "England", city: "Keele" },
    { name: "La Trobe College Australia (Melbourne)", country: "Australia", city: "Melbourne" },
    { name: "La Trobe College Australia (Sydney)", country: "Australia", city: "Sydney" },
    { name: "La Trobe College Australia English Centre", country: "Australia", city: "Melbourne" },
    { name: "La Trobe University Sydney Campus", country: "Australia", city: "Sydney" },
    { name: "Lancaster University Leipzig", country: "Germany", city: "Leipzig" },
    { name: "Manchester Metropolitan University International College", country: "United Kingdom", city: "Manchester" },
    { name: "Murdoch University Dubai", country: "United Arab Emirates", city: "Dubai" },
    { name: "Navitas English Perth Campus", country: "Australia", city: "Perth" },
    { name: "Navitas English Sydney Campus", country: "Australia", city: "Sydney" },
    { name: "Queens College Global Student Success Program", country: "USA", city: "New York" },
    { name: "SAE Auckland", country: "New Zealand", city: "Auckland" },
    { name: "SAE Institute Atlanta", country: "USA", city: "Atlanta" },
    { name: "SAE Institute Chicago", country: "USA", city: "Chicago" },
    { name: "SAE Institute of Technology Miami", country: "USA", city: "Miami" },
    { name: "SAE Institute of Technology Nashville", country: "USA", city: "Nashville" },
    { name: "SAE Institute of Technology NYC", country: "USA", city: "New York" },
    { name: "SAE University College - Adelaide", country: "Australia", city: "Adelaide" },
    { name: "SAE University College - Brisbane", country: "Australia", city: "Brisbane" },
    { name: "SAE University College - Byron Bay", country: "Australia", city: "Byron" },
    { name: "SAE University College - Melbourne", country: "Australia", city: "Melbourne" },
    { name: "SAE University College - Online (AUS)", country: "Australia", city: "Online" },
    { name: "SAE University College - Perth", country: "Australia", city: "Perth" },
    { name: "SAE University College - Sydney", country: "Australia", city: "Sydney" },
    { name: "SAE Vancouver", country: "Canada", city: "Vancouver" },
    { name: "South Australian Institute of Business and Technology", country: "Australia", city: "Adelaide" },
    { name: "SRH International College", country: "Germany", city: "Heidelberg" },
    { name: "Sydney Institute of Business and Technology", country: "Australia", city: "Sydney" },
    { name: "Taylors College Sydney", country: "Australia", city: "Sydney" },
    { name: "The College, Swansea University", country: "United Kingdom", city: "Swansea" },
    { name: "The Hague Pathway College", country: "Netherland", city: "The Hague" },
    { name: "Toronto Metropolitan University International College", country: "Canada", city: "Toronto" },
    { name: "Twente Pathway College", country: "Netherland", city: "Twente" },
    { name: "UC International College", country: "New Zealand", city: "Christchurch" },
    { name: "ULethbridge International College Calgary", country: "Canada", city: "Calgary" },
    { name: "University Academy 92", country: "United Kingdom", city: "Manchester" },
    { name: "University of Canberra College", country: "Australia", city: "Canberra" },
    { name: "University of Plymouth International College", country: "United Kingdom", city: "Plymouth" },
    { name: "University of Waikato College", country: "New Zealand", city: "Waikato" },
    { name: "Western Sydney University International College", country: "Australia", city: "Parramatta" },
    { name: "Western Sydney University Sydney City Campus", country: "Australia", city: "Sydney" },
    { name: "Wilfrid Laurier International College", country: "Canada", city: "Waterloo" },
  ];

  const countries = ["Global", "Australia", "Canada", "Germany", "Indonesia", "Netherlands", "New Zealand", "Singapore", "Sri Lanka", "United Arab Emirates", "United Kingdom", "USA"];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const mockCourses = [
        "Business Administration", "Computer Science", "Engineering", "Medicine", "Law", 
        "Psychology", "Marketing", "Finance", "Education", "Nursing", "Architecture", 
        "Art & Design", "Communications", "Economics", "Environmental Science"
      ];
      const matchingCourses = mockCourses.filter(course => 
        course.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const resultCount = matchingCourses.length > 0 ? matchingCourses.length : Math.floor(Math.random() * 15) + 1;
      setSearchResults(`Found ${resultCount} ${courseLevel} courses matching "${searchTerm}"`);
      console.log("Course Search:", { searchTerm, courseLevel, results: matchingCourses });
    } else {
      setSearchResults("Please enter a search term");
    }
  };

  const handleDestinationClick = (destination: string) => {
    console.log("[v0] Selected destination:", destination);
    alert(`${destination} destination page coming soon!`);
  };

  const handleCollegeClick = (collegeName: string) => {
    console.log("[v0] Selected college:", collegeName);
    alert(`View details for ${collegeName}`);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    console.log("[v0] Selected country:", country);
  };

  const filteredColleges = colleges.filter(college => 
    college.name.toLowerCase().includes(collegeFilter.toLowerCase()) ||
    college.country.toLowerCase().includes(collegeFilter.toLowerCase())
  );

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h2 className="mb-12 text-center text-[2.5rem] font-bold leading-tight text-gray-800">
          Search our study options
        </h2>
        <div className="border border-border">
          <div className="border-b border-border">
            <nav className="flex overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    console.log("[v0] Clicked tab:", tab);
                  }}
                  className="group relative shrink-0 whitespace-nowrap px-4 py-4 text-sm font-medium outline-none md:px-6 md:text-base transition-colors"
                >
                  <span
                    className={`transition-colors duration-200 ease-in-out ${
                      activeTab === tab
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-foreground transform transition-transform duration-300 ease-out ${
                      activeTab === tab
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 md:p-8">
            {activeTab === "Courses" && (
              <div>
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  Find an undergraduate course
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <input
                      type="text"
                      placeholder="Search by subject name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      className="w-full flex-grow rounded-[4px] border border-gray-300 bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-[#006B5C] focus:outline-none focus:ring-1 focus:ring-[#006B5C]"
                    />
                    <button 
                      onClick={handleSearch}
                      className="shrink-0 rounded-[4px] bg-[#C4008C] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#a10070] active:scale-95"
                    >
                      Search
                    </button>
                  </div>
                  {searchResults && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-[4px] text-sm text-blue-700">
                      {searchResults}
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
                    <RadioOption
                      name="course-level"
                      id="undergraduate"
                      label="Undergraduate"
                      checked={courseLevel === "undergraduate"}
                      onChange={() => {
                        setCourseLevel("undergraduate");
                        setSearchResults("");
                        console.log("Selected: Undergraduate");
                      }}
                    />
                    <RadioOption
                      name="course-level"
                      id="postgraduate"
                      label="Postgraduate"
                      checked={courseLevel === "postgraduate"}
                      onChange={() => {
                        setCourseLevel("postgraduate");
                        setSearchResults("");
                        console.log("Selected: Postgraduate");
                      }}
                    />
                    <RadioOption
                      name="course-level"
                      id="english"
                      label="English"
                      checked={courseLevel === "english"}
                      onChange={() => {
                        setCourseLevel("english");
                        setSearchResults("");
                        console.log("Selected: English");
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Destinations" && (
              <div>
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  Global study destinations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {destinations.map((destination) => {
                    if (destination.name === "Australia") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/australia"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "Canada") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/canada"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "Germany") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/germany"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "Indonesia") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/indonesia"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "Netherlands") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/netherlands"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "New Zealand") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/new-zealand"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "Singapore") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/singapore"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "Sri Lanka") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/sri-lanka"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "UAE") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/uae"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "UK") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/uk"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    if (destination.name === "USA") {
                      return (
                        <Link
                          key={destination.name}
                          href="/destinations/usa"
                          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95 block"
                        >
                          <img 
                            src={destination.image || "/placeholder.svg"} 
                            alt={destination.name}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                          </div>
                        </Link>
                      );
                    }
                    return (
                      <button
                        key={destination.name}
                        onClick={() => handleDestinationClick(destination.name)}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
                      >
                        <img 
                          src={destination.image || "/placeholder.svg"} 
                          alt={destination.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <h4 className="font-semibold text-lg text-center">{destination.name}</h4>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "Colleges/Campuses" && (
              <div>
                <div className="mb-6">
                  <h3 className="mb-4 text-2xl font-bold text-foreground">
                    Find a College/Campus
                  </h3>
                  <input
                    type="text"
                    placeholder="Search by college name or country"
                    value={collegeFilter}
                    onChange={(e) => setCollegeFilter(e.target.value)}
                    className="w-full max-w-md rounded-[4px] border border-gray-300 bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-[#006B5C] focus:outline-none focus:ring-1 focus:ring-[#006B5C]"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold">College</th>
                        <th className="text-left py-3 px-4 font-semibold">Country</th>
                        <th className="text-left py-3 px-4 font-semibold">City</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredColleges.map((college, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <button 
                              onClick={() => handleCollegeClick(college.name)}
                              className="text-blue-600 hover:underline font-medium transition-colors active:text-blue-800"
                            >
                              {college.name}
                            </button>
                          </td>
                          <td className="py-3 px-4">{college.country}</td>
                          <td className="py-3 px-4">{college.city}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "Resources" && (
              <div>
                <p className="mb-6 text-lg text-muted-foreground">
                  Please select country, then select college name.
                </p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Country</label>
                    <select 
                      value={selectedCountry}
                      onChange={(e) => handleCountrySelect(e.target.value)}
                      className="w-full max-w-md rounded-[4px] border border-gray-300 bg-white px-4 py-3 text-base text-foreground focus:border-[#006B5C] focus:outline-none focus:ring-1 focus:ring-[#006B5C] cursor-pointer"
                    >
                      <option value="">Select</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  {selectedCountry && (
                    <div className="space-y-4">
                      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                        <h4 className="font-semibold text-teal-800 mb-2">Available Colleges in {selectedCountry}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {colleges
                            .filter(college => selectedCountry === 'Global' || college.country === selectedCountry)
                            .map((college, index) => (
                              <button
                                key={index}
                                onClick={() => handleCollegeClick(college.name)}
                                className="text-left p-2 text-sm text-teal-700 hover:bg-teal-100 rounded transition-colors"
                              >
                                {college.name} - {college.city}
                              </button>
                            ))
                          }
                        </div>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Resources for {selectedCountry}</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Study guides and course materials</li>
                          <li>• Visa and immigration information</li>
                          <li>• Accommodation and housing guides</li>
                          <li>• Student support services</li>
                          <li>• Career guidance and job placement</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchOptions;
