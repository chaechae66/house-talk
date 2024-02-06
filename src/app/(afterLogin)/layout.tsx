import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function afterLoginLayout({
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
        <div>
          {session.user?.image ? (
            <Image
              className="h-12 w-12 rounded-full"
              src={session.user?.image}
              alt={session.user?.name!}
              width={40}
              height={40}
            />
          ) : (
            <div className="flex-center h-12 w-12 rounded-full bg-slate-400">
              <Image
                src="/no_image.svg"
                alt="프로필사진 없음"
                width={20}
                height={20}
              />
            </div>
          )}
        </div>
      </header>
      <div className="grid h-[calc(100%-theme(space.36))] w-full grid-cols-[1fr_4fr]">
        <nav className="bg-slate-100"></nav>
        <main className="">{children}</main>
      </div>
    </>
  );
}
