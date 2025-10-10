import React from "react";
import Image from "next/image";

// Define interfaces for props
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

// TrustPoint component for reusability
const TrustPoint: React.FC<TrustPointProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start gap-7">
      <div className="relative w-[55.58px] h-[56.61px] flex-shrink-0">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-2xl font-bricolage font-semibold text-[#152D23] leading-[29px]">
          {title}
        </h3>
        <p className="text-lg font-switzer text-[#152D23]/70 leading-6 w-[322px]">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main Trust component
export const Trust = () => {
  const trustPoints: TrustPointItem[] = [
    {
      title: "Your Interests First, Always!",
      description: "Advice that works only for your goals. No distractions. No side deals.",
      icon: "/Trust/1.svg",
    },
    {
      title: "Bank-Grade Security, SEBI & RBI Compliant.",
      description: "Your data and money are protected with the highest regulatory standards.",
      icon: "/Trust/2.svg",
    },
    {
      title: "100% Transparent, No Hidden Incentives.",
      description: "What you see is what you get. Clear guidance, zero conflicts.",
      icon: "/Trust/3.svg",
    },
  ];

  return (
    <section
      className="relative w-full max-w-[1240px] h-[733px] mx-auto bg-[#FDF9F0] rounded-[60px] overflow-hidden"
      style={{
        boxShadow:
          "0px 183px 73px rgba(0, 0, 0, 0.01), 0px 103px 62px rgba(0, 0, 0, 0.05), 0px 46px 46px rgba(0, 0, 0, 0.09), 0px 11px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute w-[915.42px] h-[872.83px] left-[545px] top-[137.61px]">
        <div className="absolute left-[43.95%] right-[-17.78%] rounded-full top-[18.77%] bottom-[-37.85%] bg-[#152D23]/[2" />
        <div className="absolute left-[54.45%] right-[-7.34%] rounded-full top-[35.73%] bottom-[-21.11%] bg-[#152D23]/2" />
        <div className="absolute left-[65.81%] right-[2.97%] rounded-full top-[53.73%] bottom-[-3.54%] bg-[#152D23]/2" />
        <div className="absolute left-[64.76%] right-[8.55%] rounded-full top-[26.19%] bottom-[28.51%] bg-[#BC9313]/5 blur-[125px]" />
      </div>

      {/* Content container */}
      <div className="absolute left-[91px] top-[93px] flex flex-col items-start gap-12 w-[671px] h-[548px]">
        <h2 className="text-4xl font-bricolage font-semibold text-[#214838] leading-[58px] w-[671px] h-[58px]">
          Twigg Works <span className="text-[#BC9313]">Only for You.</span>
        </h2>

        {/* Trust points list */}
        <div className="flex flex-col items-start gap-14 w-[441px] h-[442px]">
          {trustPoints.map((point, index) => (
            <TrustPoint
              key={index}
              title={point.title}
              description={point.description}
              icon={point.icon}
            />
          ))}
        </div>
      </div>

      {/* Shield image */}
      <div className="absolute left-[827px] mt-[250px] transform  w-[289px] h-[515px]">
        <Image
          src="/Shield.svg"
          alt="Gold Shield representing security and trust"
          fill
          className="object-contain"
          style={{
            filter:
              "drop-shadow(0px 183px 73px rgba(0, 0, 0, 0.01)) drop-shadow(0px 103px 62px rgba(0, 0, 0, 0.05)) drop-shadow(0px 46px 46px rgba(0, 0, 0, 0.09)) drop-shadow(0px 11px 25px rgba(0, 0, 0, 0.1))",
          }}
          priority
        />
      </div>
    </section>
  );
};
