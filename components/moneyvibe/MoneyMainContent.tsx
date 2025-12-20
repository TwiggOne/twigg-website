"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

import TopicList from "./TopicList";
import QuestionItem from "./QuestionItem";
import TopicContent from "./TopicContent";
import MoneyVibeForm from "./MoneyVibeContact";
import LoadingMoneyUi from "./LoadingMoneyUi";
import {
  ApiSection,
  buildStack,
  MoneyVibeEvaluationResponse,
} from "./TopicData";
import { useIsDesktop } from "./IsDesktop";
import { saveProgress, loadProgress, clearProgress } from "./SaveProgessMoney";
import { LoadingTwiggLogo } from "./LoadingSvg";
import { IntroCard } from "./IntoCard";

export type UserAnswer = {
  questionId: string;
  answer: string;
};

type MoneyMainContentProps = {
  onComplete?: (result: MoneyVibeEvaluationResponse) => void;
};

const MoneyMainContent: React.FC<MoneyMainContentProps> = ({ onComplete }) => {
  const [sections, setSections] = useState<ApiSection[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sendDataForResults, setSendDataForResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [evaluationResult, setEvaluationResult] =
    useState<MoneyVibeEvaluationResponse | null>(null);

  /* ================= FETCH QUESTIONS (GET API) ================= */
  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://api.twigg-dev.one/api/v1/moneyvibe/questions")
      .then((res) => {
        setSections(res.data.sections);

        // 🔹 Restore cached progress
        const cached = loadProgress();
        if (cached) {
          setAnswers(cached.answers);
          setActiveIndex(cached.activeIndex);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  /* ================= STACK ================= */
  const stack = useMemo(() => {
    if (!sections.length) return [];
    const originalStack = buildStack(sections);
    // Add intro card as first item
    return [{ type: "intro" as const }, ...originalStack];
  }, [sections]);
  type NormalizedAnswer =
    | "Strongly Disagree"
    | "Disagree"
    | "Agree"
    | "Strongly Agree";

  const normalizeAnswer = (value: string): NormalizedAnswer => {
    const cleaned = value
      .toLowerCase()
      .replace(/_/g, " ")
      .replace(/-/g, " ")
      .trim();

    switch (cleaned) {
      case "strongly disagree":
        return "Strongly Disagree";
      case "disagree":
        return "Disagree";
      case "agree":
        return "Agree";
      case "strongly agree":
        return "Strongly Agree";
      default:
        throw new Error(`Invalid answer value: ${value}`);
    }
  };

  const visibleStack = stack.slice(activeIndex, activeIndex + 3);
  const isDesktop = useIsDesktop();
  const goNext = () => setActiveIndex((prev) => prev + 1);

  const isFlowComplete = !isLoading && activeIndex >= stack.length;

  /* ================= SAVE ANSWER + CACHE ================= */
  const handleAnswer = (questionId: string, value: string) => {
    const normalized = normalizeAnswer(value);

    setAnswers((prev) => {
      const updatedAnswers = [...prev, { questionId, answer: normalized }];

      saveProgress({
        answers: updatedAnswers,
        activeIndex: activeIndex + 1,
      });

      return updatedAnswers;
    });

    setActiveIndex((prev) => prev + 1);
  };

  /* ================= SUBMIT ONLY ON FLOW COMPLETE ================= */
  useEffect(() => {
    if (!isFlowComplete) return;

    const submitAnswers = async () => {
      try {
        const payload = {
          answers,
          submittedAt: new Date().toISOString(),
        };

        // 🔹 DEMO POST API
      } catch (err) {
        // console.error("Submit failed:", err);
        // cache remains for retry
      }
    };

    submitAnswers();
  }, [isFlowComplete, answers]);

  /* ================= TOPIC PROGRESS ================= */
  /* ================= TOPIC PROGRESS ================= */
const topicProgress = useMemo(() => {
  if (!sections.length) return [];

  const progressMap = new Map<string, number>();
  sections.forEach((s) => progressMap.set(s.id, 0));

  for (let i = 0; i < activeIndex; i++) {
    const item = stack[i];
    if (item?.type === "question") {
      progressMap.set(
        item.sectionId,
        (progressMap.get(item.sectionId) || 0) + 1
      );
    }
  }

  return sections.map((s) => ({
    title: s.title,
    iconUrl: s.minorImage,
    progress: (progressMap.get(s.id) || 0) / s.questions.length,
    isActive:
      stack[activeIndex]?.type === "question"
        ? stack[activeIndex].sectionId === s.id
        : stack[activeIndex]?.type === "topic"
        ? stack[activeIndex].section.id === s.id
        : false, // intro card has no active section
  }));
}, [activeIndex, stack, sections]);

  /* ================= LOADING ================= */
  if (isLoading) {
    return (
      <div className="flex w-full h-[506px] items-center justify-center px-[40px] p-[20px] md:p-0">
        <div
          className="
      h-[440px] md:h-[506px] w-full
      flex flex-col gap-[45px]
      p-[56px]
      bg-[#FDF9F0]
      border border-[#BC9313]/20
      rounded-[40px]
      items-center justify-center
    "
        >
          <div className="w-[120px] h-[123px] md:w-[182px] md:h-[190px]">
            <LoadingTwiggLogo />
          </div>
        </div>{" "}
      </div>
    );
  }

  /* ================= RENDER ================= */
  return (
    <div
      className="
      flex w-full flex-col-reverse md:flex-row justify-between
      md:rounded-[60px]
      gap-[20px] md:gap-0
      md:px-[52px] md:py-[61px]
      md:bg-[rgba(253,249,240,0.02)]
      md:backdrop-blur-[50px]
      md:border md:border-[#BC9313]/20
    "
    >
      {/* MAIN STACK */}
      <div className="relative flex-1 h-[506px]">
        <AnimatePresence>
          {!isFlowComplete &&
            visibleStack.map((item, index) => {
              const zIndex = 30 - index;
              const offset = index * (isDesktop ? 42 : 22);
              const opacity = 1 - index * 0.4;
              const scale = 1 - index * 0.08;

              return (
                <motion.div
                  key={
                    item.type === "intro"
                      ? "intro-card"
                      : item.type === "topic"
                      ? `topic-${item.section.id}`
                      : item.question.questionId
                  }
                  initial={{ opacity }}
                  animate={{ opacity }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ zIndex, left: offset, scale }}
                  className="absolute w-full px-[40px] pr-[60px] p-[20px] md:p-0"
                >
                  {item.type === "intro" ? (
                    <IntroCard next={goNext} />
                  ) : item.type === "topic" ? (
                    <div className="flex flex-col gap-2">
                      <TopicContent
                        iconUrl={item.section.majorImage}
                        topicName={item.section.title}
                        next={goNext}
                      />
                    </div>
                  ) : (
                    <QuestionItem
                      question={item.question}
                      onAnswer={(value) =>
                        handleAnswer(item.question.questionId, value)
                      }
                    />
                  )}
                </motion.div>
              );
            })}
        </AnimatePresence>

        {/* COMPLETION */}
        <AnimatePresence>
          {isFlowComplete &&
            (sendDataForResults ? (
              <motion.div
                key="loading-results"
                className="w-full h-full px-[40px] pr-[60px] p-[20px] md:p-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <LoadingMoneyUi />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="w-full h-[600px] md:h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <MoneyVibeForm
                  onComplete={async (waitlistEntryId: number) => {
                    try {
                      setSendDataForResults(true);

                      const payload = {
                        waitlistEntryId,
                        answers,
                      };

                      console.log("Submitting evaluation:", payload);

                      const res = await axios.post<MoneyVibeEvaluationResponse>(
                        "https://api.twigg-dev.one/api/v1/moneyvibe/evaluate",
                        payload,
                        {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        }
                      );

                      if (!res.data?.success) {
                        throw new Error("Evaluation failed");
                      }

                      // ✅ SAVE RESULT
                      setEvaluationResult(res.data);
                      clearProgress(); // ✅ clear cache after success

                      // ✅ CLEAR LOCAL CACHE

                      // ✅ SEND RESULT TO PARENT
                      onComplete?.(res.data);
                    } catch (error) {
                      console.error("Evaluation submit failed:", error);
                      setSendDataForResults(false);
                    }
                  }}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* SIDE LIST */}
      <div className=" md:pl-0 flex items-center md:w-[30%] justify-center">
        <TopicList topics={topicProgress} />
      </div>
    </div>
  );
};

export default MoneyMainContent;
