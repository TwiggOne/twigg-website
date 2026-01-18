import { TopicBgLogo, UpArrow } from "@/utils/SvgUtils";
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
      relative
      h-[440px] md:h-[506px]
md:w-[97%]
      flex flex-col gap-[45px] text-center
p-[56px] items-center
      bg-[#FDF9F0]
      border border-[#BC9313]/20
      justify-center
      rounded-[40px] 
    "
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
         <div
        onClick={next}
                className=" cursor-pointer items-center  justify-end-safe ml-auto absolute bottom-5 right-5  shadow-md bg-[#BC9313]/20 border border-[#BC9313]/40 h-12 w-12 flex rounded-full"
              >
                <div className="w-[20px] h-[27px] text-[#BC9313] mx-auto">
                  <UpArrow right />
                </div>
              </div>
  
    </div>
  );
};
export default TopicContent;
