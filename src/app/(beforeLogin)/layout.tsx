import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function BeforeLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center justify-between border-b-[1px] border-solid border-gray-200 bg-white px-4">
        <Link href={"/"} className="flex text-2xl font-bold text-primary">
          <Image src={"/logo.png"} alt="메인로고" width={40} height={40} />
          <h2 className="ml-2">하우스,톡</h2>
        </Link>
        <Link href={"/auth/login"} className="rounded bg-slate-200 px-3 py-2">
          로그인
        </Link>
      </header>
      <main className="h-[calc(100%-theme(space.36))] w-full">{children}</main>
    </>
  );
}
