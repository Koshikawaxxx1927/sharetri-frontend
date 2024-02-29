"use client";

import { useState } from "react";
import Image from "next/image";

interface AccordionTextProps {
  text: string;
}

const AccordionText = ({ text }: AccordionTextProps) => {
  const [isOpen, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="text-center bg-slate-100 rounded">
      <button
        type="button"
        onClick={openHandler}
        className="cursor-pointer w-full"
      >
        {isOpen ? (
          <>
            <div className="text-left">{text}</div>
            <Image
              src="/images/uparrow.png"
              height={15}
              width={15}
              alt="上矢印"
              className="inline"
            />
          </>
        ) : (
          <Image
            src="/images/downarrow.png"
            height={15}
            width={15}
            alt="下矢印"
            className="inline"
          />
        )}
      </button>
    </div>
  );
};

export default AccordionText;
