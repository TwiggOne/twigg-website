"use client"
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { backendUrl } from "@/lib/config";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  
  const onSubmit = async (data: FormData) => {
    try {
      
      const res = await axios.post(`${backendUrl}/api/waitlist/join`, data);
      if (res.status === 200 || res.status === 201) {
        toast.success(" Successfully joined the waitlist!");
        reset();
      } else {
        throw new Error("Unexpected server response");
      }
    } catch (error) {
      const message = error || "Something went wrong.";
      toast.error(`❌ ${message}`);
    }
  };
  return (
    <section className="relative w-full h-[939px] bg-[#152D23] flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start px-6 lg:px-0 py-12 lg:py-20 gap-8 lg:gap-16">

      {/* Header */}
      <header className="absolute top-12 left-6 lg:top-[52px] lg:left-[120px] flex items-center z-20">
        <Image src="/form/TwiggLogo1.svg" alt="Twigg Logo" width={174} height={42} />
      </header>

      <div className="w-full flex flex-col items-center lg:items-start lg:w-auto mt-12 lg:mt-[118px] lg:ml-[120px]">
        <div className="flex flex-col max-w-[452px] mx-auto lg:mx-0">
          {/* Title & Subtitle */}
          <div className="space-y-4 max-w-[452px] mb-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-[56px] font-bricolage font-semibold text-[#FDF9F0] leading-[67px]">
              Join the <span className="text-[#BC9313]">Waitlist!</span>
            </h1>
            <p className="text-[rgba(253,249,240,0.8)] text-lg lg:text-[24px] font-switzer font-normal leading-[29px] max-w-[370px] mx-auto lg:mx-0">
              Be the first to experience Twigg, your all-in-one money companion.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-6 max-w-[400px] gap-6 w-full">
            {/* Name */}
            <div className="flex flex-col w-full relative">
              <label
                htmlFor="name"
                className="text-[#FDF9F0] font-switzer font-normal text-[16px] leading-[21px] mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                className="w-full h-[56px] px-4 rounded-lg bg-[rgba(253,249,240,0.08)] border border-[rgba(188,147,19,0.25)] text-[#FDF9F0] placeholder-[rgba(253,249,240,0.8)] focus:ring-2 focus:ring-[#BC9313] shadow-[0_108px_43px_rgba(0,0,0,0.01),0_61px_36px_rgba(0,0,0,0.05),0_27px_27px_rgba(0,0,0,0.09),0_7px_15px_rgba(0,0,0,0.1)] font-switzer text-[16px]"
              />
              {errors.name && (
                <span className="text-[#FF6B6B] font-switzer text-[12px] mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col w-full relative">
              <label
                htmlFor="email"
                className="text-[#FDF9F0] font-switzer font-normal text-[16px] leading-[21px] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                })}
                className="w-full h-[56px] px-4 rounded-lg bg-[rgba(253,249,240,0.08)] border border-[rgba(188,147,19,0.25)] text-[#FDF9F0] placeholder-[rgba(253,249,240,0.8)] focus:ring-2 focus:ring-[#BC9313] shadow-[0_108px_43px_rgba(0,0,0,0.01),0_61px_36px_rgba(0,0,0,0.05),0_27px_27px_rgba(0,0,0,0.09),0_7px_15px_rgba(0,0,0,0.1)] font-switzer text-[16px]"
              />
              {errors.email && (
                <span className="text-[#FF6B6B] font-switzer text-[12px] mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col w-full relative">
              <label
                htmlFor="phone"
                className="text-[#FDF9F0] font-switzer font-normal text-[16px] leading-[21px] mb-2"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full h-[56px] px-4 rounded-lg bg-[rgba(253,249,240,0.08)] border border-[rgba(188,147,19,0.25)] text-[#FDF9F0] placeholder-[rgba(253,249,240,0.8)] focus:ring-2 focus:ring-[#BC9313] shadow-[0_108px_43px_rgba(0,0,0,0.01),0_61px_36px_rgba(0,0,0,0.05),0_27px_27px_rgba(0,0,0,0.09),0_7px_15px_rgba(0,0,0,0.1)] font-switzer text-[16px]"
              />
              {errors.phone && (
                <span className="text-[#FF6B6B] font-switzer text-[12px] mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#BC9313] cursor-pointer mt-[46px] text-white w-[265px] h-[54px] rounded-full font-switzer font-semibold text-[18px] shadow-xl flex items-center justify-center overflow-hidden relative gap-[48px] ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              initial="rest"
              whileHover={isSubmitting ? "rest" : "hover"}
              animate="rest"
            >
              <motion.span
                variants={{
                  rest: {
                    x: 10,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                  hover: {
                    x: -10,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
                className="transition-transform"
              > 
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </motion.span>
              {!isSubmitting && (
                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                      x: 0,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    },
                    hover: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    },
                  }}
                  className="w-5 h-5 text-white flex-shrink-0"
                >
                  <ArrowRight />
                </motion.div>
              )}
            </motion.button>
            
          </form>
        </div>
      </div>


    
      {/* Right Section - Phone Mockup & Cards */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[600px] lg:min-h-[700px] lg:pr-[120px]">
        {/* Phone Mockup - Centered */}
        <Image
      src="/form/Waitlist.svg"
      alt="Waitlist Illustration"
      width={412}
      height={504}
      className="w-full h-full object-cover rotate-[2.24deg]"
      style={{
        boxShadow: `
          0px 16px 34px 0px #0000003B,
          0px 62px 62px 0px #00000033,
          0px 140px 84px 0px #0000001F,
          0px 248px 99px 0px #00000008,
          0px 388px 109px 0px #00000000
        `
      }}
    />

        {/* Floating Cards Container */}
        <div className="hidden lg:block">
          {/* Floating Card 1: Founding Community */}
          <div className="absolute left-[106px] top-[252px] w-[280px] h-[119px] rounded-[15px] overflow-hidden">
            
            <div className="absolute inset-0 backdrop-blur-[12.5px] rounded-[15px] bg-[rgba(31,60,48,0.7)]"></div>
            <div className="absolute w-[361px] h-[344px] -left-[9px] top-0
              bg-gradient-to-br from-[rgba(30,51,42,0.5)] via-[rgba(38,56,48,0.5)] to-[rgba(226,187,66,0.5)]
              blur-[50px] rounded-[15px]"></div>
            <div className="relative flex flex-col gap-2 p-5 z-10">
              <div className="flex items-center gap-3">
              <Image src="/form/logo(1).svg" alt="Handshake" width={28} height={22} />
                <h3 className="font-switzer font-semibold text-[16px] text-[#BC9313]">
                  Founding community
                </h3>
              </div>
              <p className="font-switzer text-[12px] text-[#FDF9F0]/80">
                Be part of our founding community and help shape the future of financial wellness.
              </p>
            </div>
          </div>

          {/* Floating Card 2: AI-powered insights */}
          <div className="absolute left-[549px] top-[360px] w-[254px] h-[115px] rounded-[15px] overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-[12.5px] rounded-[15px] bg-[rgba(31,60,48,0.7)]"></div>
            <div className="absolute w-[361px] h-[344px] -left-[9px] top-0
              bg-gradient-to-br from-[rgba(30,51,42,0.5)] via-[rgba(38,56,48,0.5)] to-[rgba(228,215,174,0.5)]
              blur-[50px] rounded-[15px]"></div>
            <div className="relative flex flex-col gap-2 p-5 z-10">
              <div className="flex items-center gap-3">
              <Image src="/form/logo(2).svg" alt="Handshake" width={28} height={22} />
                <h3 className="font-bricolage font-bold text-[16px] text-[#BC9313]">
                  AI-powered insights
                </h3>
              </div>
              <p className="font-switzer text-[12px] text-[#FDF9F0]/80">
                Blends your income, spending, assets, loans, and money personality.
              </p>
            </div>
          </div>

          {/* Floating Card 3: Personalized guidance */}
          <div className="absolute left-[192px] top-[512px] w-[292px] h-[115px] rounded-[15px] overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-[12.5px] rounded-[15px] bg-[rgba(31,60,48,0.7)]"></div>
            <div className="absolute w-[361px] h-[344px] -left-[10px] -top-[156px]
              bg-gradient-to-br from-[rgba(30,51,42,0.5)] via-[rgba(38,56,48,0.5)] to-[rgba(219,215,252,0.5)]
              blur-[50px] rounded-[15px]"></div>
            <div className="relative flex flex-col gap-2 p-5 z-10">
              <div className="flex items-center gap-3">
                <Image src="/form/logo(3).svg" alt="Handshake" width={28} height={22} />
                <h3 className="font-switzer font-semibold text-[16px] text-[#BC9313]">
                  Personalized guidance
                </h3>
              </div>
              <p className="font-switzer text-[12px] text-[#FDF9F0]/80">
                No anxiety, no FOMO - just clear, personalized financial guidance that works for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
