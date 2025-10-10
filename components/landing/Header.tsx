import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#21483880] border border-[#FDF9F00A] rounded-[100px] shadow-[0px_7px_15px_0px_#0000001A,0px_27px_27px_0px_#00000017,0px_61px_36px_0px_#0000000D,0px_108px_43px_0px_#00000003,0px_169px_47px_0px_#00000000,0px_4px_4px_0px_#FDF9F01A_inset] backdrop-blur-[40px]"
          : "bg-[#152D23] border-none rounded-[100px] shadow-none"
      }`}
      style={{ maxWidth: "1312px", width: "100%" }}
    >
      <div
        className="
           mx-auto flex justify-between items-center
          px-4 sm:px-[54px] py-3 sm:py-[20px]
        "
      >
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="sm:w-[38px] sm:h-[38px]"
            />
            <span className="text-[#FDF9F0] font-bold text-xl sm:text-3xl">
              TWIGG
            </span>
          </div>
        </Link>

        {/* Button */}
        {/* Button */}
        <button
          className={`px-[24px] py-[14px] w-[178px] rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 ${
            scrolled
              ? "bg-[#BC9313] text-white hover:bg-[#f1c33a]"
              : "bg-transparent text-white border border-[#FDF9F0] hover:bg-[#BC9313]/10"
          }`}
        >
          Join Wishlist
        </button>
      </div>
    </header>
  );
};
