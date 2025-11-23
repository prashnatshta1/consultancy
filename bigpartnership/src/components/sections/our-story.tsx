import { PlayCircle } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
        {/* Left side: Video Player Placeholder */}
        <div className="w-full lg:w-3/5">
          <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-gray-200 shadow-md">
            <div className="flex h-full w-full items-center justify-center bg-black/10">
              <PlayCircle className="h-20 w-20 text-white/90 drop-shadow-md" strokeWidth={1} />
            </div>
            {/*
              NOTE: No video poster asset was provided.
              This is a static placeholder representing the video player.
              In a full implementation, this would likely contain a Next.js <Image> component
              for the poster and state to manage playing a video in a modal or inline.
            */}
          </div>
        </div>

        {/* Right side: Text Content */}
        <div className="w-full text-center lg:w-2/5 lg:text-left">
          <h2 className="text-[2rem] font-bold leading-tight text-[#333333]">
            Navitas: Our Story
          </h2>
          <p className="mt-4 text-lg leading-[1.6] text-[#333333]">
            Watch this video to learn the story behind Navitas and our history of
            transforming lives through education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;