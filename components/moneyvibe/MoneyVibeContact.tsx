"use client";

import parsePhoneNumberFromString from "libphonenumber-js/max";
import { useState } from "react";
import { toast } from "sonner";

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

type MoneyVibeFormProps = {
  onComplete: (waitlistEntryId: number) => void;
};

export default function MoneyVibeForm({ onComplete }: MoneyVibeFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addToWaitlist: true,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ================= VALIDATION ================= */
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

  if (!formData.phone.trim()) {
  newErrors.phone = "Phone number is required";
} else {
  const phoneNumber = parsePhoneNumberFromString(
    formData.phone.trim(),
    "IN" // default country (India)
  );

  if (!phoneNumber || !phoneNumber.isValid()) {
    newErrors.phone = "Please enter a valid phone number";
  }
}



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone_no: formData.phone,
        is_waitlist: formData.addToWaitlist,
      };

      const res = await fetch(
        "https://api.twigg-dev.one/api/v1/moneyvibe/submit_form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      const data = await res.json();

      if (!data?.waitlistEntryId) {
        throw new Error("Invalid response");
      }

      toast.success("Successfully submitted!");

      onComplete(data.waitlistEntryId);
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ================= INPUT HANDLERS ================= */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^\d+]/g, "");

    if (value.startsWith("+") && value.length > 13) {
      value = value.slice(0, 13);
    } else if (!value.startsWith("+") && value.length > 10) {
      value = value.slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, phone: value }));
  };

  return (
    <div className="flex h-full max-w-[356px] flex-col justify-between md:mx-auto p-[40px] md:p-4">
      <h2 className="text-[#FDF9F0] md:text-center text-[20px] font-medium font-bricolage  leading-tight">
        Please enter your details to know your MoneyVibe
      
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-[#FDF9F0] text-[14px] mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="
    w-full
    h-[56px]
    px-4
    rounded-[9px]
    bg-[rgba(253,249,240,0.01)]
    border
    border-[rgba(188,147,19,0.25)]
    text-[#FDF9F0]/80
    placeholder-[#8a9a92]
    focus:outline-none
    focus:ring-2
    focus:ring-[#BC9313]/40
    backdrop-blur-[12px]
    text-[14px]
  "
            style={{
              boxShadow: `
      0px 0px 47px rgba(0,0,0,0.0),
      inset 0px 4px 4px rgba(253,249,240,0.2)
    `,
            }}
          />
          {errors.name && (
            <span className="text-[#ff6b6b] text-xs mt-1 block">
              {errors.name}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[#FDF9F0] text-[14px] mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="
    w-full
    h-[56px]
    px-4
    rounded-[8px]
    bg-[rgba(253,249,240,0.01)]
    border
    border-[rgba(188,147,19,0.25)]
    text-[#FDF9F0]/80
    placeholder-[#8a9a92]
    focus:outline-none
    focus:ring-2
    focus:ring-[#BC9313]/40
    backdrop-blur-[12px]
    text-[14px]
  "
            style={{
              boxShadow: `
      0px 0px 47px rgba(0,0,0,0.0),
      inset 0px 4px 4px rgba(253,249,240,0.2)
    `,
            }}
          />
          {errors.email && (
            <span className="text-[#ff6b6b] text-xs mt-1 block">
              {errors.email}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-[#FDF9F0] text-[14px] mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handlePhoneInput}
            placeholder="Enter your phone number"
            className="
    w-full
    h-[56px]
    px-4
    rounded-[8px]
    bg-[rgba(253,249,240,0.01)]
    border
    border-[rgba(188,147,19,0.25)]
    text-[#FDF9F0]/80
    placeholder-[#8a9a92]
    focus:outline-none
    focus:ring-2
    focus:ring-[#BC9313]/40
    backdrop-blur-[12px]
    text-[14px]
  "
            style={{
              boxShadow: `
      0px 0px 47px rgba(0,0,0,0.0),
      inset 0px 4px 4px rgba(253,249,240,0.2)
    `,
            }}
          />

          {errors.phone && (
            <span className="text-[#ff6b6b] text-xs mt-1 block">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="">
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative flex items-center justify-center ">
              <input
                type="checkbox"
                name="addToWaitlist"
                checked={formData.addToWaitlist}
                onChange={handleInputChange}
                className="w-5 h-5 appearance-none border-2 border-[#BC9313] rounded bg-transparent cursor-pointer checked:bg-[#BC9313] checked:border-[#BC9313] transition-all"
              />
              {formData.addToWaitlist && (
                <svg
                  className="absolute w-3 h-3 text-[#1a2e28] pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="text-[#e8e5dc] text-sm leading-tight">
              Add me to the Waitlist
            </span>
          </label>
         
        </div>

            <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="
          w-full h-[48px]
          bg-[#BC9313]
          text-[#FDF9F0]
          font-semibold
          rounded-lg
          cursor-pointer
          transition-all
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {isSubmitting ? "Submitting..." : "Continue"}
      </button>

      </div>
    </div>
  );
}
