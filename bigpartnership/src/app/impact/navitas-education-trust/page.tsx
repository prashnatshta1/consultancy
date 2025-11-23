import HeaderSection from "@/src/components/sections/header"
import Footer from "@/src/components/sections/footer"

export default function BigPartnershipEducationTrustPage() {
  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
          <section
  className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/images/child.jpg")',
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40 flex items-center">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl font-bold mb-4">bigPartnership Education Trust</h1>
        <p className="text-xl">
          Supporting education projects around the world.
        </p>
      </div>
    </div>
  </div>
</section>

  <div className="container mx-auto px-4 pt-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-blue-600 underline">
                  Home
                </a>
              </li>
              <li className="before:content-['›'] before:mx-2">
                <a href="/impact" className="hover:text-blue-600 underline">
                  Impact
                </a>
              </li>
              <li className="before:content-['›'] before:mx-2 text-gray-900">Navitas Education Trust</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Education creates change</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  The Navitas Education Trust funds education projects to help people gain better access to education,
                  creating positive far-reaching impact for many communities around the world. For the last 11 years, we
                  have partnered with forward-thinking and sustainability oriented organisations bringing education to
                  disadvantaged communities around the world.
                </p>
                <p>
                  In FY25, the Navitas Education Trust (NET) is supporting five incredible NET partners. Over the past
                  two years, we have supported more partners simultaneously than ever before in our eleven-year history.
                  Our partners inspire us, teach us, and impress us with their continued dedication to our shared
                  purpose of changing lives through education.
                </p>
                <p>
                  To be sure that we can give due attention to our continuing partnerships,{" "}
                  <strong>we will not be seeking new grant applications for FY26.</strong>
                </p>
                <p>
                  During this time, we look forward to supporting and learning from our existing partners and improving
                  the NET for the future. We also look forward to providing more storytelling and connection
                  opportunities between our current partners and our wider communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Join the community</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.navitas.com/wp-content/uploads/2025/03/Navitas-Impact-Report-FY24.pdf"
                  target="_blank"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                  rel="noreferrer"
                >
                  Read our Impact Report
                </a>
                <a
                  href="/contact"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Current partners and projects</h2>

            {/* Partner Spotlights */}
            <div className="max-w-5xl mx-auto space-y-12">
              {/* Classroom of Hope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Classroom of Hope</h3>
                  <p className="text-gray-700 mb-6">
                    Classroom of Hope builds schools in rural parts of developing countries. Our funding currently
                    supports the eco block school building project in Lombok Indonesia. So far, our funding has helped
                    to build 13 schools.
                  </p>
                  <a
                    href="https://classroomofhope.org/"
                    target="_blank"
                    className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    rel="noreferrer"
                  >
                    Visit website
                  </a>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://www.navitas.com/wp-content/uploads/2023/08/coh-logo-340x227-1.jpg"
                    alt="Classroom of Hope"
                    className="rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              {/* Indigo Foundation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Indigo Foundation</h3>
                  <p className="text-gray-700 mb-6">
                    Indigo Foundation is an innovative and independent community development organisation that works
                    with local community partners around the world to empower women and girls, improve education and
                    health outcomes, and defend human rights. Our funding will support the Advancement and Empowerment
                    Programs in India, including after-school tuition, tailoring and typing, and IT training and library
                    fund programs.
                  </p>
                  <a
                    href="https://www.indigofoundation.org/wordpress/"
                    target="_blank"
                    className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    rel="noreferrer"
                  >
                    Visit website
                  </a>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://www.navitas.com/wp-content/uploads/2023/08/indigo-logo-340x227-1.jpg"
                    alt="Indigo Foundation"
                    className="rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              {/* KOTO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">KOTO</h3>
                  <p className="text-gray-700 mb-6">
                    KOTO is a social enterprise that empowers at-risk and disadvantaged youth in Vietnam through its
                    holistic hospitality training program. Our funding will support the KOTO Hospitality Traineeship
                    Program for disadvantaged young people in Hanoi.
                  </p>
                  <a
                    href="https://www.koto.com.au/"
                    target="_blank"
                    className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                    rel="noreferrer"
                  >
                    Visit website
                  </a>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://www.navitas.com/wp-content/uploads/2023/08/koto-logo-340x227-1.jpg"
                    alt="Know One, Teach One"
                    className="rounded-lg border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our impact in FY24</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <p className="text-gray-700">new classrooms built</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">19</div>
                <p className="text-gray-700">remote education teachers supported</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">17.5t</div>
                <p className="text-gray-700">carbon reduced</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">8000</div>
                <p className="text-gray-700">students received education and safety services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Past Partners */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Past Navitas Education Trust partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <img
                src="https://www.navitas.com/wp-content/uploads/2025/08/CAMFED-logo-255x191-1.jpg"
                alt="CAMFED"
                className="w-full"
              />
              <img
                src="https://www.navitas.com/wp-content/uploads/2024/09/Adara-logo.jpg"
                alt="Adara"
                className="w-full"
              />
              <img
                src="https://www.navitas.com/wp-content/uploads/2024/09/CCF-logo.jpg"
                alt="Cambodian Children's Fund"
                className="w-full"
              />
              <img
                src="https://www.navitas.com/wp-content/uploads/2023/08/sun-books-logo-255x191-1.jpg"
                alt="Sun Books"
                className="w-full"
              />
              <img
                src="https://www.navitas.com/wp-content/uploads/2023/08/wlf-logo-255x191-1.jpg"
                alt="World Literacy Foundation"
                className="w-full"
              />
              <img
                src="https://www.navitas.com/wp-content/uploads/2025/08/VNF-logo-255x191-1.jpg"
                alt="Vietnam Foundation"
                className="w-full"
              />
              <img
                src="https://www.navitas.com/wp-content/uploads/2023/08/assisi-aid-logo-255x191-1.jpg"
                alt="Assisi Aid Projects"
                className="w-full"
              />
              <img
                src="https://www.navitas.com/wp-content/uploads/2023/04/chiedza-childcare-logo-255x191px-e1681705788103.jpg"
                alt="Chiedza Childcare Centre"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
