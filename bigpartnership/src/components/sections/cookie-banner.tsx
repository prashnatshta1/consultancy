"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-[9999] w-11/12 max-w-[400px] bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 ease-in-out ${
        showBanner
          ? "translate-y-0 opacity-100"
          : "translate-y-[calc(100%+2rem)] opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      aria-hidden={!showBanner}
    >
      <button
        onClick={handleClose}
        className="absolute top-3 right-5 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Close cookie consent"
      >
        <span className="text-3xl font-light leading-none" aria-hidden="true">&times;</span>
      </button>

      <div className="flex flex-col space-y-4">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/navitas-logo-1.svg"
          alt="Navitas logo"
          width={100}
          height={25}
          className="h-auto"
        />

        <h2 id="cookie-consent-title" className="text-2xl font-bold text-[#1A1A1A]">
          We Value Your Privacy
        </h2>

        <p id="cookie-consent-description" className="text-sm text-[#666666] leading-normal">
          This site uses cookies and related technologies, as described in our{" "}
          <a href="#" className="underline text-[#006B5C] hover:text-[#A80084] transition-colors">
            privacy policy
          </a>
          , for purposes that may include site operation, analytics, enhanced
          user experience, or advertising. You may choose to consent to our
          use of these technologies, or manage your own preferences.
        </p>

        <div className="flex flex-col space-y-2 pt-2">
          <button className="w-full py-3 px-4 rounded-md border border-[#006B5C] text-[#006B5C] bg-white text-sm font-semibold hover:bg-gray-50 transition-colors">
            Cookie Preferences
          </button>
          <button className="w-full py-3 px-4 rounded-md bg-[#006B5C] text-white text-sm font-semibold hover:bg-[#005f52] transition-colors">
            Accept All Cookies
          </button>
          <button className="w-full py-3 px-4 rounded-md bg-[#006B5C] text-white text-sm font-semibold hover:bg-[#005f52] transition-colors">
            Reject All
          </button>
        </div>

        <div className="flex items-center justify-end pt-2">
          <span className="text-xs text-gray-500 mr-2">Powered by</span>
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5eab35f5-1148-4b08-8ed1-61b8b2785f2c-navitas-com/assets/svgs/trustarc-logo-xs-77.svg"
            alt="TrustArc logo"
            width={77}
            height={20}
            className="h-auto"
          />
        </div>
      </div>
    </div>
  );
}