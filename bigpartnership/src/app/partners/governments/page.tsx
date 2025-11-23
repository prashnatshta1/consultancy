import HeaderSection from "../../../components/sections/header"
import Footer from "../../../components/sections/footer"
import { CheckCircle2, Users, Briefcase } from "lucide-react"

export default function GovernmentsPage() {
  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
           <section className="relative w-full h-[600px] bg-[url('/images/goverment/government.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/40">
    <div className="container mx-auto px-4 h-full flex items-center">
      <div>
        <h1 className="text-5xl font-bold text-white">Governments</h1>
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
              <li className="before:content-['>'] before:mx-2 text-gray-900">Governments</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Trusted delivery partner</h2>
              <p className="text-gray-700 text-lg">
                We have a strong reputation and capability in the delivery of government services. We are experienced in
                tender development and grant submissions, with relationships across differing levels of government and
                public sector departments.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why bigPartnership?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <CheckCircle2 className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">25 years of industry experience</h3>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Training delivered to over 300,000 learners</h3>
              </div>
              <div className="text-center">
                <Briefcase className="w-16 h-16 text-teal-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Diverse and highly skilled staff</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our services</h2>
                <p className="text-gray-700 mb-4">
                  We offer a wide range of services with the capability to tailor a program to your needs. Some of our
                  current offerings include:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>Adult Migrant English Program (AMEP) for migrants and refugees
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>Skills for Education and Employment (SEE) for job seekers
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/goverment/government1.jpg"
                  alt="Women learning"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skilled Futures */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-6">bigPartnership Skilled Futures</h2>
                <p className="text-gray-700 mb-4">
                  For the past 25 years, we have supported over 250,000 migrants and refugees in their journey to
                  building better futures by improving their literacy, numeracy, and digital skills.
                </p>
                <p className="text-gray-700 mb-6">
                  We care about enabling people to live their best life. We believe everyone should have the skills they
                  need to walk into a better future.
                </p>
                <a
                  href=""
                  className="bg-[#C4008C] text-white px-6 py-3 rounded font-semibold hover:brightness-90 inline-block"
                >
                  Visit website
                </a>
              </div>
              <div>
                <img
                  src="/images/goverment/government2.jpg"
                  alt="Skilled Futures"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Government Submissions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Government Submissions</h2>
              <p className="text-gray-700 max-w-4xl mx-auto">
                We work closely with governments to ensure the best policies are in place to support our students and
                sector. We actively contribute to major policy discussions and reforms across education and migration
                policy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-teal-700 text-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Modernising and Strengthening TEQSA Powers</h3>
                <p className="text-sm">17 October 2025</p>
              </div>
              <div className="bg-teal-700 text-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">TEQSA fees and charges consultation</h3>
                <p className="text-sm">2 October 2023</p>
              </div>
              <div className="bg-teal-700 text-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Support for students policy consultation</h3>
                <p className="text-sm">15 September 2023</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
