import React from "react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen mt-[140px] sm:mt-[160px] lg:mt-[180px] px-[16px] sm:px-[24px] pb-[80px]">
      <div className="flex flex-col gap-[32px] bg-[#FDF9F0] py-[32px] sm:py-[48px] lg:py-[64px] px-[24px] sm:px-[48px] lg:px-[92px] max-w-[1240px] mx-auto rounded-[20px]">
        {/* Intro Section */}
        <div className="flex flex-col text-[16px] gap-[24px] sm:text-[18px] lg:text-[20px] font-switzer text-[#152D23] leading-[140%] text-justify">
          <h1 className="text-[30px] sm:text-[32px] lg:text-[36px] font-semibold text-[#152D23] font-bricolage leading-[110%]">
            Privacy Policy
          </h1>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium text-[#152D23]/70">
            Last updated: 26 September 2026
          </p>
          <div className="flex flex-col gap-[12px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
            <p>
              Twigg is a platform owned and operated by Aadyantax Technologies
              Pvt. Ltd. (“Twigg”, “we”, “us”, “our”). We are committed to
              protecting your privacy and personal data in accordance with
              applicable Indian laws, including the Digital Personal Data
              Protection Act, 2023 and the rules made under it.
            </p>
            <p>
              This policy explains what data we collect, how we use it, who we
              share it with, how long we keep it, and the choices you have. It
              should be read together with our{" "}
              <Link
                href="/terms-condition"
                className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
              >
                Terms & Conditions
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Dynamic Sections */}
        <div className="flex flex-col gap-[28px] sm:gap-[32px] lg:gap-[36px]">
          {/* 1. Data We Collect */}
          <section className="flex flex-col gap-[14px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              1. Data We Collect
            </h2>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Information you provide
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Name, email address and mobile number.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  PAN and date of birth, only where legally required, or where
                  you provide them to open a password-protected credit card
                  statement (see Section 10).
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Preferences, goals and feedback.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Financial data via Account Aggregator (with your consent)
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Bank accounts and transactions.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Mutual funds, equities and ETFs.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Loans, credit cards and fixed deposits.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Credit card statement data via Gmail (only if you connect it)
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Credit card statement emails from recognised card issuers,
                  including the email body and PDF attachments.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Details extracted from these statements: transactions,
                  outstanding balance, minimum amount due, payment due date and
                  card issuer.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Technical data
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Device and app usage information.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Logs and diagnostics. These never contain the content of your
                  emails or statements.
                </p>
              </div>
            </div>
          </section>

          {/* 2. How We Use Data */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              2. How We Use Data
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              We use your data to:
            </p>
            <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Show your accounts, transactions and investments in one place.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Categorise your transactions and generate personalised financial
                insights.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Show your credit card transactions and remind you before
                payments are due.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Enable investment advisory services, if you opt in.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Send you service messages about your account.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Send you updates on WhatsApp, only if you opt in.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Improve product accuracy and security.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Meet legal and regulatory obligations.
              </p>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#152D23] font-switzer pt-1">
              We do not sell your data. We do not use your data for advertising.
            </p>
          </section>

          {/* 3. Data Sharing */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              3. Data Sharing
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              We share your data only:
            </p>
            <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                With your explicit consent.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                With trusted service providers, such as cloud hosting and AI
                providers, under strict confidentiality and only as needed to
                run Twigg.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                With third-party AI providers, as described in Section 8.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                With our SEBI-registered investment adviser partner, only if you
                opt in to advisory services.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                When required by law or by a government or regulatory authority.
              </p>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%] pt-1">
              We never use your data for advertising or unrelated commercial
              purposes. Data received through Gmail is subject to additional
              restrictions, described in Section 10.
            </p>
          </section>

          {/* 4. Data Security & Storage */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              4. Data Security & Storage
            </h2>
            <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Data is encrypted in transit and at rest.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Access is restricted to authorised personnel on a need-to-know
                basis.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Our servers comply with industry security standards.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Gmail access tokens are stored encrypted and used only to fetch
                credit card statements.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Email content and statement files are never written to logs.
              </p>
            </div>
          </section>

          {/* 5. Your Rights */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              5. Your Rights
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              You have the right to:
            </p>
            <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Access or update your data.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Withdraw consent at any time, including disconnecting Gmail or
                Account Aggregator access from within the app, or opting out of
                WhatsApp updates.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Request deletion of your data or your account.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Ask how your data is used.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Nominate another person to exercise these rights on your behalf
                in the event of your death or incapacity.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Raise a grievance (see Section 11).
              </p>
            </div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%] pt-1">
              To exercise any of these rights, write to{" "}
              <a
                href="mailto:contact@twigg.one"
                className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
              >
                contact@twigg.one
              </a>
              .
            </p>
          </section>

          {/* 6. Retention */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              6. Retention
            </h2>
            <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                We keep data only as long as needed to provide the services you
                use.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Some data may be retained for longer where required for legal or
                regulatory purposes.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                After that, data is securely deleted or anonymised.
              </p>
              <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                Gmail-derived data follows the specific retention rules in
                Section 10.
              </p>
            </div>
          </section>

          {/* 7. Children’s Privacy */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              7. Children’s Privacy
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              Twigg is not intended for users under 18 years of age. We do not
              knowingly collect data from anyone under 18.
            </p>
          </section>

          {/* 8. Use of Third-Party AI Services */}
          <section className="flex flex-col gap-[14px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              8. Use of Third-Party AI Services
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              Twigg uses large language models (LLMs) from established
              third-party AI providers to power certain features.
            </p>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Transaction categorisation
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                To organise your spending, Twigg uses LLMs to categorise your
                transactions (for example, “Groceries” or “Travel”). For this,
                we send transaction descriptions, amounts and dates to our AI
                providers. This includes transactions from your bank accounts
                and, if you have connected Gmail, from your credit card
                statements.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Categorisation is part of Twigg’s core service. You accept it
                when you agree to our Terms & Conditions and this Privacy
                Policy, and it does not require the separate consent described
                below.
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                AI insights and chat
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Twigg also uses LLMs to power personalised video insights and
                the Twigg AI chat assistant. When you use these features, the
                following data may be sent to our AI providers to generate your
                response:
              </p>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Bank transaction history and spending by category.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Investment holdings (mutual funds, stocks, ETFs, fixed
                  deposits).
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Insurance coverage details (health and term).
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                What we never send
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Your emails and credit card statement files (PDFs) are never
                sent to any AI provider.
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                How your data is protected
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Before any data is sent to an AI provider, we remove your
                  personally identifiable information, including your name,
                  phone number, email address, PAN, and account and card
                  numbers.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Transaction descriptions are sent as they appear in your
                  statements, and may contain merchant names or the names of
                  people you have paid or received money from.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  The data is used only to generate the result shown to you.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Our AI providers may keep this data only temporarily, as
                  needed to provide the service and to monitor for abuse. After
                  that, it is deleted.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Our AI providers are not permitted to use your data to train
                  their AI models or to share it with any other party.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We work only with AI providers that are contractually bound to
                  protect your data to standards consistent with applicable
                  Indian law, including the Digital Personal Data Protection
                  Act, 2023.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Your data may be processed on servers outside India, in
                  countries not restricted under that Act.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Your consent for AI insights and chat
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  AI insights and chat are opt-in.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Before your data is used for these features for the first
                  time, you will see a clear disclosure and be asked for
                  explicit consent.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  You can withdraw this consent at any time from Settings → AI
                  Data Sharing.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Withdrawing consent disables AI insights and chat but does not
                  affect your account, linked financial data, transaction
                  categorisation or any other Twigg functionality.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Changes to how AI features use your data
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                If we change the types of data sent to AI providers, or how that
                data is used, we will notify you in-app and, where required, ask
                for fresh consent before the change takes effect.
              </p>
            </div>
          </section>

          {/* 9. Account Aggregator (AA) Consent Framework */}
          <section className="flex flex-col gap-[14px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              9. Account Aggregator (AA) Consent Framework
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              Twigg uses India’s Account Aggregator framework, regulated by the
              Reserve Bank of India (RBI), to access your financial information.
            </p>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Explicit and informed consent
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We access your financial data only after you give explicit
                  consent through a registered Account Aggregator.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Consent is purpose-specific, time-bound and limited to
                  specific data.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  You will always see what data is being accessed, for what
                  purpose and for how long.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Twigg cannot access your data without your approval.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Data minimisation
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We access only the minimum data needed to provide the services
                  you request.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We never request blanket or open-ended access.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Consent control and revocation
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  You can review, modify or revoke consent at any time through
                  your Account Aggregator or within the Twigg app.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  When you revoke consent, Twigg immediately loses access to
                  future data.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                No credential storage
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Twigg does not store your bank login credentials, PINs or
                  passwords.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Authentication and data transfer are handled entirely by the
                  AA ecosystem.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Read-only access
              </h3>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Twigg receives read-only access to your data.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We cannot initiate transactions, move funds or modify your
                  accounts.
                </p>
              </div>
            </div>
          </section>

          {/* 10. Gmail Access for Credit Card Statements (Optional) */}
          <section className="flex flex-col gap-[14px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              10. Gmail Access for Credit Card Statements (Optional)
            </h2>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Why we ask for it
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Credit card statements are not yet fully available through the
                Account Aggregator framework. The statement your card issuer
                emails you is the most reliable source for your card
                transactions, balance and due date. Connecting Gmail is
                optional, and every other part of Twigg works without it.
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                What we access
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                If you connect Gmail, Twigg requests read-only access through
                Google’s gmail.readonly permission.
              </p>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We search only for emails from recognised credit card issuers’
                  sender addresses.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We read only the body and PDF attachments of those matching
                  statement emails.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We do not read, store or process any other email in your
                  inbox.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We cannot send, delete or modify any of your emails.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                How we use it
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Data extracted from your statements is used only to:
              </p>
              <div className="flex flex-col gap-[6px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Show your credit card transactions, balance and spending
                  insights in Twigg.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Categorise your credit card transactions.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  Remind you before your card payment is due.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Statement passwords
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Many statement PDFs are password-protected, often using your
                date of birth or PAN.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                If you provide a password, it is used only to open the statement
                at the time of processing.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-semibold text-[#152D23] font-switzer">
                Statement passwords are never stored.
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                What we don’t do
              </h3>
              <div className="flex flex-col gap-[8px] text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We do not use Gmail data for advertising, including
                  personalised ads, retargeting or interest-based ads.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We do not sell Gmail data.
                </p>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  <p>We do not transfer Gmail data to third parties, except:</p>
                  <ul className="list-disc pl-6 pt-1 space-y-1">
                    <li>as necessary to provide the features above;</li>
                    <li>to comply with applicable law; or</li>
                    <li>with your explicit consent.</li>
                  </ul>
                </div>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We never send your emails or statement files to any AI
                  provider. Only the transaction descriptions, amounts and dates
                  extracted from your statements are sent to our AI providers,
                  solely to categorise your transactions (see Section 8). No
                  names, account numbers or card numbers are included beyond
                  what appears in the transaction description.
                </p>
                <p className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  We do not use Gmail data to develop, improve or train any AI
                  or machine learning model, whether ours or anyone else’s.
                </p>
                <div className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-[#152D23]">
                  <p>No person at Twigg reads your Gmail data, except:</p>
                  <ul className="list-disc pl-6 pt-1 space-y-1">
                    <li>
                      with your explicit consent for a specific message, such as
                      when you ask for support;
                    </li>
                    <li>
                      where necessary for security purposes, such as
                      investigating abuse; or
                    </li>
                    <li>to comply with applicable law.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Retention and deletion
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Statement emails and PDFs are processed and then deleted
                immediately. We keep only the extracted statement details
                described in Section 1.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                When you disconnect Gmail in Settings, we stop all access
                immediately and instantly delete all data obtained through
                Gmail.
              </p>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                You can also revoke Twigg’s access at any time from your Google
                Account at{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
                >
                  myaccount.google.com/permissions
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium text-[#152D23] font-bricolage">
                Google API Services User Data Policy
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
                Twigg’s use and transfer to any other app of information
                received from Google APIs will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#BC9313] hover:text-[#9A760B] transition-colors"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </div>
          </section>

          {/* 11. Grievance Officer */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              11. Grievance Officer
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              If you have any concern or complaint about how your personal data
              is handled, please contact our Grievance Officer:
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
              resolve it within 30 days. If you are not satisfied with our
              response, you may approach the Data Protection Board of India.
            </p>
          </section>

          {/* 12. Changes to This Policy */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              12. Changes to This Policy
            </h2>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-switzer text-[#152D23] leading-[150%]">
              We may update this policy from time to time. If the changes are
              material, we will notify you in-app and, where required, ask for
              your fresh consent. The “Last updated” date at the top shows when
              the policy was last revised.
            </p>
          </section>

          {/* 13. Contact Us */}
          <section className="flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#BC9313] font-bricolage">
              13. Contact Us
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

export default PrivacyPolicyPage;
