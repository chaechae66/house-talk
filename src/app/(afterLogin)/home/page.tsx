import Textarea from "../_components/Textarea";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import getPost from "@/app/(afterLogin)/_lib/getPost";
import Posts from "../_components/Posts";

export const dynamic = "force-dynamic";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPost,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <div className="grid h-full grid-cols-[50rem_auto] grid-rows-[auto]">
      <div>
        <h3 className="col-start-1 col-end-3 pl-8 pt-8 text-xl">
          이웃들에게 나의 소식을 전해요
        </h3>
        <Textarea />
        <div>
          <HydrationBoundary state={dehydrateState}>
            <Posts />
          </HydrationBoundary>
        </div>
      </div>
      <article className="h-full w-full items-stretch border-l-[1px] border-solid border-gray-100">
        <div className="mb-8 p-6 text-xl">
          <h3>이웃 계정</h3>
        </div>
      </article>
    </div>
  );
}
