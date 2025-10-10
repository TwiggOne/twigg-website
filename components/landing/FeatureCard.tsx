import { Battery, Eye, Zap } from 'lucide-react';

export default function FeatureCard() {
  const features = [
    {
      title: "Deeply Personalised",
      description: "Blends your income, spending, assets, loans, and money personality.",
      icon: <Battery size={24} color="#BC9313" />,
    },
    {
      title: "Powered by 20+ Years of Data",
      description: "Trained on decades of markets, instruments, and regulations.",
      icon: <Zap size={24} color="#BC9313" />,
    },
    {
      title: "Context Aware",
      description: "Adapts to your goals, risks, and life stage—never one-size-fits-all.",
      icon: <Eye size={24} color="#BC9313" />,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-[36px] max-w-[1155px] w-full px-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative w-full sm:w-[361px] h-auto sm:h-[327px] rounded-[15px] backdrop-blur-[12.5px]"
          style={{
            background: "linear-gradient(144.72deg, rgba(30, 51, 42, 0.5) 0%, rgba(38, 56, 48, 0.5) 41.19%, rgba(228, 215, 174, 0.5) 97.32%)",
          }}
        >
          {/* Background Blur Effect */}
          <div
            className="absolute w-full sm:w-[361px] h-[344px] rounded-[15px] filter blur-[50px]"
            style={{
              background: "linear-gradient(144.72deg, rgba(30, 51, 42, 0.5) 0%, rgba(38, 56, 48, 0.5) 41.19%, rgba(228, 215, 174, 0.5) 97.32%)",
            }}
          />

          {/* Content Container */}
          <div className="relative flex flex-col items-start p-0 gap-[16px] w-full sm:w-[237px] h-auto sm:h-[231px] mx-auto my-[24px] sm:my-[48px] px-4 sm:px-0">
            {/* Icon Container */}
            <div
              className="w-[50px] h-[50px] sm:w-[63px] sm:h-[63px] rounded-full"
              style={{
                background: "linear-gradient(180.38deg, rgba(253, 249, 240, 0.25) -5.27%, rgba(33, 72, 56, 0.25) 99.67%)",
                border: "1px solid rgba(253, 249, 240, 0.08)",
                boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(253, 249, 240, 0.3)",
                backdropFilter: "blur(15px)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                {feature.icon}
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col items-start gap-[10px] sm:gap-[14px]">
              <h3 className="font-bricolage text-[20px] sm:text-[26px] font-bold text-[#FDF9F0] leading-[26px] sm:leading-[31px] text-center sm:text-left">
                {feature.title}
              </h3>
              <p className="font-switzer text-[14px] sm:text-[18px] text-[#FDF9F0]/80 leading-[18px] sm:leading-[20px] text-center sm:text-left">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
