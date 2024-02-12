import Image from "next/image";

export default function NoImage() {
  return (
    <div className="image-rounded bg-slate-400">
      <Image src="/no_image.svg" alt="프로필사진 없음" width={20} height={20} />
    </div>
  );
}
