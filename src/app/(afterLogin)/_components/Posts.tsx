"use client";

import NoImage from "@/app/_components/NoImage";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import DiffDate from "./DiffDate";
import getPost from "@/app/(afterLogin)/_lib/getPost";
import { Post } from "@/types/global";

export default function Posts() {
  const { data } = useQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPost,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 100,
  });
  return (
    <>
      {data?.result &&
        data?.result.map((elem: Post) => (
          <div
            key={elem._id.toString()}
            className="grid w-full grid-cols-[5rem_2fr] grid-rows-[auto_auto_50px] px-8 py-6"
          >
            {elem.src ? (
              <div className="relative col-start-1 col-end-3 mb-4 h-80 w-full rounded-lg bg-gray-800">
                <Image
                  src={elem.src}
                  alt="배경"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            ) : (
              <div className="col-start-1 col-end-3"></div>
            )}
            <>
              {elem?.user?.image ? (
                <Image
                  src={elem?.user?.image}
                  alt={elem?.user?.name!}
                  width={20}
                  height={20}
                  className="image-rounded"
                />
              ) : (
                <NoImage />
              )}
            </>
            <div className="border-standard w-full rounded p-2">
              {elem.text}
            </div>
            <span className="self-center text-gray-400">
              {<DiffDate created={elem.date} />}
            </span>
            <div className="flex justify-end self-center">
              <div className="mr-3">좋아요</div>
              <div>댓글</div>
            </div>
          </div>
        ))}
    </>
  );
}
