"use client";
import { motion } from "framer-motion";

type TopicCircleProgressProps = {
  progress: number; // 0 → 1
  isActive?: boolean;
};

const TopicCircleProgress: React.FC<TopicCircleProgressProps> = ({
  progress,
  isActive = false,
}) => {
  const isComplete = progress >= 1;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BC9313" stopOpacity="1" />
          <stop offset="100%" stopColor="#BC9313" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Base path */}
      <path
        d="M12.7119 5.83105C17.8281 1.88333 23.8398 0.493735 30.3799 1.15918C36.0056 1.73224 41.2103 3.29809 45.5947 6.70508C51.2009 11.0605 54.1693 16.8461 54.7959 23.8496C54.9026 25.043 54.9316 26.2172 54.999 27.4746C54.9956 33.1799 53.8651 38.5542 50.8994 43.4082C46.6889 50.2976 40.5164 54.1806 32.502 54.876L31.7207 54.9326C22.9981 55.4602 15.1686 52.8841 8.77734 47.0576L8.77637 47.0566L8.20605 46.5234C2.42995 40.9661 0.236661 33.9479 1.23047 25.9385C2.25131 17.7136 6.09591 10.9351 12.7119 5.83105Z"
        stroke={isActive ? "rgba(188,147,19,0.1)" : "rgba(253,249,240,0.2)"}
        strokeWidth="2.5"
        fill="none"
      />

      {/* Progress path */}
      <motion.path
        d="M12.7119 5.83105C17.8281 1.88333 23.8398 0.493735 30.3799 1.15918C36.0056 1.73224 41.2103 3.29809 45.5947 6.70508C51.2009 11.0605 54.1693 16.8461 54.7959 23.8496C54.9026 25.043 54.9316 26.2172 54.999 27.4746C54.9956 33.1799 53.8651 38.5542 50.8994 43.4082C46.6889 50.2976 40.5164 54.1806 32.502 54.876L31.7207 54.9326C22.9981 55.4602 15.1686 52.8841 8.77734 47.0576L8.77637 47.0566L8.20605 46.5234C2.42995 40.9661 0.236661 33.9479 1.23047 25.9385C2.25131 17.7136 6.09591 10.9351 12.7119 5.83105Z"
        pathLength={1}
        stroke="#BC9313"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={1}
        animate={{ strokeDashoffset: 1 - progress }}
        initial={{ strokeDashoffset: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </svg>
  );
};

export default TopicCircleProgress;
