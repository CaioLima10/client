"use client";
import { ReactNode, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

export default function CopyCode({ children }: { children: ReactNode }) {
  const copyRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyToClicpboard = () => {
    if (copyRef.current) {
      const range = document.createRange();
      range.selectNode(copyRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <>
      <div ref={copyRef}>{children}</div>
      <button className="absolute right-4 top-2" onClick={copyToClicpboard}>
        {copied ? (
          <FaCheck size={20} className="text-cyan-500" />
        ) : (
          <IoCopyOutline size={24} />
        )}
      </button>
    </>
  );
}
