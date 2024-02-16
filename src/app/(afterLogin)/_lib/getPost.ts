export default async function getPost() {
  try {
    const result = await fetch(process.env.NEXT_PUBLIC_URL + "/api/home/post", {
      method: "GET",
      next: { tags: ["posts", "recommends"] },
      cache: "no-cache",
    });
    return await result.json();
  } catch (e) {
    console.error(e);
  }
}
