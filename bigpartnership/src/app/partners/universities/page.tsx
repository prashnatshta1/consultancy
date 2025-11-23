import HeaderSection from "../../../components/sections/header"
import Footer from "../../../components/sections/footer"
import { Globe, Users, MapPin, Briefcase } from "lucide-react"

export default function UniversitiesPage() {
  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
       <section className="relative w-full h-[600px] bg-[url('/images/university/university.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/40">
    <div className="container mx-auto px-4 h-full flex items-center">
      <div>
        <h1 className="text-5xl font-bold text-white">Universities</h1>
      </div>
    </div>
  </div>
</section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-teal-600 underline">
                  Home
                </a>
              </li>
              <li className="before:content-['>'] before:mx-2">
                <a href="/partners" className="hover:text-teal-600 underline">
                  Partners
                </a>
              </li>
              <li className="before:content-['>'] before:mx-2 text-gray-900">Universities</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Take your offerings to the world</h2>
              <p className="text-gray-700 text-lg">
                We partner with universities to facilitate pathway programs, global campuses, hosting services for
                international staff, and more. We are a highly flexible and experienced provider, sharing our global
                resources, expertise, and capabilities to increase your institution's international reach.
              </p>
              <a
                href="/contact"
                className="bg-[#C4008C] text-white px-6 py-3 rounded font-semibold hover:brightness-90 inline-block mt-8"
              >
                Partner with us
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Take your offerings to the world</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <Globe className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">36</div>
                <p className="text-gray-600">countries of operation</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">340+</div>
                <p className="text-gray-600">global recruitment staff</p>
              </div>
              <div className="text-center">
                <MapPin className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">19</div>
                <p className="text-gray-600">recruitment offices across key markets</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">2,000</div>
                <p className="text-gray-600">global agent partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Alternating Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-4">Pathways</h2>
                <p className="text-gray-700">
                  Pathway programs are purposefully designed for international and domestic learners. Capitalising on
                  your strengths, we supplement your products and services with our global resources to enable partners
                  to achieve their internationalisation goals.
                </p>
              </div>
              <img
                src="/images/university/university1.jpg"
                alt="Students"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <img
                src="/images/university/university2.jpg"
                alt="Campus"
                className="rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">Global campuses</h2>
                <p className="text-gray-700">
                  Our comprehensive campus management services cover all aspects of the student lifecycle. We leverage
                  our experience and advanced suite of products to provide an unmatched student experience and enhance
                  our partner's brand to significantly higher levels.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-4">Unparalleled global footprint</h2>
                <p className="text-gray-700">
                  With global recruitment capabilities and expert staff in diverse locations around the world, we offer
                  our university partners a worldwide network of opportunity.
                </p>
              </div>
              <img
                src="/images/university/university3.jpg"
                alt="Global network"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <img
                src="/images/university/university4.jpg"
                alt="Office"
                className="rounded-lg shadow-md"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">Hosting services</h2>
                <p className="text-gray-700 mb-6">
                  Hosting Services are a value-add support service we provide for our university partners seeking to
                  develop their in-market presence offshore.
                </p>
                <a
                  href="#"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded font-semibold hover:brightness-90 inline-block"
                >
                  Read hosting services guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold">Learn more</h2>
              <div className="flex gap-4">
                <a
                  href="/about"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded font-semibold hover:brightness-90"
                >
                  What we do
                </a>
                <a
                  href="/contact"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded font-semibold hover:brightness-90"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
