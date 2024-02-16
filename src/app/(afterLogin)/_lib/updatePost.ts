import { PostSuccess, User } from "@/types/global";

export default async function updatePost(body: {
  user: User;
  src: string | null;
  text: string;
}): Promise<PostSuccess | null> {
  try {
    return await fetch("/api/home/post", {
      method: "POST",
      body: JSON.stringify(body),
    }).then((data) => data.json());
  } catch (e) {
    console.error(e);
    alert("게시물 업로드를 실패하였습니다.");
    return null;
  }
}
