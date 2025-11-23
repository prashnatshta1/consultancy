import HeaderSection from "@/src/components/sections/header";
import Footer from "@/src/components/sections/footer";
import Link from "next/link";
import Image from "next/image";

export default function USAPage() {
  const offerings = [
    {
      name: "Queens College Global Student Success Program",
      logo: "https://www.navitas.com/wp-content/uploads/2023/07/Queens-College-GSSP-Logo-257x193px.jpg",
      url: "https://www.queensgssp.com/"
    },
    {
      name: "SAE Institute",
      logo: "https://www.navitas.com/wp-content/uploads/2023/07/SAE-Global-Logo-257x193px.jpg",
      url: "https://usa.sae.edu/"
    }
  ];

  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.navitas.com/wp-content/uploads/2023/07/new-york-city-street-1600x500-1.jpg')"}}>
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  USA
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
              <li className="text-gray-900 font-medium">USA</li>
            </ol>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why the USA?</h2>
              <div className="text-gray-700">
                <p>
                  The United States has long been the world's favourite study destination. Hundreds of thousands of international students have travelled to the US to achieve a high-quality education and encounter boundless opportunity. Students who study in the US enjoy the most diverse education options in the world, with thousands of subjects and programs to choose from. The US is also an excellent destination for on-campus work opportunities, internships, and professional training.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our offerings in the USA</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {offerings.map((institution, index) => (
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
        <section className="py-16 bg-[#C4008C] text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold">Find out more</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="bg-white text-[#C4008C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Search courses
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-[#C4008C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact us
                </Link>
                <Link
                  href="/apply"
                  className="bg-white text-[#C4008C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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