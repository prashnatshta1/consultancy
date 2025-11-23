import HeaderSection from "../../../components/sections/header"
import Footer from "../../../components/sections/footer"
import { Building2, BookOpen, Users } from "lucide-react"
import SearchOptions from "@/src/components/sections/search-options"

export default function SchoolCounsellorsPage() {
  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
                 <section className="relative w-full h-[600px] bg-[url('/images/counseller/counseller.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/40">
    <div className="container mx-auto px-4 h-full flex items-center">
      <div>
        <h1 className="text-5xl font-bold text-white">School Counsellers</h1>
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
              <li className="before:content-['>'] before:mx-2 text-gray-900">School counsellors</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                We lead students to success in their first year of university abroad.
              </h2>
              <div className="text-gray-700 space-y-4 text-lg">
                <p>
                  From the beginning, our passion has been connecting students to a personalised education experience.
                  We understand that the range of educational needs is as varied as our range of students. That's why we
                  offer options for every study goal.
                </p>
                <p>
                  We bring a wider range of international higher education opportunities to a wider range of students
                  around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
            <SearchOptions />

        {/* Secondary Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="flex gap-6">
                <img
                  src="/images/counseller/counseller1.jpg"
                  alt="counsellor smiling"
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Chat to us</h3>
                  <p className="text-gray-700 mb-4">
                    Find a team member in your region who can share the latest news and opportunities for your students.
                  </p>
                  <a
                    href="/contact"
                    className="bg-[#C4008C] text-white px-4 py-2 rounded font-semibold hover:brightness-90 inline-block"
                  >
                    Contact us
                  </a>
                </div>
              </div>
              <div className="flex gap-6">
                <img
                  src="/images/counseller/counseller2.jpg"
                  alt="Destinations"
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Our destinations</h3>
                  <p className="text-gray-700 mb-4">
                    Show your students the diverse range of locations they can choose from.
                  </p>
                  <a
                    href="/study/destinations"
                    className="bg-[#C4008C] text-white px-4 py-2 rounded font-semibold hover:brightness-90 inline-block"
                  >
                    Explore destinations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Selling Points */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <Building2 className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Take your pick</h3>
                <p className="text-gray-700">Over 38 universities to choose from</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Study your way</h3>
                <p className="text-gray-700">Enjoy flexible entry requirements</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Community first</h3>
                <p className="text-gray-700">Join our global team of learners</p>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold">Learn more</h2>
              <div className="flex gap-4">
                <a
                  href="/study/courses"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded font-semibold hover:brightness-90"
                >
                  Search courses
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
