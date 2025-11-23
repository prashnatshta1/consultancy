import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const footerLinks = [
    { text: 'bigPartnership Reconciliation Action Plan (Australia)', href: '#' },
    { text: 'bigPartnership Education Trust', href: '#' },
    { text: 'Impact Report', href: '#' },
    { text: 'Modern Slavery Statement', href: '#' },
    { text: 'Careers at bigPartnership', href: '#' },
    { text: 'Vision and Values', href: '#' },
  ];

  return (
    <footer className="bg-[#006666] text-white">
      <div className="container mx-auto py-16 px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 md:gap-x-12">
          {/* Column 1: Logo & Address */}
          <div className="space-y-6">
            <a href="" aria-label="Home">
              <Image
                src="/images/logo.png"
                alt="bigPartnership"
                width={120}
                height={30}
                className="filter brightness-0 invert"
              />
            </a>
            <p className="text-[0.9rem] leading-relaxed">
              Level 9/143 St Georges Terrace,
              <br />
              Westralia Square 2,
              <br />
              Perth, WA, 6000
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-[0.9rem] hover:underline text-white">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <p className="font-semibold text-[0.9rem]">Connect on socials</p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-white">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Acknowledgement */}
          <div>
            <p className="text-[0.9rem] leading-relaxed">
              bigPartnership acknowledges the Traditional Owners of the lands in Australia and respects all First Nations peoples in the countries in which we operate. We recognise and respect the continuing living Cultures of First Nations peoples and recognise their connections to lands, seas, waterways, sky and Community. We pay our respects to Elders past and present.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/20 pt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-base" style={{fontFamily: 'moderat-reg, sans-serif, Arial, "Helvetica Neue", Helvetica'}}>© 2025 bigPartnership Pty Ltd</p>
          <a href="#" className="text-base" style={{fontFamily: 'moderat-reg, sans-serif, Arial, "Helvetica Neue", Helvetica'}}>Powered by TrustArc</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;