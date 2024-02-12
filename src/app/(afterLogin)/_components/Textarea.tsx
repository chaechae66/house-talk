"use client";

import NoImage from "@/app/_components/NoImage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";

export default function Textarea() {
  const { data } = useSession();

  const [text, setText] = useState("");

  const handleSubmit: MouseEventHandler = () => {
    console.log(text);
  };

  return (
    <div className="w-[50rem]">
      <div className="grid w-full grid-cols-[5rem_3fr] p-8">
        {data?.user?.image ? (
          <Image
            src={data?.user?.image}
            alt={data?.user?.name!}
            width={20}
            height={20}
            className="image-rounded"
          />
        ) : (
          <NoImage />
        )}
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="h-24 w-full resize-none rounded border-[1px] border-solid border-gray-200 p-2"
        ></textarea>
        <button className="mt-4 rounded bg-slate-200 p-2">사진첨부</button>
        <button
          onClick={handleSubmit}
          className="mt-4 justify-self-end rounded bg-primary p-2 text-white"
        >
          전송
        </button>
      </div>
      <div className="mt-4 h-[1px] w-full bg-gray-100"></div>
    </div>
  );
}
