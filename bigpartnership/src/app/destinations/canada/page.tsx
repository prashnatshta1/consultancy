import HeaderSection from "@/src/components/sections/header";
import Footer from "@/src/components/sections/footer";
import Link from "next/link";
import Image from "next/image";

export default function CanadaPage() {
  const institutions = [
    { name: "Western University Canada International College", logo: "https://www.navitas.com/wp-content/uploads/2025/11/WesternIC-Logo-257x193px.jpg", url: "https://www.westernic.ca/" },
    { name: "Fraser International College at Simon Fraser University", logo: "https://www.navitas.com/wp-content/uploads/2025/05/FIC-Logo-257x193px.jpg", url: "https://www.fraseric.ca/" },
    { name: "ICM at University of Manitoba", logo: "https://www.navitas.com/wp-content/uploads/2023/07/ICM-Logo-257x193px.jpg", url: "https://www.icmanitoba.ca/" },
    { name: "Toronto Metropolitan University International College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/Toronto-Metropolitan-University-International-College-Logo-257x193px.jpg", url: "https://www.torontomuic.ca/" },
    { name: "ULethbridge International College Calgary", logo: "https://www.navitas.com/wp-content/uploads/2023/07/ULICC-Logo-257x193px.jpg", url: "https://www.uicc.ca/" },
    { name: "Wilfrid Laurier International College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/WLIC-Logo-257x193px.jpg", url: "https://www.laurieric.ca/" },
    { name: "SAE Institute", logo: "https://www.navitas.com/wp-content/uploads/2023/07/SAE-Global-Logo-257x193px.jpg", url: "https://canada.sae.edu/" }
  ];

  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.navitas.com/wp-content/uploads/2023/07/toronto-skyline-1600x500-1.jpg')"}}>
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  Canada
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
              <li className="text-gray-900 font-medium">Canada</li>
            </ol>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Canada?</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Canada has a long tradition of welcoming people from around the globe. Today, it is one of the most popular destinations for international students. It also has one of the world's best standards of living and is famous for its breathtaking natural attractions, fascinating cities, and friendly people.
                </p>
                <p>
                  In Canada, students don't have to choose between urban life and proximity to the natural world – the two exist side by side. Students at our Canadian partner universities can enjoy snowy mountains, beautiful art galleries, ocean views, forest hikes, a world-class education, and all the conveniences contemporary cities have to offer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our offerings in Canada</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {institutions.map((institution, index) => (
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