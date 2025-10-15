"use client";

import { TeamCard } from "@/components/ui/TeamMemberCard";
import { BulletLogo, LinkedIng } from "@/utils/SvgUtils";
import React from "react";

// 🧑‍💼 Core Team
const teamMembers = [
  {
    name: "Utkarsh Vijay",
    role: "Co-Founder",
    image: "/team/team_member.png",
    experiences: [
      "Co-founder, Wuxel Financial Services (₹60Cr+ AUA, 200+ active clients).",
      "Built AI-powered fintech platform for SME clients. development",
      "Managed cross-functional teams of 15+ engineers and analysts.",
      "Speaker at multiple fintech and startup conferences.",
    ],
  },
  {
    name: "Riya Sharma",
    role: "AI Engineer",
    image: "/team/team_member.png",
    experiences: [
      "Developed predictive analytics models for financial planning.",
      "Implemented NLP pipelines for customer support automation.",
      "Mentored junior AI engineers in the team. development development",
      "Published research on AI-based investment risk scoring.",
    ],
  },
  {
    name: "Arjun Mehta",
    role: "Product Designer",
    image: "/team/team_member.png",
    experiences: [
      "Designed intuitive interfaces for web and mobile apps.",
      "Led user research and usability testing cycles. development",
      "Created design systems for scalable product development.",
      "Collaborated with engineering to optimize UX performance.",
    ],
  },
];

// 👩‍💻 Additional Members (smaller cards)
const smallTeamMembers = [
  {
    name: "Priya Nair",
    role: "Frontend Developer",
    image: "/team/team_member.png",
  },
  {
    name: "Aditya Rao",
    role: "Backend Engineer",
    image: "/team/team_member.png",
  },
  {
    name: "Sneha Kapoor",
    role: "UX Researcher",
    image: "/team/team_member.png",
  },
  {
    name: "Rohit Sharma",
    role: "Marketing Lead",
    image: "/team/team_member.png",
  },
  { name: "Aman Gupta", role: "Data Analyst", image: "/team/team_member.png" },
  { name: "Ishita Verma", role: "QA Engineer", image: "/team/team_member.png" },
  {
    name: "Nikhil Jain",
    role: "Mobile Developer",
    image: "/team/team_member.png",
  },
  {
    name: "Simran Kaur",
    role: "Product Intern",
    image: "/team/team_member.png",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col mt-[120px] items-center gap-[80px] mb-[80px] px-4 sm:px-6 md:px-10">
      {/* 🔹 Heading + Core Team Section */}
      <div className="flex flex-col gap-[64px] w-full max-w-[1200px]">
        <div className="flex flex-col gap-[16px] text-center">
          <div className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold leading-[110%] text-[#FDF9F0] font-bricolage">
            The People <span className="text-[#BC9313]">Powering Twigg</span>
          </div>
          <p className="text-[18px] sm:text-[20px] md:text-[24px] text-[#FDF9F0]/80 leading-[140%] font-switzer">
            Turning money chaos into clarity, <br /> one breakthrough at a time
          </p>
        </div>

        {/* Core Team Grid */}
        <div className="flex justify-center w-full mx-auto">
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap justify-center gap-[32px] sm:gap-[48px] md:gap-[64px]">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  isFlippable={true}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  backContent={
                    <div className="py-[41px] w-full px-[21px] flex flex-col gap-[16px]">
                      <div className="flex w-full flex-row border-b border-[#BC9313] justify-between items-center pb-[16px] mb-[41px]">
                        <div className="flex flex-col gap-[2px]">
                          <p className="text-[18px] font-medium font-bricolage text-[#FDF9F0] leading-[110%]">
                            {member.name}
                          </p>
                          <p className="text-[12px] font-medium font-switzer text-[#FDF9F0]/80 leading-[110%]">
                            {member.role}
                          </p>
                        </div>
                        <div className="bg-[#214838]/50 border border-[#FDF9F0]/20 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                          <div className="w-[11px] h-[11px]">
                            <LinkedIng />
                          </div>
                        </div>
                      </div>

                      {/* Map experiences */}
                      {member.experiences.map((exp, i) => (
                        <div
                          key={i}
                          className="flex flex-row gap-[8px]  items-center"
                        >
                          <div className="w-[20px] h-[20px]">
                            <BulletLogo />
                          </div>
                          <p className="text-[11px] font-switzer text-white leading-[130%]">
                            {exp}
                          </p>
                        </div>
                      ))}
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Members Section */}
      <div className="relative flex items-center justify-center w-full px-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#BC9313]/80 to-transparent flex-1 max-w-[150px] sm:max-w-[200px] md:max-w-[30%]" />
        <p className="text-[20px] sm:text-[24px] md:text-[32px] text-[#FDF9F0] font-bricolage font-medium text-center px-4 whitespace-nowrap">
          Team Members
        </p>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#BC9313]/80 to-transparent flex-1 max-w-[150px] sm:max-w-[200px] md:max-w-[30%]" />
      </div>

      {/* Additional Members Grid */}
      <div className="flex flex-wrap justify-center gap-[32px] sm:gap-[40px] md:gap-[56px] max-w-7xl">
        {smallTeamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            smallCard
            isFlippable={false}
            backContent={<div />} // placeholder
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
