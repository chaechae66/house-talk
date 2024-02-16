"use client";

import { useInterval } from "@/hooks/useInterval";
import { useState } from "react";

export default function DiffDate({ created }: { created: number }) {
  const [seconds, setSeconds] = useState(Date.now());

  const diffDate = () => {
    const diff = seconds - created;
    if (Math.floor(diff / (24 * 60 * 60 * 1000)) > 6) {
      const createdDate = new Date(created);
      const createdStr = [
        createdDate.getFullYear(),
        createdDate.getMonth() + 1 < 10
          ? "0" + (createdDate.getMonth() + 1)
          : createdDate.getMonth() + 1,
        createdDate.getDate() < 10
          ? "0" + createdDate.getDate()
          : createdDate.getDate(),
      ].join("-");
      return createdStr;
    } else if (Math.floor(diff / (24 * 60 * 60 * 1000)) > 0) {
      const diffday = Math.floor(diff / (24 * 60 * 60 * 1000));
      return `${diffday}일 전`;
    } else if (Math.floor(diff / (60 * 60 * 1000)) > 0) {
      const diffHour = Math.floor(diff / (60 * 60 * 1000));
      return `${diffHour}시간 전`;
    } else if (Math.floor(diff / (60 * 1000)) > 0) {
      const diffMin = Math.floor(diff / (60 * 1000));
      return `${diffMin}분 전`;
    } else {
      return `방금 전`;
    }
  };

  useInterval(
    () => {
      setSeconds(Date.now());
      diffDate();
    },
    1000 * 60 * 5,
  );

  return <>{diffDate()}</>;
}
