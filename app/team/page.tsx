"use client";

import { TeamCard } from "@/components/ui/TeamMemberCard";
import { BulletLogo, LinkedIng } from "@/utils/SvgUtils";
import React from "react";

const teamMembers = [
  {
    name: "Utkarsh Vijay",
    role: "Co-Founder",
    image: "/team/Utkarsh.png",
    linkedIn: "https://www.linkedin.com/in/uvijay/",
    experiences: [
      "12+ years in strategy, product, and technology across government & private sectors",
      "Scaled Samagra from $2.5M / 15 members → $8M / 125 members as core leadership",
      "Co-founded Indian Lawyers Forum, built 150K+ community, 15K+ paid subscribers",
      "Ex-BCG & Indus Valley Partners; Computer Science Engineering from NIT Jalandhar",
    ],
  },
  {
    name: "Aditya Bansal",
    role: "Co-Founder",
    image: "/team/Aditya.png",
    linkedIn: "https://www.linkedin.com/in/adityabansal1989/",

    experiences: [
      "10+ years in equity research, investment advisory & wealth management",
      "Co-founder, Wuxel Financial Services (₹60Cr+ AUA, 200+ active clients)",
      "Ex-Goldman Sachs, KPMG & SEBI — spanning IB, advisory, and regulation",
      "MDI Gurgaon (MBA Finance), Thapar University (B.Tech Electronics)",
    ],
  },
  {
    name: "Saurabh Taneja",
    role: "Chief Technology Advisor",
    image: "/team/Saurabh.png",
    linkedIn: "https://www.linkedin.com/in/saurabh-taneja-65937493/",

    experiences: [
      "12+ years in product development, driving innovation across startups and enterprises",
      "Extensive experience in the fintech ecosystem — 4+ years across Stripe, Stitch Money",
      "Co-founded Joysquare, a co-living startup for young professionals in Delhi/NCR",
      "Computer Science Engineering from Maharaja Surajmal Institute of Technology (MSIT)",
    ],
  },
  {
    name: "Ayush Sharma",
    role: "Investment Partner",
    image: "/team/Ayush.png",
    linkedIn: "https://www.linkedin.com/in/ayush-sharma-80b58b7b/",

    experiences: [
      "Expertise in Equity Research and Investment Advisory",
      "Dual SEBI Certified Equity Professional (Investment Advisor & Research Analyst)",
      "Ex-Accenture Strategy, led multiple engagements with Fortune 500 clients",
      "MBA Finance - IIFT Delhi, B.Tech Computer Science Engineering - LNMIIT Jaipur",
    ],
  }
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
            We’ve built for millions before.
            <br /> Now we’re building for you.
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
                  linkedin={member.linkedIn}
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
                        <a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="bg-[#214838]/50 cursor-pointer border border-[#FDF9F0]/20 h-[40px] w-[40px] rounded-full flex items-center justify-center">
                            <div className="w-[11px] h-[11px] ">
                              <LinkedIng />
                            </div>
                          </div>
                        </a>
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
                          <p className="text-[12px] font-switzer text-white leading-[130%]">
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
      {/* <div className="relative flex items-center justify-center w-full px-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#BC9313]/80 to-transparent flex-1 max-w-[150px] sm:max-w-[200px] md:max-w-[30%]" />
        <p className="text-[20px] sm:text-[24px] md:text-[32px] text-[#FDF9F0] font-bricolage font-medium text-center px-4 whitespace-nowrap">
          Team Members
        </p>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#BC9313]/80 to-transparent flex-1 max-w-[150px] sm:max-w-[200px] md:max-w-[30%]" />
      </div> */}

      {/* Additional Members Grid */}
      {/* <div className="flex flex-wrap justify-center gap-[32px] sm:gap-[40px] md:gap-[56px] max-w-7xl">
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
      </div> */}
    </div>
  );
};

export default Page;
