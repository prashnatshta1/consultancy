import HeaderSection from "@/src/components/sections/header";
import Footer from "@/src/components/sections/footer";
import Link from "next/link";
import Image from "next/image";

export default function DestinationsPage() {
  const destinations = [
    { name: "Australia", image: "https://www.navitas.com/wp-content/uploads/2023/07/sydney-harbor-239x159-1.jpg", alt: "Sydney Harbour and Sydney Opera House", href: "/destinations/australia" },
    { name: "Canada", image: "https://www.navitas.com/wp-content/uploads/2023/07/toronto-skyline-239x159-1.jpg", alt: "Toronto skyline", href: "/destinations/canada" },
    { name: "Germany", image: "https://www.navitas.com/wp-content/uploads/2023/07/leipzig-city-239x159-1.jpg", alt: "Leipzig city fountain and buildings", href: "/destinations/germany" },
    { name: "Indonesia", image: "https://www.navitas.com/wp-content/uploads/2024/02/indonesia-bridge-239x159px.jpg", alt: "Bridge in Indonesia at night", href: "/destinations/indonesia" },
    { name: "Netherlands", image: "https://www.navitas.com/wp-content/uploads/2023/07/netherlands-canal-239x159-1.jpg", alt: "Netherlands canal and buildings", href: "/destinations/netherlands" },
    { name: "New Zealand", image: "https://www.navitas.com/wp-content/uploads/2023/07/new-zealand-mountain-scenery-239x159-1.jpg", alt: "New Zealand mountains and lake", href: "/destinations/new-zealand" },
    { name: "Singapore", image: "https://www.navitas.com/wp-content/uploads/2023/07/singapore-city-239x159-1.jpg", alt: "Singapore cityscape at sunset", href: "/destinations/singapore" },
    { name: "Sri Lanka", image: "https://www.navitas.com/wp-content/uploads/2023/07/colombo-city-239x159-1.jpg", alt: "Colombo city at sunset", href: "/destinations/sri-lanka" },
    { name: "UAE", image: "https://www.navitas.com/wp-content/uploads/2023/07/dubai-cityscape-239x159-1.jpg", alt: "Dubai beach and cityscape", href: "/destinations/uae" },
    { name: "UK", image: "https://www.navitas.com/wp-content/uploads/2023/07/london-bridge-239x159-1.jpg", alt: "London bridge and river", href: "/destinations/uk" },
    { name: "USA", image: "https://www.navitas.com/wp-content/uploads/2023/07/new-york-city-street-239x159-1.jpg", alt: "New York City street and bridge", href: "/destinations/usa" }
  ];

  return (
    <>
      <HeaderSection />
      <main id="main">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.navitas.com/wp-content/uploads/2025/11/city-collage-1125-1600x500-1.jpg')"}}>
          <div className="absolute inset-0 bg-black/50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  Study destinations
                </h1>
                <p className="text-xl text-white/90">
                  Choose from regions around the world
                </p>
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
              <li><Link href="/study" className="text-gray-600 hover:text-gray-900">Study</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Destinations</li>
            </ol>
          </nav>
        </div>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg">
                Study at esteemed universities and colleges in countries across the globe with Navitas: the UK, the USA, Canada, Australia, the Netherlands, Germany, Singapore, New Zealand, UAE, and Sri Lanka. With a range of flexible entry points, diverse campuses, and hundreds of program options to choose from, Navitas caters to the needs of every student.
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Global study destinations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
                <Link
                  key={index}
                  href={destination.href}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="relative">
                    <Image
                      src={destination.image}
                      alt={destination.alt}
                      width={239}
                      height={159}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 bg-[#C4008C] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">→</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border border-t-0">
                    <h3 className="font-semibold text-lg text-center py-3">{destination.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}