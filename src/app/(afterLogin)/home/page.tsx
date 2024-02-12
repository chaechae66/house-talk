import Textarea from "../_components/Textarea";

export default function Home() {
  return (
    <div className="grid h-full grid-cols-[50rem_auto] grid-rows-[auto]">
      <div>
        <h3 className="col-start-1 col-end-3 pl-8 pt-8 text-xl">
          이웃들에게 나의 소식을 전해요
        </h3>
        <Textarea />
      </div>
      <article className="h-full w-full items-stretch border-l-[1px] border-solid border-gray-100">
        <div className="mb-8 p-6 text-xl">
          <h3>이웃 계정</h3>
        </div>
      </article>
    </div>
  );
}
