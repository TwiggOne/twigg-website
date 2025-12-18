"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

import TopicList from "./TopicList";
import QuestionItem from "./QuestionItem";
import TopicContent from "./TopicContent";
import MoneyVibeForm from "./MoneyVibeContact";
import LoadingMoneyUi from "./LoadingMoneyUi";
import { ApiSection, buildStack } from "./TopicData";
type UserAnswer = {
  questionId: string;
  answer: string;
};
const MoneyMainContent: React.FC = () => {
  const [sections, setSections] = useState<ApiSection[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sendDataForResults, setSendDataForResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ✅ NEW
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://www.jsonkeeper.com/b/XM21Q")
      .then((res) => {
        setSections(res.data.sections);
      })
      .finally(() => {
        setIsLoading(false); // ✅ stop loading
      });
  }, []);

  const stack = useMemo(() => {
    if (sections.length === 0) return [];
    return buildStack(sections);
  }, [sections]);

  const visibleStack = stack.slice(activeIndex, activeIndex + 3);

  const goNext = () => setActiveIndex((prev) => prev + 1);

  const isFlowComplete = !isLoading && activeIndex >= stack.length;
  /* -------- Fetch API -------- */
  useEffect(() => {
    if (isFlowComplete) {
      console.log("ALL ANSWERS:", answers);
    }
  }, [isFlowComplete, answers]);
  const topicProgress = useMemo(() => {
    if (sections.length === 0) return [];

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
      title: s.trait,
      progress: (progressMap.get(s.id) || 0) / s.questions.length,
      isActive:
        stack[activeIndex]?.type === "question"
          ? stack[activeIndex].sectionId === s.id
          : stack[activeIndex]?.section.id === s.id,
    }));
  }, [activeIndex, stack, sections]);

  /* ================= RENDER ================= */

  // ✅ GLOBAL LOADING STATE (API)
  if (isLoading) {
    return (
      <div className="flex w-full h-[506px] items-center justify-center">
        <LoadingMoneyUi />
      </div>
    );
  }
  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => [...prev, { questionId, answer: value }]);
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <div
      className="
        flex w-full flex-row justify-between
        rounded-[60px]
        px-[52px] py-[61px] 
        bg-[rgba(253,249,240,0.02)]
        backdrop-blur-[50px]
        border border-[#BC9313]/20
      "
    >
      {/* MAIN STACK */}
      <div className="relative flex-1 h-[506px]">
        <AnimatePresence>
          {!isFlowComplete &&
            visibleStack.map((item, index) => {
              const zIndex = 30 - index;
              const offset = index * 42;
              const opacity = 1 - index * 0.4;
              const scale = 1 - index * 0.08;

              return (
                <motion.div
                  key={
                    item.type === "topic"
                      ? `topic-${item.section.id}`
                      : item.question.questionId
                  }
                  initial={{ opacity }}
                  animate={{ opacity }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ zIndex, left: offset, scale }}
                  className="absolute w-full"
                >
                  {item.type === "topic" ? (
                    <TopicContent
                      topicName={item.section.trait}
                      next={goNext}
                    />
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
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <LoadingMoneyUi />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                className="w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <MoneyVibeForm onComplete={() => setSendDataForResults(true)} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* SIDE LIST */}
      <div className="flex items-center w-[30%] justify-center">
        <TopicList topics={topicProgress} />
      </div>
    </div>
  );
};

export default MoneyMainContent;
