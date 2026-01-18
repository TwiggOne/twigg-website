import AnswerItem from "./AnswerItem";
import { ApiQuestion } from "./TopicData";

type QuestionItemProps = {
  question: ApiQuestion;
    selectedAnswer?: string;

  onAnswer: (value: string) => void;
};

const BASE_ANSWERS = [
  { value: "strongly_disagree", label: "Strongly Disagree" },
  { value: "disagree", label: "Disagree" },
  { value: "agree", label: "Agree" },
  { value: "strongly_agree", label: "Strongly Agree" },
];
const POSITIVE_ICONS: Record<string, string> = {
  strongly_disagree: "/moneyvibe/strongly_disagree.png", // sad
  disagree: "/moneyvibe/disagree.png",
  agree: "/moneyvibe/agree.png",
  strongly_agree: "/moneyvibe/strongly_agree.png", // smiling
};
const NEGATIVE_ICONS: Record<string, string> = {
  strongly_disagree: "/moneyvibe/strongly_agree.png", // smiling
  disagree: "/moneyvibe/agree.png",
  agree: "/moneyvibe/disagree.png",
  strongly_agree: "/moneyvibe/strongly_disagree.png", // sad
};



const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  selectedAnswer,
  onAnswer,
}) => {
  const isNegative = question.direction === "Negative";

const answersWithIcons = BASE_ANSWERS.map((answer) => ({
  ...answer,
  iconPath: isNegative
    ? NEGATIVE_ICONS[answer.value]
    : POSITIVE_ICONS[answer.value],
}));
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
        {question.text} {question.direction}
      </h3>

      <div className="grid grid-cols-2 gap-[12px] md:gap-[18px] md:w-[90%]">
        {answersWithIcons.map((answer) => (
          <AnswerItem
            key={answer.value}
            value={answer.value}
                selected={selectedAnswer === answer.label}

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
