import React from "react";
import Image from "next/image";
import { CircleSheild } from "@/utils/SvgUtils";

interface TrustPointProps {
  title: string;
  description: string;
  icon: string;
}

interface TrustPointItem {
  title: string;
  description: string;
  icon: string;
}

const TrustPoint: React.FC<TrustPointProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex items-center gap-[28px]">
      <div className="relative flex-shrink-0">
        <Image
          src={icon}
          alt={title}
          width={56}
          height={57}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-[24px] font-bricolage font-semibold text-[#152D23] leading-[120%]">
          {title}
        </h3>
        <p className="text-[18px] font-switzer text-[#152D23]/70 leading-6 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Trust = () => {
  const trustPoints: TrustPointItem[] = [
    {
      title: "Your Interests First, Always!",
      description:
        "Advice that works only for your goals. No distractions. No side deals.",
      icon: "/Trust/1.svg",
    },
    {
      title: "Bank-Grade Security, SEBI & RBI Compliant.",
      description:
        "Your data and money are protected with the highest regulatory standards.",
      icon: "/Trust/2.svg",
    },
    {
      title: "100% Transparent, No Hidden Incentives.",
      description:
        "What you see is what you get. Clear guidance, zero conflicts.",
      icon: "/Trust/3.svg",
    },
  ];

  return (
    <section
      className="relative w-full   bg-[#FDF9F0] rounded-[60px] flex flex-col justify-center pl-[91px] py-[93px]"
      style={{
        boxShadow:
          "0px 183px 73px rgba(0, 0, 0, 0.01), 0px 103px 62px rgba(0, 0, 0, 0.05), 0px 46px 46px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Background glow elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[60%] top-[20%] w-[500px] h-[500px] bg-[#BC9313]/5 blur-[125px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col ">
        {/* Heading */}
        <h2 className="text-[48px] font-bricolage font-semibold text-[#214838] leading-[100%]">
          Twigg Works <span className="text-[#BC9313]">Only for You.</span>
        </h2>

        {/* Row: Trust Points + Shield */}
        <div className="flex flex-row items-center justify-between w-full ">
          {/* Trust Points */}
          <div className="flex flex-col items-start gap-[56px] w-[35%] mt-[48px]">
            {trustPoints.map((point, index) => (
              <TrustPoint
                key={index}
                title={point.title}
                description={point.description}
                icon={point.icon}
              />
            ))}
          </div>

          {/* Shield */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Circles behind the shield */}
    <div className="absolute z-0 right-[15%]">
          <CircleSheild />
            </div>

            <div className="absolute  flex bottom-[4%] right-[30%] justify-center items-center">
              {/* Outer most circle */}
              <div
                className="absolute  rounded-full border-[#152D2305]"
                style={{
                  width: "915.42px",
                  height: "872.83px",
                  borderWidth: "40px", // you can adjust with sm/md/lg if needed
                }}
              />
              {/* Middle circle */}
              <div
                className="absolute rounded-full border-[#152D2305]"
                style={{
                  width: "655.85px",
                  height: "625.82px",
                  borderWidth: "40px",
                }}
              />
              {/* Inner most circle */}
              <div
                className="absolute rounded-full border-[#152D2305]"
                style={{
                  width: "387.15px",
                  height: "365.08px",
                  borderWidth: "40px",
                }}
              />
            </div>

            {/* Shield image */}
            <div className="flex flex-row w-full items">
              <div className="w-[42%]"></div>
              <Image
                src="/Shield.png"
                alt="Gold Shield representing security and trust"
                width={290} // 60% of original width
                height={415} // 60% of original height
                className=" object-contain z-10 "
                style={{
                  filter:
                    "drop-shadow(0px 183px 73px rgba(0, 0, 0, 0.01)) drop-shadow(0px 103px 62px rgba(0, 0, 0, 0.05)) drop-shadow(0px 46px 46px rgba(0, 0, 0, 0.09)) drop-shadow(0px 11px 25px rgba(0, 0, 0, 0.1))",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
