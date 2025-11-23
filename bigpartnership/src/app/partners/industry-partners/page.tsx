import HeaderSection from "../../../components/sections/header"
import Footer from "../../../components/sections/footer"
import { Sparkles, Smile, GraduationCap } from "lucide-react"

export default function IndustryPartnersPage() {
  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
       <section className="relative bg-[url('/images/industry/industry.jpg')] bg-cover bg-center bg-no-repeat h-[500px]">
  <div className="absolute inset-0 bg-black/30">
    <div className="container mx-auto px-4 h-full flex items-center">
      <div>
        <h1 className="text-5xl font-bold text-white mb-2">Industry partners</h1>
        <p className="text-2xl text-white">Leaders in industry partnership</p>
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
              <li className="before:content-['>'] before:mx-2 text-gray-900">Industry partners</li>
            </ol>
          </nav>
        </div>

        {/* Why Partner With Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why partner with us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <Sparkles className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Established reputation in industry, leadership, and education</h3>
              </div>
              <div className="text-center">
                <Smile className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Commitment to creating a positive social impact</h3>
              </div>
              <div className="text-center">
                <GraduationCap className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold">High student outcomes and dedication to the student experience</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Development */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">Leadership development</h2>
                <p className="text-gray-700 mb-4">
                  For almost 20 years, Women & Leadership Australia has been championing equity and empowering leaders
                  in every aspect of life. They deliver high-impact, applied leadership development opportunities for
                  individuals, organisations and schools.
                </p>
                <div className="space-y-3 mb-6">
                  <a href="" className="text-[#C4008C] hover:underline font-semibold block">
                    Visit Women & Leadership Australia →
                  </a>
                  <a
                    href=""
                    className="text-[#C4008C] hover:underline font-semibold block"
                  >
                    Visit Women & Leadership New Zealand →
                  </a>
                </div>
              </div>
              <div className="border border-gray-300 rounded-lg p-6 bg-white">
                <img
                  src="/images/industry/industry1.jpg"
                  alt="Women & Leadership logos"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
