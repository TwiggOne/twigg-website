import Image from "next/image";

export default function Footer() {
  const linkGroups = [
    {
      title: 'Company',
      links: ['About Us', 'Team'],
    },
    {
      title: 'Product',
      links: ['Features', 'FAQ'],
    },
    {
      title: 'Support',
      links: ['Terms & Conditions', 'Privacy Policy'],
    },
  ];

  return (
    <footer className="bg-[#0D2F23] text-white mt-10 py-10 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16">
          {/* Logo and Description (Left Side) */}
          <div className="flex-1 lg:max-w-[350px] space-y-6 mb-8 lg:mb-0">
            <div className="mb-6">
              <Image
                src="/footer_logo.svg"
                alt="Twigg Logo"
                width={140}
                height={45}
              />
            </div>
            <p className="text-gray-300 font-switzer text-sm leading-relaxed max-w-xs">
              Your journey with money doesn't have to be complicated. With Twigg, clarity and confidence are just a tap away.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A4536] hover:bg-[#234d3d] transition-colors duration-200 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Image src="/LogoX.svg" alt="Instagram" width={24} height={24} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1A4536] hover:bg-[#234d3d] transition-colors duration-200 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Image src="/LogoL.svg" alt="LinkedIn" width={24} height={24} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Link Groups (Middle) */}
          <div className="flex-1 flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 px-0 sm:px-8">
            {linkGroups.map((group, index) => (
              <div key={index} className="min-w-[120px] mb-6 sm:mb-0">
                <h4 className="font-semibold text-white font-bricolage mb-4 text-base">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-300 font-switzer hover:text-amber-400 transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info (Right Side) */}
          <div className="flex-1 lg:max-w-[300px]">
            <h4 className="font-semibold font-bricolage text-white mb-4 text-base">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex font-switzer items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 9999999999
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@twigg.one
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-700/50 pt-8 mt-4 font-switzer flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2025 Twigg. All rights reserved.</p>
          <p className="text-center md:text-right">Aadyantax Technologies Private Limited</p>
        </div>
      </div>

      {/* Large Text at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center w-full pointer-events-none">
        <div className="w-full sm:w-[1240px] h-[60px] sm:h-[129px] flex items-center justify-center">
          <h2
            className="text-[40px] sm:text-[120px] font-bold text-center text-[#FDF9F0]/8 leading-none"
            style={{
              opacity: 0.8,
              transform: 'rotate(0deg)',
            }}
          >
            Twigg Your Money
          </h2>
        </div>
      </div>
    </footer>
  );
}
