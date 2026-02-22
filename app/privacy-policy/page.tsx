import { Privacy } from "@/utils/SvgUtils";
import React from "react";

const page = () => {
  const policySections = [
    {
      title: "Data We Collect",
      points: [
        "Information you provide: Name, email, mobile number.",
        "PAN / DOB (only where legally required).",
        "Preferences, goals, feedback.",
        "Financial data (via AA - with consent): Bank accounts & transactions, Mutual funds, equities, ETFs, Loans, credit cards, fixed deposits.",
        "Technical data: Device and app usage information, Logs and diagnostics.",
      ],
    },
    {
      title: "How We Use Data",
      points: [
        "Generate personalised financial insights.",
        "Enable advisory services (if opted).",
        "Improve product accuracy and security.",
        "Meet legal and regulatory obligations.",
        "We do not sell your data.",
      ],
    },
    {
      title: "Data Sharing",
      points: [
        "Data is shared only with your explicit consent.",
        "With trusted service providers under strict confidentiality.",
        "When legally required.",
        "No advertising or unrelated commercial use.",
      ],
    },
    {
      title: "Data Security & Storage",
      points: [
        "Encryption in transit and at rest.",
        "Restricted access controls.",
        "Secure servers compliant with industry standards.",
      ],
    },
    {
      title: "Your Rights",
      points: [
        "Access or update your data.",
        "Withdraw consent.",
        "Request deletion of your account.",
        "Ask how your data is used.",
        "Contact: tech@twigg.one",
      ],
    },
    {
      title: "Retention",
      points: [
        "Data is retained only as long as required for active services.",
        "Data is retained as required for legal or regulatory purposes.",
        "Thereafter, it is securely deleted or anonymised.",
      ],
    },
    {
      title: "Children's Privacy",
      points: ["Twigg is not intended for users under 18 years."],
    },
    {
      title: "Account Aggregator (AA) Consent Framework",
      points: [
        "Twigg uses India's Account Aggregator (AA) framework, regulated by the Reserve Bank of India (RBI), to access your financial information.",
        "Your financial data is accessed only after you provide explicit consent through a registered Account Aggregator.",
        "Consent is purpose-specific, time-bound, and data-limited.",
        "You will always see what data is being accessed, for what purpose, and for what duration.",
        "Twigg cannot access your data without your approval.",
        "Only the minimum data necessary to provide requested services is accessed.",
        "Twigg does not request blanket or open-ended data access.",
        "You may review, modify, or revoke consent at any time through your Account Aggregator or within the Twigg app.",
        "Upon revocation, Twigg immediately loses access to future data.",
        "Twigg does not store your bank login credentials, PINs, or passwords.",
        "Authentication and data transfer are handled entirely by the AA ecosystem.",
        "Twigg receives read-only access to your data.",
        "We cannot initiate transactions, move funds, or modify accounts.",
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-[140px] sm:mt-[160px] lg:mt-[180px] px-[16px] sm:px-[24px]">
      <div className="flex flex-col gap-[32px] bg-[#FDF9F0] py-[32px] sm:py-[48px] lg:py-[64px] px-[24px] sm:px-[48px] lg:px-[92px] max-w-[1240px] mx-auto rounded-[20px]">
        
        {/* Intro Section */}
        <div className="flex flex-col text-[16px] gap-[42px] sm:text-[18px] lg:text-[20px] font-switzer text-[#152D23] leading-[120%] sm:leading-[115%] lg:leading-[110%] text-justify">
          
          <p className="text-[30px] sm:text-[32px] lg:text-[36px] font-semibold text-[#152D23] font-bricolage leading-[110%]">
            Privacy Policy
          </p>

          <p>
            Last updated: 2026-02-09
            <br />
            <br />
            Twigg is committed to protecting your privacy and personal data, in accordance with applicable Indian laws including the Digital Personal Data Protection Act, 2023.
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="flex flex-col gap-[24px] sm:gap-[28px] lg:gap-[32px]">
          {policySections.map((section, index) => (
            <div key={index} className="flex flex-col gap-[8px]">
              
              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
                {section.title}
              </p>

              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[140%] sm:leading-[135%] lg:leading-[130%] text-justify">
                {section.points.map((point, i) => (
                  <p
                    key={i}
                    className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-[#152D23] before:top-0"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default page;