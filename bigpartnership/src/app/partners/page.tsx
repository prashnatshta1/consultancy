"use client"

import HeaderSection from "@/src/components/sections/header";
import Footer from "@/src/components/sections/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Partner {
  _id: string;
  title: string;
  description: string;
  image?: string;
}

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/partners');
      const data = await response.json();
      setPartners(data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
    <section className="relative h-[500px] bg-[url('/images/goverment/campus.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/40">
    <div className="container mx-auto px-4 h-full flex items-center">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Partners
        </h1>
        <p className="text-lg text-white">
          We work with universities, industry partners and governments to
          transform lives through education.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* First Row - Universities & Agents */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.navitas.com/wp-content/uploads/2023/07/campus-stairs-seats-200x200-1.jpg"
                      alt="bigPartnership campus"
                      className="w-[200px] h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Universities</h3>
                    <p className="text-gray-700 mb-4">
                      Pathway programs, global managed campuses, international hosting services.
                    </p>
                    <Link
                      href="/partners/universities"
                      className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.navitas.com/wp-content/uploads/2023/07/professional-agent-laptop-200x200-1.jpg"
                      alt="Professional agent using laptop and smiling"
                      className="w-[200px] h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Agents</h3>
                    <p className="text-gray-700 mb-4">
                      Find out how to become a bigPartnership agent. Access resources, information, and more.
                    </p>
                    <Link
                      href="#"
                      className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Row - School Counsellors & Governments */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.navitas.com/wp-content/uploads/2023/07/student-desk-laptop-headphones-200x200-1.jpg"
                      alt="student studying alone in library"
                      className="w-[200px] h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">School counsellors</h3>
                    <p className="text-gray-700 mb-4">
                      Give your students the best start to their university education. Find out how to partner with us.
                    </p>
                    <Link
                      href="/partners/school-counsellors"
                      className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.navitas.com/wp-content/uploads/2023/07/smiling-students-classroom-whiteboard-200x200-1.jpg"
                      alt="Smiling students learning"
                      className="w-[200px] h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Governments</h3>
                    <p className="text-gray-700 mb-4">
                      Training to provide interested migrants with the skills to help them thrive.
                    </p>
                    <Link
                      href="/partners/governments"
                      className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Row - Industry Partners & NET */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.navitas.com/wp-content/uploads/2023/07/group-smiling-professionals-office-200x200-1.jpg"
                      alt="group of smiling professionals in office"
                      className="w-[200px] h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Industry partners</h3>
                    <p className="text-gray-700 mb-4">
                      Build connections and expand your communities with our Professional Year Program.
                    </p>
                    <Link
                      href="/partners/industry-partners"
                      className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://www.navitas.com/wp-content/uploads/2023/07/child-student-reading-200x200-1.jpg"
                      alt="Young child student reading in school"
                      className="w-[200px] h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">NET</h3>
                    <p className="text-gray-700 mb-4">
                      Are you a not-for-profit organisation with an education focus? Partner with us.
                    </p>
                    <Link
                      href="/impact/navitas-education-trust"
                      className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Partners Section */}
        {partners.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover our valued partnerships that help us deliver exceptional educational experiences worldwide.
                </p>
              </div>
              
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C4008C] mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading partners...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {partners.map((partner) => (
                    <div key={partner._id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      {partner.image && (
                        <div className="mb-4">
                          <Image
                            src={`http://localhost:5000/${partner.image}`}
                            alt={partner.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-3">{partner.title}</h3>
                      <p className="text-gray-700 mb-4">{partner.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
