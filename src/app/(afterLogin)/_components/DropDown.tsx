"use client";

import { signOut } from "next-auth/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export default function DropDown({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onBlur={handleBlur} tabIndex={0}>
      <div onClick={handleClick}>{children}</div>
      {isOpen && (
        <ul className="absolute right-0 top-14 w-32 border-solid text-center drop-shadow-md">
          <li className="select-none border-b-[1px] bg-white px-2 py-4">
            내 정보
          </li>
          <li
            className="select-none bg-white px-2 py-4"
            onClick={() => {
              signOut();
            }}
          >
            로그아웃
          </li>
        </ul>
      )}
    </div>
  );
}
