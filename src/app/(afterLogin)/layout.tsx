import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import Nav from "./_components/Nav";
import NoImage from "../_components/NoImage";
import DropDown from "./_components/DropDown";

export default async function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center justify-between border-b-[1px] border-solid border-gray-200 bg-white px-4">
        <Link href={"/home"} className="flex text-2xl font-bold text-primary">
          <Image src={"/logo.png"} alt="메인로고" width={40} height={40} />
          <h2 className="ml-2">하우스,톡</h2>
        </Link>
        <DropDown>
          {session.user?.image ? (
            <Image
              className="image-rounded"
              src={session.user?.image}
              alt={session.user?.name!}
              width={40}
              height={40}
            />
          ) : (
            <NoImage />
          )}
        </DropDown>
      </header>
      <div className="grid h-[calc(100%-theme(space.36))] w-full grid-cols-[1fr_4fr]">
        <Nav />
        <main className="">{children}</main>
      </div>
    </>
  );
}
