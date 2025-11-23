import HeaderSection from "@/src/components/sections/header";
import Footer from "@/src/components/sections/footer";
import Link from "next/link";
import Image from "next/image";

export default function UKPage() {
  const institutions = [
    { name: "ARU College", logo: "https://www.navitas.com/wp-content/uploads/2025/05/ARUC-Logo-257x193px.jpg", url: "https://www.arucollege.com/" },
    { name: "Birmingham City University International College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/BCUIC-Logo-257x193px.jpg", url: "https://www.bcuic.navitas.com/" },
    { name: "Brunel University London Pathway College", logo: "https://www.navitas.com/wp-content/uploads/2025/05/Brunel-University-London-Pathway-College-Logo-257x193px.jpg", url: "https://pathway.brunel.ac.uk/" },
    { name: "University of Hertfordshire International College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/HIC-Logo-257x193px.jpg", url: "https://www.hic.navitas.com/" },
    { name: "ICP at University of Portsmouth", logo: "https://www.navitas.com/wp-content/uploads/2023/07/ICP-Logo-257x193px.jpg", url: "https://www.icp.navitas.com/" },
    { name: "International College Robert Gordon University", logo: "https://www.navitas.com/wp-content/uploads/2023/07/ICRGU-Logo-257x193px.jpg", url: "https://www.icrgu.navitas.com/" },
    { name: "Keele University International College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/KUIC-Logo-257x193px.jpg", url: "https://kuic.keele.ac.uk/" },
    { name: "Manchester Metropolitan University International College", logo: "https://www.navitas.com/wp-content/uploads/2024/11/MMUIC-Logo-257x193px.jpg", url: "https://www.mmu.ac.uk/international/college" },
    { name: "The College at Swansea University", logo: "https://www.navitas.com/wp-content/uploads/2023/07/TCSU-Logo-257x193px.jpg", url: "https://www.swansea.ac.uk/the-college/" },
    { name: "UA92 Manchester", logo: "https://www.navitas.com/wp-content/uploads/2023/07/UA92-Logo-257x193px.jpg", url: "https://global.ua92.ac.uk/" },
    { name: "University of Plymouth International College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/UPIC-Logo-257x193px.jpg", url: "https://www.upic.navitas.com/" }
  ];

  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.navitas.com/wp-content/uploads/2023/07/london-bridge-1600x500-1.jpg')"}}>
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  United Kingdom
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
              <li className="text-gray-900 font-medium">United Kingdom</li>
            </ol>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why the UK?</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  The UK's centuries-old tradition of higher education has produced some of the world's most famous leaders and thinkers. UK universities sit consistently at the top of the world's rankings and a UK qualification is sure to open doors to any future students dream of. UK universities offer a broad range of programs and specialisations, as well as opportunities to gain real-world experience while students complete their degrees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our pathway colleges in the United Kingdom</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {institutions.map((institution, index) => (
                <Link
                  key={index}
                  href={institution.url}
                  target="_blank"
                  className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow group"
                >
                  <div className="relative">
                    <Image
                      src={institution.logo}
                      alt={institution.name}
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