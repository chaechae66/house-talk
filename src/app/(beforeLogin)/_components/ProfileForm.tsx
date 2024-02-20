"use client";

import KakaoMap from "@/app/(beforeLogin)/_components/KakaoMap";
import { AddrContext, AddrContextType } from "@/hooks/useAddrContext";
import classNames from "classnames";
import Image from "next/image";
import { useContext, useState } from "react";

export default function ProfileForm() {
  const [isAgree, setIsAgree] = useState(false);
  const { addr, setAddr }: AddrContextType = useContext(AddrContext);

  return (
    <form className="w-full">
      <div className="flex-center mb-6 flex justify-end">
        <span className="mr-2">위 내용에 동의합니다.</span>
        <div
          onClick={() => {
            setIsAgree((prev) => !prev);
          }}
          className={classNames(
            `border-standard flex-center h-8 w-8 rounded transition ${isAgree && "bg-blue-400"}`,
          )}
        >
          {isAgree && (
            <Image
              src={"/checked_icon.svg"}
              alt="체크아이콘"
              width={22}
              height={22}
            />
          )}
        </div>
      </div>
      <div className="mb-6 mt-4 w-full">
        <KakaoMap />
      </div>
      <label>
        당신은 어떤 사람인가요?
        <select className="ml-4">
          <option>세대주</option>
          <option>경비원 등 관리자</option>
        </select>
      </label>
      <br />
      <div className="w-full text-center">
        <button
          className="my-16 rounded bg-primary px-10 py-2 text-white"
          type="submit"
        >
          완료
        </button>
      </div>
    </form>
  );
}
