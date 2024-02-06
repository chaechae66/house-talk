"use client";

import { signIn } from "next-auth/react";

export default function KakaoLogin() {
  return (
    <button
      onClick={() => {
        signIn("kakao");
      }}
    >
      <div className="flex-center h-10 w-10 cursor-pointer rounded-full bg-yellow-400 text-white">
        K
      </div>
    </button>
  );
}
