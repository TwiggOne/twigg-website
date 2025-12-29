import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
  personality: string;
  moneyWise: string;
};

export default function ResultDescribeVibe({
  icon,
  title,
  subtitle,
  personality,
  moneyWise,
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-[14px]">
        <div className="flex gap-3 items-center">
          <Image src={icon} width={48} height={48} alt="icon" />
          <div className="leading-tight">
            <p className="text-[22px] md:text-[28px] font-semibold font-bricolage text-[#BC9313]">
              {title}
            </p>
            {/* <p className="text-[10px] md:text-[12px] font-switzer text-[#FDF9F0]/50">
              {subtitle}
            </p> */}
          </div>
        </div>

        <p className="text-[10px] md:text-[16px] font-switzer text-[#FDF9F0]/80">
          {personality}
        </p>
      </div>

      <div className="max-w-[334px] p-[22px] rounded-[12px]
        border border-[#BC9313]/10 gap-2
        bg-gradient-to-br from-[#BC9313]/15 via-[#152D23]/20 to-[#152D23]"
      >
        <h3 className="text-[12px] md:text-[20px] font-medium text-[#BC9313]">
          Money-wise:
        </h3>
        <p className="text-[12px] md:text-[14px] text-[#FDF9F0]/80 leading-tight">
          {moneyWise}
        </p>
      </div>
    </div>
  );
}
