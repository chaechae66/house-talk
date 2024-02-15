export default async function getPost() {
  try {
    const result = await fetch("/api/home/post", {
      method: "GET",
      next: { tags: ["posts", "recommends"] },
      cache: "no-cache",
    });
    return result.json();
  } catch (e) {
    console.error(e);
  }
}
