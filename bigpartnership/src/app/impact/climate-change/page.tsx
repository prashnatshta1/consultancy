import HeaderSection from "../../../components/sections/header";
import Footer from "../../../components/sections/footer";
import { Building2, BookOpen, Leaf, Car } from "lucide-react"



export default function ClimateChangePage() {
  return (
    <>
      <HeaderSection />
         <main id="main">
        {/* Hero Section */}
<section className="relative w-full h-[600px] bg-[url('/images/climate/climate1.jpg')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black/40">
    <div className="container mx-auto px-4 h-full flex items-center">
      <div>
        <h1 className="text-5xl font-bold text-white">Climate change</h1>
      </div>
    </div>
  </div>
</section>



        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-6 pb-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-teal-600 underline">
                  Home
                </a>
              </li>
              <li className="before:content-['›'] before:mx-2">
                <a href="/impact" className="hover:text-teal-600 underline">
                  Impact
                </a>
              </li>
              <li className="before:content-['›'] before:mx-2 text-gray-900">Climate change</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Climate change mitigation, resilience, and adaptation
              </h2>
              <div className="text-gray-700 space-y-4 text-center">
                <p>
                  Climate change mitigation is one of{" "}
                  <a href="#" className="text-teal-600 hover:underline">
                    our 12 priority Impact topics
                  </a>{" "}
                  at Navitas. We want to actively understand, manage, and build resilience for climate change impacts,
                  risks to our business, and more importantly, to the future of our communities. This includes
                  understanding our contribution to climate change, contributing to emissions reduction activities and
                  reducing our impact, alongside our key partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emissions Stats */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-8">Our FY23 emissions in metric tons</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-teal-600">
                    <Building2 size={48} />
                  </div>
                </div>
                <div className="text-5xl font-bold text-teal-600 mb-2">16</div>
                <p className="text-gray-700 text-sm">Scope 1 emissions</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-teal-600">
                    <BookOpen size={48} />
                  </div>
                </div>
                <div className="text-5xl font-bold text-teal-600 mb-2">5,938</div>
                <p className="text-gray-700 text-sm">Scope 2 emissions</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-teal-600">
                    <Leaf size={48} />
                  </div>
                </div>
                <div className="text-5xl font-bold text-teal-600 mb-2">34,886</div>
                <p className="text-gray-700 text-sm">Scope 3 emissions</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-teal-600">
                    <Car size={48} />
                  </div>
                </div>
                <div className="text-5xl font-bold text-teal-600 mb-2">17,871</div>
                <p className="text-gray-700 text-sm">International student travel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-4">Reporting our carbon emissions</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Our Climate Action Working Group was set up in early 2023 and had representation from all our
                    divisions. It has primarily focused on supporting the carbon emissions reporting work across our
                    global colleges, campuses, and offices.
                  </p>
                  <p>
                    Being able to report on our carbon emissions is a significant step forward and it allows us to start
                    the harder work of decarbonisation and risk mitigation. In FY23, we established a baseline emissions
                    report for our carbon emissions in FY22.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/images/climate/climate3.jpg"
                  alt="Student with laptop outdoors"
                  className="rounded-lg border border-gray-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="text-center">
                <img
                  src="/images/climate/climate2.jpg"
                  alt="Cyclist on bridge"
                  className="rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our action</h2>
                <div className="text-gray-700 space-y-4">
                  <p>
                    The next steps in our journey include getting our emissions process assured, setting our
                    decarbonisation targets, identifying and developing a management plan for climate risks, their
                    impacts (both actual and potential), opportunities, conducting our environmental scenario analysis,
                    and establishing a climate action plan.
                  </p>
                  <p>
                    We have initiated work on improving our agent emissions reporting and developing our Climate risks
                    and strategy this year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Learn more about our impact</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/impact"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                >
                  Our impact
                </a>
                <a
                  href="https://www.bigpartnership.com/wp-content/uploads/2025/03/bigPartnership-Impact-Report-FY24.pdf"
                  target="_blank"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                  rel="noreferrer"
                >
                  Our FY24 Impact Report
                </a>
                <a
                  href="/news"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                >
                  Impact news
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}