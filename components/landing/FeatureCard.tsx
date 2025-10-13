import { Menu, Thunder, Eye } from "@/utils/SvgUtils";
export default function FeatureCard() {
  const features = [
    {
      title: "Deeply \nPersonalised",
      description:
        "Blends your income, spending, assets, loans, and money personality.",
      icon: <Menu />,
    },
    {
      title: "Powered by 20+\nYears of Data",
      description:
        "Trained on decades of markets, instruments, and regulations.",
      icon: <Thunder />,
    },
    {
      title: "Context\nAware",
      description:
        "Adapts to your goals, risks, and life stage never one-size-fits-all.",
      icon: <Eye />,
    },
  ];

  // The new gradient you want to apply
  const newGradient =
    "linear-gradient(135.72deg, rgba(30, 51, 42, 0.5) 0%, rgba(38, 56, 48, 0.5) 55.19%, rgba(228, 215, 174, 0.5) 140.32%)";

  return (
    <div className="flex flex-nowrap mx-[-20px]  sm:mx-0 sm:grid sm:grid-cols-3 gap-6 sm:gap-[36px] w-full pb-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-[70%] flex-shrink-0 sm:w-full rounded-[15px] backdrop-blur-[12.5px] px-[21px] py-[24px] sm:px-[41px] sm:py-[48px] flex flex-col items-start gap-[16px] sm:gap-[36px]"
          // Applying the new gradient here
          style={{
            background: newGradient,
          }}
        >
          {/* Icon */}
          <div
            className="w-[40px] h-[40px] sm:w-[63px] sm:h-[63px] rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(180.38deg, rgba(253, 249, 240, 0.25) -5.27%, rgba(33, 72, 56, 0.25) 99.67%)",
              border: "1px solid rgba(253, 249, 240, 0.08)",
              boxShadow:
                "0px 4px 30px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(253, 249, 240, 0.3)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="flex sm:w-[22px] sm:h-[20px] w-[12px] ah-[18px]">{feature.icon}</div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start gap-[8px] sm:gap-[14px] w-[80%]">
            <h3 className="font-bricolage text-[16px] sm:text-[26px] font-bold text-[#FDF9F0] leading-[120%] whitespace-pre-line">
              {feature.title}
            </h3>

            <p className="font-switzer text-[12px] sm:text-[18px] text-[#FDF9F0]/80 leading-[110%]">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
