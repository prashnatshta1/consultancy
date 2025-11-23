import HeaderSection from "../../../components/sections/header";
import Footer from "../../../components/sections/footer";

export default function ModernSlaveryPage() {
  return (
    <>
      <HeaderSection />
     <main id="main">
        {/* Hero Section */}
<section
  className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("/images/impact/modernslavery1.jpg")`,
  }}
>
  <div className="absolute inset-0 bg-black/40">
    <div className="container mx-auto px-4 h-full flex items-center">
      <h1 className="text-5xl font-bold text-white">Modern Slavery</h1>
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
              <li className="before:content-['›'] before:mx-2 text-gray-900">Modern slavery</li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Human rights and modern slavery</h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Human rights and modern slavery has been identified as one of{" "}
                  <a href="#" className="text-teal-600 hover:underline">
                    our 12 priority Impact topics
                  </a>{" "}
                  due to the risk of its prevalence in the international education sector. We take our responsibilities
                  to identify and mitigate risks very seriously.
                </p>
                <h3 className="text-xl font-bold mt-6 mb-2">What is modern slavery?</h3>
                <p>
                  Modern slavery, also known as contemporary slavery or neo-slavery, refers to institutional slavery
                  that continues to exist in present day society. Modern slavery refers to situations where one person
                  has taken away another person's freedom so they can be exploited. Freedom is taken away using threats,
                  violence, coercion, abuse of power and/or deception, resulting in a person being unable to refuse or
                  leave the situation. Modern slavery is one of the most serious violations of human rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Slavery Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Modern Slavery Statement</h2>
                <p className="text-gray-700 mb-6">
                  We recently published our fourth Modern Slavery and Human Trafficking statement. Publishing a
                  statement that identifies and addresses the risks of modern slavery practices in our operations and
                  supply chains is a requirement of legislation in the UK and Australia
                </p>
                <a
                  href=""
                  target="_blank"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                  rel="noreferrer"
                >
                  Read our Modern Slavery Statement
                </a>
              </div>
              <div className="text-center">
                <img
                  src="/images/impact/modernslavery2.jpg"
                  alt="Human rights and modern slavery badge"
                  className="rounded-lg border border-gray-50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Student Information */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-4">Modern slavery information for students</h2>
                <div className="text-gray-700 mb-6 space-y-4">
                  <p>
                    Young people, including students, are at a higher risk of experiencing modern slavery. It is
                    important to stay informed and be aware of the signs of modern slavery or human trafficking, and to
                    know where you can get help if you or someone you know is at risk.
                  </p>
                  <p>
                    <a
                      href=""
                      target="_blank"
                      className="text-teal-600 hover:underline"
                      rel="noreferrer noopener"
                    >
                      Read our information sheet to learn more about modern slavery and international students.
                    </a>
                  </p>
                  <p>
                    If you are concerned about a potential modern slavery risk, please report it through our Modern
                    Slavery Reporting Portal.
                  </p>
                </div>
                <a
                  href=""
                  target="_blank"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors inline-block"
                  rel="noreferrer"
                >
                  Modern Slavery Reporting Portal
                </a>
              </div>
              <div className="text-center">
                <img
                  src="/images/impact/modernslavery3.jpg"
                  alt="Student information for modern slavery"
                  className="rounded-lg border border-gray-50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Priority Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-gray-700 space-y-4">
                <h2 className="text-3xl font-bold mb-4">
                  Why is Human Rights & Modern Slavery a priority for Navitas?
                </h2>
                <p>
                  Research has identified that migrants who rely on third parties (such as migration agents or
                  recruitment agents) are at higher risk of modern slavery, human trafficking and forced labour.
                  Evidence suggests trafficking is often facilitated using student, visitor/tourist or working holiday
                  visas.
                </p>
                <p>
                  We all need to be aware of the signs that indicate someone may be the victim of modern slavery or
                  human trafficking so that we can take appropriate action.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-3">What have we done so far?</h3>

                <div>
                  <h4 className="font-bold mb-2">Modern slavery training</h4>
                  <p>
                    Increased awareness on modern slavery and human trafficking among staff will help us to mitigate any
                    risks in our operations and supply chain. In 2023, a short modern slavery module was rolled out to
                    all staff in our global network of recruitment offices and all college or campus-based staff in
                    Australia. In 2024, the training will also be rolled out for our European and North American
                    divisions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Modern Slavery working group</h4>
                  <p>
                    Our <strong>Modern Slavery working group</strong> was formed to lead, support and progress Navitas
                    in the identification, assessment and mitigation of Modern Slavery risks to students during the
                    student life cycle across the global business. The group is led by our Group Risk & Assurance
                    Manager and has representation from across our divisions. It holds below responsibilities:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>to develop a Modern Slavery action plan</li>
                    <li>to share best practice across the group</li>
                    <li>to draft annual group Modern Slavery and Human Trafficking statement</li>
                    <li>to design and implement reporting systems</li>
                    <li>to develop and share information resources for students</li>
                    <li>to contribute in the development of training material for staff and agent awareness.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Education agents</h4>
                  <p>
                    Our education agents have been identified as one of the risk areas and we continue to work towards,
                    in areas including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>improving agent awareness on modern slavery and human trafficking risks</li>
                    <li>analysing trends through data on student behaviour and agents</li>
                    <li>
                      strengthening our agent monitoring systems to include consideration of modern slavery and human
                      trafficking risk indicators, such as the non-enrolment of a student
                    </li>
                    <li>ensuring that information relating to agent behaviour is aggregated and shared globally.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Learn more about our impact</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/impact"
                  className="bg-[#C4008C] text-white px-6 py-3 rounded-md font-semibold hover:brightness-90 transition-colors"
                >
                  Our impact
                </a>
                <a
                  href=""
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