"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { UpArrow } from "@/utils/SvgUtils";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxBNo2Db1JWc61rBG0rndWyZLMKr2nablXQmL4cuqLyPCWMJkzS10jqgbYPX42jTHeg/exec";

const formFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
];

const floatingCards = [
  // ... (floatingCards unchanged)
  {
    title: "Founding community",
    description:
      "Be part of our founding community and help shape the future of financial wellness.",
    logo: "/form/logo(1).svg",
    positionClasses:
      "top-5 left-0 md:top-30 md:left-[5%] lg:top-[25%] lg:left-[0%]",
    gradientStart: "rgba(21,45,35,0.5)",
    gradientMid: "rgba(38,56,48,0.5)",
    gradientEnd: "rgba(219,215,252,0.5)",
  },
  {
    title: "AI-powered insights",
    description:
      "Blends your income, spending, assets, loans, and money personality.",
    logo: "/form/logo(2).svg",
    positionClasses:
      "top-1/2 right-[-20] -translate-y-1/2 md:right-[5%] lg:top-[45%] lg:right-[5%]",
    gradientStart: "rgba(21,45,35,0.5)",
    gradientMid: "rgba(38,56,48,0.5)",
    gradientEnd: "rgba(219,215,252,0.5)",
  },
  {
    title: "Personalized guidance",
    description:
      "No anxiety, no FOMO - just clear, personalized financial guidance that works for you.",
    logo: "/form/logo(3).svg",
    positionClasses:
      "bottom-5 left-0 md:bottom-40 md:left-[20%] lg:bottom-[25%] lg:left-[10%]",
    gradientStart: "rgba(21,45,35,0.5)",
    gradientMid: "rgba(38,56,48,0.5)",
    gradientEnd: "rgba(219,215,252,0.5)",
  },
];

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const params = new URLSearchParams(
      data as Record<string, string>
    ).toString();
    const targetUrl = `${APPS_SCRIPT_URL}?${params}`;

    try {
      // Use simple fetch with GET request
      const res = await fetch(targetUrl, {
        method: "GET",
        mode: "no-cors", // Use 'no-cors' for simple data submissions to Apps Script
      });

      if (res.status === 200 || res.ok || res.type === "opaque") {
        toast.success("Successfully joined the waitlist!");
        reset();
      } else {
        throw new Error(`Server responded with status: ${res.status}`);
      }
    } catch (error) {
      toast.error(
        `❌ Submission failed. Check your Apps Script URL and deployment.`
      );
      console.error(error);
    }
  };

  const inputClass =
    "w-full h-[56px] px-4 rounded-lg bg-[rgba(253,249,240,0.08)] border border-[rgba(188,147,19,0.25)] text-[#FDF9F0] placeholder-[rgba(253,249,240,0.8)] focus:ring-1 focus:ring-[#BC9313] shadow-[0_108px_43px_rgba(0,0,0,0.01),0_61px_36px_rgba(0,0,0,0.05),0_27px_27px_rgba(0,0,0,0.09),0_7px_15px_rgba(0,0,0,0.1)] font-switzer text-[14px]";

  return (
    <section className="relative max-w-7xl px-5 sm:px-6  mx-auto flex flex-col bg-[#152D23]">
      {/* Header - UNCHANGED */}
      <header className="mt-12 flex justify-center lg:justify-start items-center z-20">
        <Image
          src="/form/TwiggLogo1.svg"
          alt="Twigg Logo"
          width={174}
          height={42}
        />
      </header>

      {/* Form & Image Section - UNCHANGED */}
      <div className="w-full flex flex-col lg:flex-row items-center mt-12 lg:mt-[84px] gap-12 lg:gap-0">
        {/* Form - UNCHANGED */}
        <div className="flex flex-col gap-12 w-full lg:w-1/2 items-center lg:items-start">
          <div className="max-w-[452px] flex flex-col gap-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bricolage font-semibold text-[#FDF9F0] leading-[110%]">
              Join the <span className="text-[#BC9313]">Waitlist!</span>
            </h1>
            <p className="text-[rgba(253,249,240,0.8)] text-base sm:text-lg lg:text-[24px] font-switzer font-normal leading-[120%]">
              Be the first to experience Twigg,
              <br />
              your all-in-one money companion.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full sm:w-[80%] lg:w-[70%] gap-6 sm:gap-8"
          >
           {formFields.map((field) => (
  <div key={field.id} className="flex flex-col gap-2 w-full relative">
    <label
      htmlFor={field.id}
      className="text-[#FDF9F0] font-switzer font-normal text-[12px] sm:text-[14px]"
    >
      {field.label}
    </label>

    <input
      id={field.id}
      type={field.type}
      placeholder={field.placeholder}
      {...register(field.id as keyof FormData, {
        required: `${field.label} is required`,
        ...(field.id === "email" && {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address"
          }
        }),
        ...(field.id === "phone" && {
          pattern: {
            value: /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/,
            message: "Please enter a valid phone number"
          },
          minLength: {
            value: 10,
            message: "Phone number must be at least 10 digits"
          }
        }),
      })}
      maxLength={field.id === "phone" ? 13 : undefined}
      onInput={
        field.id === "phone"
          ? (e: React.FormEvent<HTMLInputElement>) => {
              const input = e.currentTarget;
              let value = input.value.replace(/[^\d+]/g, "");
              
              // Remove extra + signs (keep only the first one)
              if (value.indexOf("+") > 0) {
                value = value.replace(/\+/g, "");
              }
              
              // Format phone number
              if (value.startsWith("+")) {
                // International format: +1234567890 (max 13 chars)
                if (value.length > 13) {
                  value = value.slice(0, 13);
                }
              } else {
                // US format: 1234567890 (max 10 digits)
                if (value.length > 10) {
                  value = value.slice(0, 10);
                }
              }
              
              input.value = value;
            }
          : undefined
      }
      className={inputClass}
    />

    {errors[field.id as keyof FormData] && (
      <span className="text-[#FF6B6B] font-switzer text-[12px] mt-1">
        {errors[field.id as keyof FormData]?.message}
      </span>
    )}
  </div>
))}

            <div className="flex justify-center lg:justify-start">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="bg-[#BC9313] cursor-pointer text-white w-[165px] sm:w-[200px] md:w-[239px] h-[40px] sm:h-[48px] md:h-[54px] rounded-full font-semibold text-[14px] sm:text-[16px] md:text-lg shadow-xl flex items-center justify-center relative overflow-hidden"
              >
                <motion.span
                  variants={{
                    rest: {
                      x: 0,
                      transition: { duration: 0.2, ease: "easeOut" },
                    },
                    hover: {
                      x: -10,
                      transition: { duration: 0.2, ease: "easeOut" },
                    },
                  }}
                  className="transition-transform"
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </motion.span>
                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                      x: 20,
                      transition: { duration: 0.2, ease: "easeOut" },
                    },
                    hover: {
                      opacity: 1,
                      x: 10,
                      transition: { duration: 0.2, ease: "easeOut" },
                    },
                  }}
                  className="w-5 h-5 text-white flex-shrink-0 absolute right-10"
                >
                  <UpArrow right />
                </motion.div>
              </motion.button>
            </div>
          </form>
        </div>

        {/* Image & Floating Cards - UNCHANGED */}
        <div className="w-full lg:w-1/2 relative h-full flex justify-center items-center">
          <div
            className="absolute"
            style={{
              width: 400,
              height: 400,
              background: "rgba(188, 147, 19, 0.3)",
              filter: "blur(100px)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          ></div>
          <Image
            src="/form.png"
            alt="form"
            width={300}
            height={368}
            className="object-contain relative z-10 sm:w-[60%] md:w-[80%]"
            style={{
              filter: `
            drop-shadow(0px 16px 34px rgba(0,0,0,0.23))
            drop-shadow(0px 62px 62px rgba(0,0,0,0.2))
            drop-shadow(0px 140px 84px rgba(0,0,0,0.12))
            drop-shadow(0px 248px 99px rgba(0,0,0,0.03))
          `,
            }}
          />
          {floatingCards.map((card, i) => (
            <div
              key={i}
              className={`absolute w-44 h-20 md:w-56 md:h-24 lg:w-[220px] lg:h-[90px] rounded-[12px] overflow-hidden ${card.positionClasses}`}
              style={{
                zIndex: 20,
              }}
            >
              <div className="absolute inset-0 backdrop-blur-[10px] rounded-[12px] bg-[rgba(31,60,48,0.7)]"></div>
              <div
                className="absolute -left-[8px] top-0  rounded-[12px] blur-[40px] pt-[16px] pb-[28px] px-[16px]"
                style={{
                  background: `linear-gradient(135deg, ${card.gradientStart} 0%, ${card.gradientMid} 42%, ${card.gradientEnd} 100%)`,
                }}
              ></div>
              <div className="relative flex flex-col gap-1 p-2 md:p-3 z-10">
                <div className="flex items-center gap-1">
                  <Image
                    src={card.logo}
                    alt={card.title}
                    width={20}
                    height={12}
                  />
                  <h3 className="font-switzer font-semibold text-[13px] md:text-[14px] text-[#BC9313] truncate">
                    {card.title}
                  </h3>
                </div>
                <p className="font-switzer text-[9px] md:text-[10px] text-[#FDF9F0]/80 leading-tight">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
