import React from "react";
import Link from "next/link";

const TermsConditionPage = () => {
  return (
    <div className="min-h-screen mt-[140px] sm:mt-[160px] lg:mt-[180px] px-[16px] sm:px-[24px] pb-[80px]">
      {/* Main Card */}
      <div className="flex flex-col gap-[32px] bg-[#FDF9F0] py-[32px] sm:py-[48px] lg:py-[64px] px-[24px] sm:px-[48px] lg:px-[92px] max-w-[1240px] mx-auto rounded-[20px]">
        {/* Intro Section */}
        <div className="flex flex-col text-[16px] sm:text-[18px] gap-[24px] lg:text-[20px] font-switzer text-[#152D23] leading-[140%] text-justify">
          <h1 className="text-[30px] sm:text-[32px] lg:text-[36px] font-semibold text-[#152D23] font-bricolage leading-[110%]">
            Terms & Conditions
          </h1>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-[#152D23]/70">
            Last updated: 26 September 2026
          </p>
          <div className="flex flex-col gap-[12px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
            <p>
              Welcome to Twigg. Twigg is a platform owned and operated by
              Aadyantax Technologies Pvt. Ltd. (“Twigg”, “we”, “us”, “our”).
            </p>
            <p>
              By signing up for, accessing or using Twigg, you agree to these
              Terms & Conditions (“Terms”) and to our{" "}
              <Link
                href="/privacy-policy"
                className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
              >
                Privacy Policy
              </Link>
              . Please read them carefully. If you do not agree, please do not
              use Twigg.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="flex flex-col gap-[28px] sm:gap-[32px] lg:gap-[36px]">
          {/* 1. Eligibility */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              1. Eligibility
            </h2>
            <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                You must be 18 years or older to use Twigg.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                You must be an Indian resident with a valid mobile number and/or
                email address.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                By using Twigg, you confirm that all information you provide is
                true and accurate.
              </p>
            </div>
          </section>

          {/* 2. Account Responsibilities */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              2. Account Responsibilities
            </h2>
            <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                You are responsible for keeping your account, device and
                one-time passwords (OTPs) confidential.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                You are responsible for any activity that occurs under your
                account.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Please tell us immediately at{" "}
                <a
                  href="mailto:contact@twigg.one"
                  className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
                >
                  contact@twigg.one
                </a>{" "}
                if you suspect unauthorised use of your account.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Twigg may suspend accounts that violate these Terms.
              </p>
            </div>
          </section>

          {/* 3. Our Services */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              3. Our Services
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              Twigg helps you see and understand your finances in one place.
              Depending on what you choose to connect and use, this includes:
            </p>
            <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Bank accounts, investments, loans, credit cards and deposits
                linked through the RBI-regulated Account Aggregator framework.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Credit card statements read from your Gmail, if you choose to
                connect it.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Transaction categorisation, spending insights and payment
                reminders.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                AI-powered insights and chat, if you opt in.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Investment advisory services from our SEBI-registered partner,
                if you opt in.
              </p>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%] pt-1">
              Twigg has read-only access to your financial data. We cannot
              initiate transactions, move funds, make payments or modify your
              accounts on your behalf.
            </p>
          </section>

          {/* 4. Connecting Your Data */}
          <section className="flex flex-col gap-[14px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              4. Connecting Your Data
            </h2>

            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Account Aggregator
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Financial data from your banks and other institutions is fetched
                only with your explicit consent, given through a registered
                Account Aggregator. You can review or revoke this consent at any
                time through your Account Aggregator or within the Twigg app.
              </p>
            </div>

            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Gmail (optional)
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                If you connect Gmail, Twigg will read only credit card statement
                emails and their attachments from recognised card issuers, as
                described in Section 10 of our Privacy Policy. You can
                disconnect Gmail at any time in Settings or from your Google
                Account. When you disconnect, all data obtained through Gmail is
                deleted immediately.
              </p>
            </div>

            <div className="flex flex-col gap-[6px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Accuracy of data
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Your data comes from third parties, including banks, card
                issuers, Account Aggregators and your email provider. Twigg does
                not guarantee that this data is complete, accurate or up to
                date, and is not responsible for errors or delays in data
                provided by these third parties.
              </p>
            </div>
          </section>

          {/* 5. Use of AI */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              5. Use of AI
            </h2>
            <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p>
                <strong className="font-semibold text-[#152D23]">
                  Transaction categorisation:
                </strong>{" "}
                Twigg uses third-party AI providers to categorise your
                transactions as part of the core service, as described in
                Section 8 of our Privacy Policy. By accepting these Terms, you
                agree to this processing.
              </p>
              <p>
                <strong className="font-semibold text-[#152D23]">
                  AI insights and chat:
                </strong>{" "}
                These features are opt-in and require your separate consent,
                which you can withdraw at any time from Settings → AI Data
                Sharing.
              </p>
              <p>
                <strong className="font-semibold text-[#152D23]">
                  Limitations:
                </strong>{" "}
                AI-generated categories, insights and responses may occasionally
                be inaccurate or incomplete. You can correct categories in the
                app. Please verify important information before relying on it.
              </p>
            </div>
          </section>

          {/* 6. Payment Reminders */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              6. Payment Reminders
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              Twigg may remind you about credit card payment due dates based on
              your statements. These reminders are a convenience only. You
              remain responsible for paying your bills on time, and Twigg is not
              liable for any late fees, interest or charges if a reminder is
              missed, delayed or based on incomplete data.
            </p>
          </section>

          {/* 7. Not Financial Advice */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              7. Not Financial Advice
            </h2>
            <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p>
                Unless you opt in to advisory services, the insights, categories
                and information in Twigg are for general information only. They
                are not investment, tax, legal or financial advice.
              </p>
              <p>
                Investment advisory services on Twigg are provided by Ayush
                Sharma, a SEBI-registered Investment Adviser (Registration No.
                INA000020475), under a separate agreement that you accept when
                you opt in. Those services are governed by that agreement and
                applicable SEBI regulations.
              </p>
              <p>
                Investments are subject to market risks. Past performance does
                not guarantee future returns.
              </p>
            </div>
          </section>

          {/* 8. Communications */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              8. Communications
            </h2>
            <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p>
                By using Twigg, you agree to receive service messages about your
                account, such as OTPs, security alerts and payment reminders, by
                SMS, email, push notification or WhatsApp.
              </p>
              <p>
                Promotional updates on WhatsApp are sent only if you opt in. You
                can opt out at any time.
              </p>
            </div>
          </section>

          {/* 9. Acceptable Use */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              9. Acceptable Use
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              Twigg is intended for personal, lawful and non-commercial use. You
              agree not to:
            </p>
            <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Use Twigg for any fraudulent or unlawful purpose.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Connect accounts or email addresses that do not belong to you,
                or that you are not authorised to access.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Attempt to access, reverse-engineer, disrupt or overload Twigg’s
                systems.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Scrape, copy or resell any part of the service.
              </p>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%] pt-1">
              Violating these Terms may result in immediate suspension or
              termination of your access.
            </p>
          </section>

          {/* 10. Intellectual Property */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              10. Intellectual Property
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              All content, design, software, trademarks and branding on Twigg
              belong to Aadyantax Technologies Pvt. Ltd. or its licensors. You
              may not copy, modify or distribute them without our written
              permission. Your financial data remains yours.
            </p>
          </section>

          {/* 11. Third-Party Services */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              11. Third-Party Services
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              Twigg relies on third-party services, including Account
              Aggregators, banks, Google, AI providers and cloud hosting
              providers. Your use of those services may also be governed by
              their own terms. Twigg is not responsible for their availability,
              accuracy or conduct.
            </p>
          </section>

          {/* 12. Suspension and Termination */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              12. Suspension and Termination
            </h2>
            <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p>
                You may stop using Twigg and request deletion of your account at
                any time by writing to{" "}
                <a
                  href="mailto:contact@twigg.one"
                  className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
                >
                  contact@twigg.one
                </a>
                .
              </p>
              <p>
                We may suspend or terminate your access if you violate these
                Terms, if required by law, or if we discontinue the service.
              </p>
              <p>
                On termination, your data will be handled as described in our
                Privacy Policy.
              </p>
            </div>
          </section>

          {/* 13. Disclaimer */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              13. Disclaimer
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              Twigg is provided on an “as is” and “as available” basis. To the
              extent permitted by law, we make no warranties, express or
              implied, about the service’s accuracy, reliability or
              availability, or that it will be free of errors or interruptions.
            </p>
          </section>

          {/* 14. Limitation of Liability */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              14. Limitation of Liability
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              To the extent permitted by law, Twigg and Aadyantax Technologies
              Pvt. Ltd. will not be liable for any indirect, incidental or
              consequential loss arising from your use of Twigg. This includes
              losses from financial decisions made based on information in the
              app, missed payments, or errors in third-party data.
            </p>
          </section>

          {/* 15. Indemnity */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              15. Indemnity
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              You agree to indemnify Twigg against any claims, losses or damages
              arising from your breach of these Terms or your misuse of the
              service.
            </p>
          </section>

          {/* 16. Changes to These Terms */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              16. Changes to These Terms
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              We may update these Terms from time to time. If the changes are
              material, we will notify you in-app. Continuing to use Twigg after
              the changes take effect means you accept the updated Terms.
            </p>
          </section>

          {/* 17. Governing Law and Jurisdiction */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              17. Governing Law and Jurisdiction
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              These Terms are governed by the laws of India. Any disputes will
              be subject to the exclusive jurisdiction of the courts in New
              Delhi.
            </p>
          </section>

          {/* 18. Grievance Officer */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              18. Grievance Officer
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              For any complaint about the service or these Terms, please
              contact:
            </p>
            <div className="flex flex-col gap-[4px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%] pl-4 border-l-2 border-[#BC9313]/40 my-1">
              <p className="font-semibold text-[#152D23]">Utkarsh [Surname]</p>
              <p>Grievance Officer, Aadyantax Technologies Pvt. Ltd.</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@twigg.one"
                  className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
                >
                  contact@twigg.one
                </a>
              </p>
              <p>Address: [Registered office address], New Delhi, India</p>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              We will acknowledge your grievance within 48 hours and aim to
              resolve it within 30 days.
            </p>
          </section>

          {/* 19. Contact Us */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              19. Contact Us
            </h2>
            <div className="flex flex-col gap-[4px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%] pl-4 border-l-2 border-[#BC9313]/40">
              <p className="font-semibold text-[#152D23]">
                Aadyantax Technologies Pvt. Ltd.
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@twigg.one"
                  className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
                >
                  contact@twigg.one
                </a>
              </p>
              <p>New Delhi, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionPage;
