import KakaoLogin from "../../_components/kakaoLogin";
import NaverLogin from "../../_components/NaverLogin";

export default function Login() {
  return (
    <div className="flex-center h-full w-full flex-col">
      <h2 className="mb-12 text-3xl font-medium">로그인</h2>
      <div className="w-80">
        <form className="w-full">
          <input
            placeholder="이메일"
            type="text"
            className="mb-4 w-full rounded border-[1px] border-solid border-gray-200 p-2"
          />
          <br />
          <input
            placeholder="비밀번호"
            type="password"
            className="mb-8 w-full rounded border-[1px] border-solid border-gray-200 p-2"
          />
          <button
            type="submit"
            className="w-full rounded bg-primary p-2 text-center text-white"
          >
            로그인
          </button>
        </form>
        <div className="mb-4 mt-10 h-0.5 w-full bg-gray-200"></div>
        <h4 className="mb-4 w-full text-center">소셜로그인 이용하기</h4>
        <div className="flex-center">
          <NaverLogin />
          <KakaoLogin />
        </div>
      </div>
    </div>
  );
}
