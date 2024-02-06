"use client";

import { signIn } from "next-auth/react";

export default function NaverLogin() {
  return (
    <button
      onClick={() => {
        signIn("naver");
      }}
    >
      <div className="flex-center mr-4 h-10 w-10 cursor-pointer rounded-full bg-green-600 text-white">
        N
      </div>
    </button>
  );
}
