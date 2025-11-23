import HeaderSection from "@/src/components/sections/header"
import Footer from "@/src/components/sections/footer"
import Link from "next/link"

export default function ApplyToStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSection />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.navitas.com/wp-content/uploads/2023/07/student-leaning-wall-1600x500-1.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <h1 className="text-5xl font-bold text-white">Apply to study</h1>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container mx-auto px-6 py-6">
          <nav aria-label="Breadcrumb" className="flex gap-2">
            <Link href="/" className="text-teal-700 hover:underline">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="#" className="text-teal-700 hover:underline">
              Study
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-900">Apply to study</span>
          </nav>
        </div>

        {/* How to Apply Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">How to apply</h2>
              <p className="text-gray-700 mb-4">
                To apply to study at a bigPartnership college or campus, you can either go through an{" "}
                <strong>education agent</strong> or <strong>apply directly</strong> through the college and campus.
              </p>

              {/* Using an Education Agent */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Using an education agent</h3>
                <p className="text-gray-700 mb-4">
                  bigPartnership colleges and campuses have partnered with international education agents in many
                  countries and cities throughout the world. As an international student, you can choose to use an
                  education agent to assist you in applying to a bigPartnership college or campus, supporting your visa
                  application and travel requirements.
                </p>
                <p className="text-gray-700 mb-6">
                  The role of a bigPartnership education agent is to provide information about our courses and assist
                  you in making the right education choices. All our authorised agents have a signed agreement and are
                  subject to a rigorous application process and ongoing monitoring.
                </p>
                <a
                  href="#"
                  className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors"
                >
                  Find an agent
                </a>
              </div>

              {/* Applying Directly */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Applying directly</h3>
                <p className="text-gray-700 mb-6">
                  All our colleges and campuses are happy to accept applications directly from students. It is
                  recommended that prior to submitting your application you make certain that you meet the required
                  academic and English language entry requirements, if applicable.
                </p>
                <a
                  href="#"
                  className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors"
                >
                  Direct application
                </a>
              </div>

              {/* Australian Immigration Advice */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Australian immigration advice or assistance</h3>
                <p className="text-gray-700 mb-4">
                  If you plan on seeking immigration advice or assistance, we recommend you use a migration agent who is
                  a registered member from the Office of the Migration Registration Authourity (OMARA). OMARA registered
                  agents must meet high professional standards and their conduct is regulated, including the fees they
                  are allowed to charge.
                </p>
                <p className="text-gray-700 mb-4">
                  Search for an OMARA registered migration agent here –{" "}
                  <a
                    href="https://portal.mara.gov.au/search-the-register-of-migration-agents/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-teal-700 hover:underline font-semibold"
                  >
                    Register of Migration Agents
                  </a>
                </p>
                <p className="text-gray-700 mb-6">
                  If you wish to use an unregistered agent outside of Australia, ensure you understand what you can
                  reasonably expect from them and know your options if the agent acts incompetently, dishonestly or
                  fraudulently. If you suspect an unregistered migration agent is engaging in criminal behaviour, you
                  should report them to your local law enforcement authority and inform your local immigration office.
                </p>

                <h4 className="text-xl font-bold mt-8 mb-3">Information for education agents</h4>
                <p className="text-gray-700 mb-4">
                  You can submit applications on behalf of a student for most colleges via the{" "}
                  <a
                    href="https://partner.studylink.com/partner/login/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-teal-700 hover:underline font-semibold"
                  >
                    StudyLink Connect Partner Portal
                  </a>
                  .
                </p>
                <p className="text-gray-700">
                  Videos to support you using the Agent Portal are on the{" "}
                  <a
                    href="https://www.youtube.com/channel/UCdKPYrE1DPHVYbw9L0yvPqA/videos"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-teal-700 hover:underline font-semibold"
                  >
                    StudyLink YouTube channel
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
