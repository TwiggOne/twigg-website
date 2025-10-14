import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const linkGroups = [
    {
      title: "Company",
      links: ["About Us", "Team"],
    },
    {
      title: "Product",
      links: ["Features", "FAQ"],
    },
    {
      title: "Support",
      links: ["Terms & Conditions", "Privacy Policy"],
    },
  ];

  return (
    <footer className="bg-[#0D2F23] text-white pt-[100px] px-[24px] sm:px-[100px] relative">
      <div className="w-full flex-col gap-[40px]">
        {/* Main Footer Content */}
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          {/* Logo + Description */}
          <div className="lg:col-span-4 flex flex-col gap-[12px] sm:gap-6">
            <div>
              <Image
                src="/footer_logo.svg"
                alt="Twigg Logo"
                width={140}
                height={45}
                className="object-contain w-[112px] h-[33px] sm:w-[140px] sm:h-[45px]"
              />
            </div>
        <p className="text-[#FDF9F0]/80 font-switzer text-[10px] sm:text-sm leading-relaxed">
  Your journey with money doesn&apos;t have to be complicated. With Twigg,
  clarity and confidence are just a tap away.
</p>

          </div>
      <div
  // Change to flex container with column direction for mobile
  // Add gap for spacing between stacked sections on mobile
  // Reapply grid and desktop column classes at the 'lg' breakpoint
  className="lg:col-span-8 flex flex-col gap-8 lg:grid lg:gap-16"
  style={{
    // The gridTemplateColumns style should only apply on desktop.
    // We'll keep it here, but the 'lg:grid' class ensures it takes effect only on large screens.
    gridTemplateColumns: "repeat(3, 1fr) 1.5fr",
  }}
>
  {/* Link Groups */}
  {linkGroups.map((group, index) => (
    <div key={index}>
      <h4 className="font-semibold text-[#FDF9F0] font-bricolage mb-[8px] sm:mb-4 text-base">
        {group.title}
      </h4>
      <ul className="space-y-3">
        {group.links.map((link, linkIndex) => (
          <li key={linkIndex}>
            <a
              href="#"
              className="text-[#FDF9F0]/80  font-switzer hover:text-amber-400 transition-colors duration-200 text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))}

  {/* Contact Info */}
  <div>
    <h4 className="font-semibold font-bricolage text-white mb-4 text-base">
      Contact
    </h4>
    <ul className="space-y-3 text-sm text-gray-300">
      <li className="flex font-switzer items-center gap-2">
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        +91 9999999999
      </li>
      <li className="flex items-center gap-2">
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        contact@twigg.one
      </li>
      <li className="flex items-start gap-2">
        <svg
          className="w-4 h-4 flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span className="leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do
        </span>
      </li>
    </ul>
  </div>
</div>
        </div>
        <div className="flex gap-4">
          {[Instagram, Linkedin].map((Icon, idx) => (
            <div
              key={idx}
              className="relative rounded-full p-[1px] bg-gradient-to-br from-[#FDF9F066] via-[#FDF9F033] to-[#FDF9F01A]"
            >
              <a
                href="#"
                aria-label={idx === 0 ? "Instagram" : "LinkedIn"}
                className="relative w-10 h-10 sm:w-[56px] sm:h-[56px] rounded-full bg-[#1A4536] hover:bg-[#234d3d] flex items-center justify-center overflow-hidden transition-colors duration-200"
              >
                {/* Noise Overlay */}
                {/* <span
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/noise.png')", // Replace with your noise image
            opacity: 0.2,
            mixBlendMode: "overlay",
          }}
        ></span> */}

                <Icon className="relative w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          ))}
        </div>
        {/* Bottom Copyright Bar */}
        <div className=" font-switzer pt-[30px] sm:pt-[40px] pb-[40px] sm:pb-[120px] flex flex-col md:flex-row justify-between sm:items-center gap-4 text-[12px] sm:text-[14px] text-[#FDF9F0]">
          <p>© 2025 Twigg. All rights reserved.</p>
          <p className=" md:text-right">
            Aadyantax Technologies Private Limited
          </p>
        </div>
      </div>
      {/* Large Text at Bottom */}
      <div className="absolute bottom-[-30] left-0 right-0 w-full pointer-events-none overflow-hidden">
        <div className="w-full h-[80px] overflow-hidden flex items-end justify-center pointer-events-none">
          <h2
            className="text-[40px] sm:text-[130px] font-bold text-center text-[#FDF9F0]/8 leading-none"
            style={{ opacity: 0.8, transform: "translateY(20%)" }}
          >
            Twigg Your Money
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 right-0" >
        <Image width={450} height={300} src="/footer_bg.png" alt="footer_bg" className="object-contain w-[260px] h-[260px] sm:w-[450px] sm:h-[300px]"/>
      </div>
    </footer>
  );
}

{
  /* Social Icons */
}
