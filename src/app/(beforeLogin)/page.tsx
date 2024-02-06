import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  return (
    <div className="grid h-full w-full grid-cols-[2fr_1fr]">
      <div className="relative h-full w-full">
        <Image src={"/before_login_bg.jpg"} alt="배너" fill />
      </div>
      <div className="flex h-full w-full items-center bg-slate-800 pl-6">
        <div>
          <div className="mb-4 flex items-center">
            <Image src={"/logo.png"} alt="메인로고" width={45} height={45} />
            <h4 className="ml-4 text-4xl font-medium text-primary">
              하우스,톡
            </h4>
          </div>
          <p className="mb-10 text-white">
            공동 주택 등 공통 공간 입주자들과 관리자를 위한 <br />
            커뮤니티 웹사이트 입니다.
          </p>
          <Link
            href={"/login"}
            className="rounded bg-primary px-3 py-2 text-white"
          >
            서비스 이용하기
          </Link>
        </div>
      </div>
    </div>
  );
}
