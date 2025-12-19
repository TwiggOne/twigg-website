import { TopicBgLogo } from "@/utils/SvgUtils";
import AnswerItem from "./AnswerItem";
import Image from "next/image";

type TopicContentProps = {
  topicName: string;
  iconUrl: string;
  next: () => void;
};

const TopicContent: React.FC<TopicContentProps> = ({
  topicName,
  next,
  iconUrl,
}) => {
  return (
    <div
      className="
      h-[440px] md:h-[506px]
              cursor-pointer

      flex flex-col gap-[45px] text-center
p-[56px] items-center
      bg-[#FDF9F0]
      border border-[#BC9313]/20
      justify-center
      rounded-[40px] 
    "
      onClick={next}
    >
      <div className="relative w-[210px] h-[210px] md:w-[278px] md:h-[283px] flex items-center justify-center">
        {/* <TopicBgLogo /> */}
        <div className="w-[104px] h-[92px] md:w-[130px] md:h-[130px] ">
          <Image
            src={iconUrl}
            alt="major-icon"
            fill
            className="object-contain relative"
          />
        </div>
      </div>
      <h3 className="text-[20px] md:text-[28px] font-bricolage font-medim text-[#152D23] leading-[100%] text-center">
        {(() => {
          const [first, ...rest] = topicName.split(" ");
          return (
            <>
              <span className="block">{first}</span>
              <span className="block">{rest.join(" ")}</span>
            </>
          );
        })()}
      </h3>
    </div>
  );
};
export default TopicContent;
