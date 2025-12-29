"use client";

import { VibeChanged } from "@/utils/SvgUtils";
import { useEffect } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto close after 2 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#FDF9F0] rounded-[24px] p-8 mx-4 max-w-[320px] w-full flex flex-col items-center gap-[19px] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Icon */}
        <VibeChanged />

        {/* Text Content */}
        <div className=" flex flex-col items-center  text-center leading-tight">
          <h3 className="text-[#0E2A1F] text-[20px] md:text-[22px] font-medium font-bricolage">
            All right, we got you!
          </h3>
          <p className="text-[#152D23]/80 text-[12px] md:text-[14px] font-switzer">
            Your vibe has been updated.
          </p>
        </div>
      </div>
    </div>
  );
}
