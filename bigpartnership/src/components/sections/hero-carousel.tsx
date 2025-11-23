"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Pause, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";

const slides = [
  {
    heading: "Introducing bigPartnership Advantage!",
    subheading:
      "A refreshed, student-focused repositioning of bigPartnership’ pathway programs.",
    cta: "Gain the bigPartnership Advantage",
    ctaLink: "/study/advantage/",
    image: "/images/firstimg.jpg",
  },
  {
    heading: "Read our FY24 Impact Report",
    subheading:
      "With more data, stories, and progress than ever before, we are delighted to publish our FY24 Impact Report!",
    cta: "Read the Report",
    ctaLink: "#",
    image: "/images/secondimg.jpg",
  },
  {
    heading: "Global education provider",
    subheading:
      "bigPartnership connects students, agents, universities, and industry to an exceptional international higher education experience.",
    cta: "Find out more",
    ctaLink: "#",
    image: "/images/thirdimg.jpg",
  },
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const togglePlay = () => {
    if (isPlaying) autoplay.current.stop();
    else autoplay.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <Carousel setApi={setApi} plugins={[autoplay.current]} className="w-full h-full">
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div
                className="w-full h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative text-center text-white px-6 max-w-3xl">
                  <h1 className="text-3xl lg:text-5xl font-bold">{slide.heading}</h1>
                  <p className="mt-4 text-base lg:text-lg">{slide.subheading}</p>
                  <a
                    href={slide.ctaLink}
                    className="inline-block mt-6 px-6 py-3 bg-[#00A99D] hover:bg-[#008f87] text-white rounded-md font-semibold transition"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-transparent hover:bg-white/20 w-12 h-12 rounded-full" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-transparent hover:bg-white/20 w-12 h-12 rounded-full" />

        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-4">
          <button onClick={togglePlay} className="text-white p-2">
            {isPlaying ? <Pause className="size-6" /> : <Play className="size-6" />}
          </button>

          <div className="flex gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
