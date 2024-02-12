"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="bg-slate-100">
      <ul>
        <Link href={"/home"} scroll={false}>
          <li
            className={classNames(
              `m-5 flex rounded-lg p-4 transition hover:bg-slate-200 ${pathname === "/home" && "active-nav"}`,
            )}
          >
            <Image
              src={"/nav_icon01.svg"}
              alt="홈 아이콘"
              width={25}
              height={25}
              className="mr-4"
            />
            홈
          </li>
        </Link>
        <Link href={"/message"} scroll={false}>
          <li
            className={classNames(
              `m-5 flex rounded-lg p-4 transition hover:bg-slate-200 ${pathname === "/message" && "active-nav"}`,
            )}
          >
            <Image
              src={"/nav_icon01.svg"}
              alt="홈 아이콘"
              width={25}
              height={25}
              className="mr-4"
            />
            메세지
          </li>
        </Link>
        <Link href={"/search"} scroll={false}>
          <li
            className={classNames(
              `m-5 flex rounded-lg p-4 transition hover:bg-slate-200 ${pathname === "/search" && "active-nav"}`,
            )}
          >
            <Image
              src={"/nav_icon01.svg"}
              alt="홈 아이콘"
              width={25}
              height={25}
              className="mr-4"
            />
            검색
          </li>
        </Link>
        <Link href={"/market"} scroll={false}>
          <li
            className={classNames(
              `m-5 flex rounded-lg p-4 transition hover:bg-slate-200 ${pathname === "/market" && "active-nav"}`,
            )}
          >
            <Image
              src={"/nav_icon01.svg"}
              alt="홈 아이콘"
              width={25}
              height={25}
              className="mr-4"
            />
            거래
          </li>
        </Link>
      </ul>
    </nav>
  );
}
