"use client";

import NoImage from "@/app/_components/NoImage";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, MouseEventHandler, useRef, useState } from "react";
import updatePost from "../_lib/updatePost";

export default function Textarea() {
  const { data } = useSession();

  const [text, setText] = useState("");
  const [src, setSrc] = useState<null | string>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [isImgLoading, setIsImgLoading] = useState(false);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({ mutationFn: updatePost });

  const handleSubmit: MouseEventHandler = () => {
    if (!text) {
      alert("포스트 내용을 적어주세요.");
    }
    const body = {
      user: {
        name: data?.user?.name!,
        email: data?.user?.email!,
        image: data?.user?.image!,
      },
      src,
      text,
    };
    mutate(body, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["posts", "recommends"] });
        setText("");
        setSrc(null);
        alert("게시물을 업로드 하였습니다.");
      },
    });
  };

  return (
    <div className="w-[50rem]">
      <div className="grid w-full grid-cols-[5rem_2fr] p-8">
        {!isImgLoading ? (
          src && (
            <div className="relative col-start-1 col-end-3 mb-10 h-80 w-full rounded-lg bg-gray-800">
              <Image
                src={src}
                alt="배경"
                fill
                className="rounded-lg object-contain"
              />
            </div>
          )
        ) : (
          <div className="flex-center relative col-start-1 col-end-3 mb-10 h-80 w-full rounded-lg bg-gray-800 text-white">
            <span>Loading</span>
          </div>
        )}
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
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border-standard h-24 w-full resize-none rounded p-2"
        ></textarea>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={imageInputRef}
          onChange={async (e: ChangeEvent<HTMLInputElement>) => {
            setIsImgLoading(true);
            const file = e?.target?.files!;
            if (!file[0]) {
              setIsImgLoading(false);
              return;
            }
            if (file[0].size >= 1048576) {
              alert("이미지의 용량 제한은 1MB 입니다.");
              setIsImgLoading(false);
              return;
            }
            const fileName = encodeURIComponent(file[0].name);
            let res = await (
              await fetch(`/api/home/post/image?file=${fileName}`)
            ).json();

            const formData = new FormData();
            Object.entries(res.fields).forEach(([key, value]) => {
              formData.append(key, value as unknown as Blob);
            });

            formData.append("file", file[0]);

            const result = await fetch(res.url, {
              method: "POST",
              body: formData,
            });

            if (result.ok) {
              setSrc(result.url + "/" + fileName);
              setIsImgLoading(false);
            } else {
              console.log("실패");
              setIsImgLoading(false);
            }
          }}
        />
        <button
          className="mt-4 rounded bg-slate-200 p-2"
          onClick={() => {
            imageInputRef.current?.click();
          }}
        >
          사진첨부
        </button>
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
