import { TopicBgLogo } from "@/utils/SvgUtils"
import AnswerItem from "./AnswerItem"

type TopicContentProps = {
  topicName: string
  next: () => void
}

const TopicContent: React.FC<TopicContentProps> = ({ topicName, next }) => {
  return (
    <div className="
      h-[506px]
              cursor-pointer

      flex flex-col gap-[45px] text-center
      p-[56px] items-center
      bg-[#FDF9F0]
      border border-[#BC9313]/20
      rounded-[40px] 
    " onClick={next}>
        <div className="relative">
            <TopicBgLogo />
        </div>
      <h3 className="text-[28px] font-bricolage font-medim text-[#152D23] leading-[100%]">
        {topicName}
      </h3>

     
    </div>
  )
}
export default TopicContent
