"use client";

import { TeamCard } from "@/components/ui/TeamMemberCard";
import React from "react";

// 🧑‍💼 Main Core Team
const teamMembers = [
  { name: "Utkarsh Vijay", role: "Co-Founder", image: "/team/team_member.png" },
  { name: "Riya Sharma", role: "AI Engineer", image: "/team/team_member.png" },
  {
    name: "Arjun Mehta",
    role: "Product Designer",
    image: "/team/team_member.png",
  },
];

// 👩‍💻 Additional Members (for smaller cards)
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
        {/* Heading */}
        <div className="flex flex-col gap-[16px] text-center">
          <div className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold leading-[110%] text-[#FDF9F0] font-bricolage">
            The People <span className="text-[#BC9313]">Powering Twigg</span>
          </div>
          <p className="text-[18px] sm:text-[20px] md:text-[24px] text-[#FDF9F0]/80 leading-[140%] font-switzer">
            Turning money chaos into clarity, <br className="" />
            one breakthrough at a time
          </p>
        </div>

        {/* Core Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[32px] sm:gap-[48px] md:gap-[64px] place-items-center">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>

      {/* 🔸 Additional Team Members Section */}
      <div className="relative flex items-center justify-center w-full px-4">
        {/* Left Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#BC9313]/80 to-transparent flex-1 max-w-[150px] sm:max-w-[200px] md:max-w-[30%]" />

        {/* Text */}
        <p className="text-[20px] sm:text-[24px] md:text-[32px] text-[#FDF9F0] font-bricolage font-medium text-center px-4 whitespace-nowrap">
          Team Members
        </p>

        {/* Right Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#BC9313]/80 to-transparent flex-1 max-w-[150px] sm:max-w-[200px] md:max-w-[30%]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-[32px] sm:gap-[40px] md:gap-[56px] place-items-center">
        {smallTeamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            smallCard // 👈 renders compact version
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
