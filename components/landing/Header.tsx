import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-2 w-full z-50 bg-[#152D23] px-2 sm:px-0">
      <div
        className="
          max-w-[1312px] mx-auto flex justify-between items-center
          px-4 sm:px-[54px] py-3 sm:py-[20px]
          bg-[#21483880]
          rounded-[50px] sm:rounded-[100px]
          border border-[#FDF9F00A]
          shadow-[0px_4px_8px_0px_#0000001A,
                   0px_12px_16px_0px_#00000017,
                   0px_24px_16px_0px_#0000000D,
                   0px_42px_20px_0px_#00000003,
                   0px_64px_24px_0px_#00000000,
                   0px_2px_2px_0px_#FDF9F01A_inset]
          backdrop-blur-[40px]
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
        <button
          className="
            bg-[#BC9313] hover:bg-[#f1c33a]
            text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full
            text-sm sm:text-base font-semibold transition-all
            hover:scale-105
          "
        >
          Join Wishlist
        </button>
      </div>
    </header>
  );
};
