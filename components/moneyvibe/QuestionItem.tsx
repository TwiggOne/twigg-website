import AnswerItem from "./AnswerItem";
import { ApiQuestion } from "./TopicData";

type QuestionItemProps = {
  question: ApiQuestion;
  onAnswer: (value: string) => void;
};


const ANSWERS = [
  {
    value: "strongly_disagree",
    label: "Strongly Disagree",
    iconPath: "/moneyvibe/strongly_disagree.png",
  },
  {
    value: "disagree",
    label: "Disagree",
    iconPath: "/moneyvibe/disagree.png",
  },
    {
    value: "agree",
    label: "Agree",
    iconPath: "/moneyvibe/agree.png",
  },
  {
    value: "strongly_agree",
    label: "Strongly Agree",
    iconPath: "/moneyvibe/strongly_agree.png",
  },

];

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  onAnswer,
}) => {
  return (
    <div
      className="
h-[440px]        md:h-[506px]
        flex flex-col gap-[45px]
        p-[20px] md:p-[56px]
      md:w-[97%]  
        bg-[#FDF9F0]
        border border-[#BC9313]/20
        rounded-[40px]
        justify-center
      "
    >
      <h3 className="text-[20px]  md:text-[34px] font-bricolage leading-[100%]">
        {question.text}
      </h3>

      <div className="grid grid-cols-2 gap-[12px] md:gap-[18px] md:w-[90%]">
        {ANSWERS.map((answer) => (
          <AnswerItem
            key={answer.value}
            value={answer.value}
            icon={answer.iconPath}
            label={answer.label}
            onSelectComplete={onAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
