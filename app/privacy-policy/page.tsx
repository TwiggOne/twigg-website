import { Privacy } from "@/utils/SvgUtils";
import React from "react";

type Subsection = {
  subtitle: string;
  points: string[];
  prefix?: string;
};

type PolicySection = {
  title: string;
  intro?: string;
  points?: string[];
  subsections?: Subsection[];
};

const page = () => {
  const policySections: PolicySection[] = [
    {
      title: "Data We Collect",
      subsections: [
        {
          subtitle: "Information you provide",
          points: [
            "Name, email, mobile number.",
            "PAN / DOB (only where legally required).",
            "Preferences, goals, feedback.",
          ],
        },
        {
          subtitle: "Financial data (via AA – with consent)",
          points: [
            "Bank accounts & transactions.",
            "Mutual funds, equities, ETFs.",
            "Loans, credit cards, fixed deposits.",
          ],
        },
        {
          subtitle: "Technical data",
          points: [
            "Device and app usage information.",
            "Logs and diagnostics.",
          ],
        },
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
        "With third-party AI services, where you have separately consented (see Section 8).",
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
      title: "Use of Third-Party AI Services",
      intro:
        "Twigg uses Google Gemini, an AI service provided by Google LLC, to power certain features including personalised video insights and the Twigg AI chat assistant.",
      subsections: [
        {
          subtitle: "What data is sent",
          prefix:
            "When you use an AI-powered feature, the following financial data may be sent to Google Gemini to generate your response:",
          points: [
            "Bank transaction history and spending by category.",
            "Investment holdings (mutual funds, stocks, ETFs, fixed deposits).",
            "Insurance coverage details (health and term).",
          ],
        },
        {
          subtitle: "How it is used",
          points: [
            "This data is used solely to generate the response shown to you.",
            "Google Gemini does not retain your data after processing.",
            "It is not used to train AI models or shared with any other party.",
          ],
        },
        {
          subtitle: "Your consent",
          points: [
            "AI-powered features are opt-in.",
            "Before your data is sent to Google Gemini for the first time, you will be shown a clear disclosure and asked to provide explicit consent.",
            "You may withdraw this consent at any time from Settings → AI Data Sharing.",
            "Withdrawing consent disables AI-powered features but does not affect your account, linked financial data, or any other Twigg functionality.",
          ],
        },
        {
          subtitle: "Data protection",
          points: [
            "Google LLC provides data protection standards equivalent to those required under applicable Indian law, including the Digital Personal Data Protection Act, 2023.",
            "For details, refer to Google's Privacy Policy at policies.google.com/privacy.",
          ],
        },
        {
          subtitle: "Change of AI provider",
          points: [
            "If Twigg changes its AI service provider in future, we will notify you in-app and request fresh consent before any data is shared with the new provider.",
          ],
        },
      ],
    },
    {
      title: "Account Aggregator (AA) Consent Framework",
      intro:
        "Twigg uses India's Account Aggregator (AA) framework, regulated by the Reserve Bank of India (RBI), to access your financial information. Access to your financial data is governed by the following principles:",
      subsections: [
        {
          subtitle: "Explicit & Informed Consent",
          points: [
            "Your financial data is accessed only after you provide explicit consent through a registered Account Aggregator.",
            "Consent is purpose-specific, time-bound, and data-limited.",
            "You will always see what data is being accessed, for what purpose, and for what duration.",
            "Twigg cannot access your data without your approval.",
          ],
        },
        {
          subtitle: "Data Minimisation",
          points: [
            "Only the minimum data necessary to provide requested services is accessed.",
            "Twigg does not request blanket or open-ended data access.",
          ],
        },
        {
          subtitle: "Consent Control & Revocation",
          points: [
            "You may review, modify, or revoke consent at any time through your Account Aggregator or within the Twigg app.",
            "Upon revocation, Twigg immediately loses access to future data.",
          ],
        },
        {
          subtitle: "No Credential Storage",
          points: [
            "Twigg does not store your bank login credentials, PINs, or passwords.",
            "Authentication and data transfer are handled entirely by the AA ecosystem.",
          ],
        },
        {
          subtitle: "Read-Only Access",
          points: [
            "Twigg receives read-only access to your data.",
            "We cannot initiate transactions, move funds, or modify accounts.",
          ],
        },
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
            Last updated: 9th February 2026
            <br />
            <br />
            Twigg is committed to protecting your privacy and personal data, in
            accordance with applicable Indian laws including the Digital Personal
            Data Protection Act, 2023.
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="flex flex-col gap-[24px] sm:gap-[28px] lg:gap-[32px]">
          {policySections.map((section, index) => (
            <div key={index} className="flex flex-col gap-[12px]">

              <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
                {index + 1}. {section.title}
              </p>

              {section.intro && (
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[140%] text-justify">
                  {section.intro}
                </p>
              )}

              {section.points && (
                <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[140%] text-justify">
                  {section.points.map((point, i) => (
                    <p
                      key={i}
                      className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-[#152D23] before:top-0"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              )}

              {section.subsections && (
                <div className="flex flex-col gap-[16px]">
                  {section.subsections.map((sub: Subsection, si: number) => (
                    <div key={si} className="flex flex-col gap-[6px]">
                      <p className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                        {sub.subtitle}
                      </p>
                      {sub.prefix && (
                        <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[140%] text-justify mb-1">
                          {sub.prefix}
                        </p>
                      )}
                      <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[140%] text-justify">
                        {sub.points.map((point, pi) => (
                          <p
                            key={pi}
                            className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-[#152D23] before:top-0"
                          >
                            {point}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default page;