import HeaderSection from "@/src/components/sections/header";
import Footer from "@/src/components/sections/footer";
import Link from "next/link";
import Image from "next/image";

export default function SingaporePage() {
  const institutions = [
    { name: "Curtin Singapore", logo: "https://www.navitas.com/wp-content/uploads/2023/07/Curtin-Singapore-Logo-257x193px.jpg", url: "https://curtin.edu.sg/" }
  ];

  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.navitas.com/wp-content/uploads/2023/07/singapore-city-1600x500-1.jpg')"}}>
          <div className="absolute inset-0 bg-black/60">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  Singapore
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
              <li className="text-gray-900 font-medium">Singapore</li>
            </ol>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Singapore?</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Students explore the country where cultures blend and opportunities abound when they study in Singapore. Despite the country's small size, Singapore and its universities are increasingly recognised as world leaders in research and innovation. bigPartnership students in Singapore earn an Australian qualification from Curtin University's Singapore campus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our offering in Singapore</h2>
            
            <div className="flex justify-center">
              <Link
                href={institutions[0].url}
                target="_blank"
                className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow group max-w-md"
              >
                <div className="relative">
                  <Image
                    src={institutions[0].logo}
                    alt={institutions[0].name}
                    width={257}
                    height={193}
                    className="w-full h-40 object-contain mb-3"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-6 bg-[#C4008C] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">→</span>
                    </div>
                  </div>
                </div>
              </Link>
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
                  Search programs
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