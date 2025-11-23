import HeaderSection from "@/src/components/sections/header";
import Footer from "@/src/components/sections/footer";
import Link from "next/link";
import Image from "next/image";

export default function AustraliaPage() {
  const offerings = [
    {
      category: "Earn a qualification",
      institutions: [
        { name: "ACAP University College", logo: "https://www.navitas.com/wp-content/uploads/2024/11/ACAP-Logo-257x193px.jpg", url: "https://www.acap.edu.au/" },
        { name: "Charles Sturt University Sydney and Melbourne", logo: "https://www.navitas.com/wp-content/uploads/2024/06/CSU-SYDNEY-MELBOURNE-Logo-257x193px.jpg", url: "https://sydneymelbourne.csu.edu.au/" },
        { name: "Curtin College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/Curtin-College-Logo-257x193px.jpg", url: "https://www.curtincollege.edu.au/" },
        { name: "Deakin College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/Deakin-College-Logo-257x193px.jpg", url: "https://www.deakincollege.edu.au/" },
        { name: "Edith Cowan College", logo: "https://www.navitas.com/wp-content/uploads/2025/05/ECC-Logo-257x193px.jpg", url: "https://www.edithcowancollege.edu.au/" },
        { name: "Eynesbury College", logo: "https://www.navitas.com/wp-content/uploads/2025/11/Eynesbury-College-Logo-257x193px.jpg", url: "https://www.eynesbury.edu.au/" },
        { name: "Griffith College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/Griffith-College-Logo-257x193px.jpg", url: "https://www.griffithcollege.edu.au/" },
        { name: "La Trobe College Australia", logo: "https://www.navitas.com/wp-content/uploads/2023/07/LTCA-Logo-257x193px.jpg", url: "https://www.latrobecollegeaustralia.edu.au/" },
        { name: "La Trobe University Australia", logo: "https://www.navitas.com/wp-content/uploads/2023/07/La-Trobe-University-Australia-Logo-257x193px.jpg", url: "https://www.latrobe.edu.au/sydney" },
        { name: "SAE University College", logo: "https://www.navitas.com/wp-content/uploads/2024/06/SAE-UC-Logo-257x193px.jpg", url: "https://sae.edu.au/" },
        { name: "SIBT at Western Sydney University", logo: "https://www.navitas.com/wp-content/uploads/2023/07/SIBT-Logo-257x193px.jpg", url: "https://www.sibt.nsw.edu.au/" },
        { name: "Taylors College at The University of Sydney", logo: "https://www.navitas.com/wp-content/uploads/2023/07/Taylors-Logo-257x193px.jpg", url: "https://www.taylorssydney.edu.au/" },
        { name: "UC College at the University of Canberra", logo: "https://www.navitas.com/wp-content/uploads/2023/07/UC-College-Logo-257x193px.jpg", url: "https://www.canberra.edu.au/uc-college" },
        { name: "Western Sydney University International College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/WSUIC-Logo-257x193px.jpg", url: "https://internationalcollege.westernsydney.edu.au/" },
        { name: "Western Sydney University", logo: "https://www.navitas.com/wp-content/uploads/2023/07/WSUSCC-Logo-257x193px.jpg", url: "https://www.westernsydney.edu.au/city" }
      ]
    },
    {
      category: "Learn English",
      institutions: [
        { name: "University of South Australia Centre for English Language", logo: "https://www.navitas.com/wp-content/uploads/2023/07/CELUSA-Logo-257x193px.jpg", url: "https://international.unisa.edu.au/pre-entry-and-pathway-programs/celusa/" },
        { name: "Edith Cowan College", logo: "https://www.navitas.com/wp-content/uploads/2025/05/ECC-Logo-257x193px.jpg", url: "https://www.edithcowancollege.edu.au/courses/english" },
        { name: "Eynesbury College", logo: "https://www.navitas.com/wp-content/uploads/2025/11/Eynesbury-College-Logo-257x193px.jpg", url: "https://www.eynesbury.edu.au/" },
        { name: "Hawthorn Melbourne", logo: "https://www.navitas.com/wp-content/uploads/2023/07/Hawthorn-Melbourne-Logo-257x193px.jpg", url: "https://www.hawthornenglish.edu.au/" },
        { name: "La Trobe College Australia", logo: "https://www.navitas.com/wp-content/uploads/2023/07/LTCA-Logo-257x193px.jpg", url: "https://www.latrobecollegeaustralia.edu.au/" },
        { name: "bigPartnership English", logo: "https://www.navitas.com/wp-content/uploads/2024/02/Navitas-English-Logo-257x193px.jpg", url: "https://www.navitasenglish.edu.au/" },
        { name: "bigPartnership English Test Centre", logo: "https://www.navitas.com/wp-content/uploads/2025/05/NETC-Logo-257x193px.jpg", url: "https://www.navitastesting.com/" }
      ]
    },
    {
      category: "Employability training",
      institutions: [
        { name: "bigPartnership Skilled Futures", logo: "https://www.navitas.com/wp-content/uploads/2023/07/Navitas-Skilled-Futures-Logo-257x193px.jpg", url: "https://navitas-skilled-futures.com.au/" },
        { name: "Women & Leadership Australia", logo: "https://www.navitas.com/wp-content/uploads/2023/09/WLA-Logo-257x193px.jpg", url: "https://www.wla.edu.au/" }
      ]
    }
  ];

  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.navitas.com/wp-content/uploads/2023/07/sydney-harbor-1600x500-1.jpg')"}}>
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  Australia
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/destinations" className="text-gray-600 hover:text-gray-900">Destinations</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Australia</li>
            </ol>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Australia?</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  With a unique teaching style that encourages students to be innovative and creative, Australia is one of the world's favourite study destinations.
                </p>
                <p>
                  In Australia, students can choose from university foundation programs, International Year One, direct university entry, English language study and qualifications, employability programs and internship experience, creative media higher education, professional education, and more.
                </p>
                <p>
                  In order to study in Australia, you will be required to demonstrate that studying in Australia is the primary reason for applying for your student visa. Please check the <strong><Link href="#" className="text-[#C4008C] hover:underline">Genuine Student Assessment information</Link></strong> criteria and guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our offerings in Australia</h2>
            
            {offerings.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">{category.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {category.institutions.map((institution, index) => (
                    <Link
                      key={index}
                      href={institution.url}
                      target="_blank"
                      className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow group"
                    >
                      <div className="relative">
                        <Image
                          src={institution.logo}
                          alt={institution.name}
                          width={257}
                          height={193}
                          className="w-full h-32 object-contain mb-3"
                        />
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-6 h-6 bg-[#C4008C] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Find out more</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/apply-to-study"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                >
                  Search courses
                </Link>
                <Link
                  href="/contact-us"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                >
                  Contact us
                </Link>
                <Link
                  href="/apply-to-study"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                >
                  Apply today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}