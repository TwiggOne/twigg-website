"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Team", href: "/team" }, // ✅ changed
];

export const Header = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
const redirectToStore = () => {
  const userAgent = navigator.userAgent || navigator.vendor;

  if (/android/i.test(userAgent)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.aadyantx.twigg";
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.location.href =
      "https://apps.apple.com/in/app/twigg-one/id6758598241";
  } else {
    // Desktop fallback (you can choose what to do here)
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.aadyantx.twigg";
  }
};
  return (
    <>
      <header
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-[1312px] px-4 sm:px-6 md:px-8
          ${
            scrolled
              ? "bg-[#21483880] border border-[#FDF9F00A] rounded-[100px] shadow-[0px_7px_15px_0px_#0000001A,0px_27px_27px_0px_#00000017,0px_61px_36px_0px_#0000000D,0px_108px_43px_0px_#00000003,0px_169px_47px_0px_#00000000,0px_4px_4px_0px_#FDF9F01A_inset] backdrop-blur-[40px]"
              : "bg-[#152D23] border-none rounded-[100px] shadow-none"
          }
${menuOpen ? "rounded-b-[24px] rounded-t-none md:rounded-[100px] top-0  pt-2" : "rounded-[100px] top-2 "}        `}
      >
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px]"
              />
              <span className="text-[#FDF9F0] font-bold text-xl sm:text-3xl">
                TWIGG
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[56px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#FDF9F0] text-[16px] font-switzer px-2 hover:text-[#BC9313] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <button
  onClick={redirectToStore}
  className="hidden md:block px-12 w-[178px] py-3 rounded-full text-[16px] font-semibold bg-[#BC9313] text-white hover:bg-[#f1c33a] transition-all hover:scale-105 cursor-pointer"
>
  Join Beta
</button>
          </nav>

          {/* Desktop CTA Button */}

          {/* Mobile Hamburger / Close */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`md:hidden flex justify-center items-center w-9 h-9 cursor-pointer ${
              menuOpen ? "" : ""
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="text-[#FDF9F0]" />
            ) : (
              <Menu className="text-[#FDF9F0]" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel — slides down inside the header pill */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="flex flex-col px-1 pt-5 pb-2 gap-[24px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#FDF9F0] text-[16px] font-switzer  px-2  hover:text-[#BC9313] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-2 pt-[28px] pb-5">
            <button
              onClick={() => {
                setMenuOpen(false);

                 redirectToStore

              }}
              className="w-[142px] py-[11px] rounded-[10px] bg-[#BC9313] text-[#FDF9F0] font-semibold font-switzer text-[14px] hover:bg-[#f1c33a] transition-all cursor-pointer"
            >
              Download app
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};
