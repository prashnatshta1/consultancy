import HeaderSection from "@/src/components/sections/header";
import Footer from "@/src/components/sections/footer";
import Link from "next/link";
import Image from "next/image";

export default function NewZealandPage() {
  const institutions = [
    { name: "CCEL Christchurch College of English", logo: "https://www.navitas.com/wp-content/uploads/2024/11/CCEL-Logo-257x193px-1.jpg", url: "https://www.ccel.co.nz/" },
    { name: "SAE Creative Media Institute", logo: "https://www.navitas.com/wp-content/uploads/2023/07/SAE-Aus-Logo-257x193px.jpg", url: "https://auckland.sae.edu/" },
    { name: "UC International College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/UCIC-Logo-257x193px.jpg", url: "https://www.ucic.ac.nz/" },
    { name: "University of Waikato College", logo: "https://www.navitas.com/wp-content/uploads/2023/07/UWC-Logo-257x193px.jpg", url: "https://college.waikato.ac.nz/" },
    { name: "Women & Leadership New Zealand", logo: "https://www.navitas.com/wp-content/uploads/2023/09/WLNZ-Logo-257x193px.jpg", url: "https://womenandleadership.co.nz/" }
  ];

  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.navitas.com/wp-content/uploads/2023/07/new-zealand-mountain-scenery-1600x500-1.jpg')"}}>
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  New Zealand
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
              <li className="text-gray-900 font-medium">New Zealand</li>
            </ol>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why New Zealand?</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  New Zealand is one of the world's most peaceful countries, with abundant natural beauty and world-class universities. With only 5 million inhabitants, New Zealand is the perfect place for students who want to find the balance between peace and quiet and contemporary city life. New Zealand's universities offer highly-reputable and sought-after qualifications that are recognised around the world.
                </p>
                <p>
                  All of New Zealand's universities are ranked among the top 3% of universities in the world*. Qualifications from a New Zealand institution are highly sought after. Students who complete their university studies in New Zealand emerge as critical thinkers, confident leaders, and creative innovators.
                </p>
                <p className="text-sm italic">
                  *QS World University Rankings
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our offerings in New Zealand</h2>
            
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