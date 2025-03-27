import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import { ClipLoader } from "react-spinners";

function KakaoRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginWithKakao = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const state = params.get("state");
      const redirectURL = import.meta.env.VITE_KAKAO_REDIRECT_URI;

      const raw = sessionStorage.getItem("pb_oauth2_provider");
      if (!raw || !code || !state) {
        console.error("필수 정보 누락");
        navigate("/login");
        return;
      }

      const provider = JSON.parse(raw);

      if (provider.state !== state) {
        console.error("state 값 불일치");
        navigate("/login");
        return;
      }

      try {
        const authData = await pb
          .collection("users")
          .authWithOAuth2Code(
            provider.name,
            code,
            provider.codeVerifier,
            redirectURL,
            {
              emailVisibility: false,
            }
          );

        console.log("로그인 성공", authData);

        const isNewUser = authData.meta?.isNew === true;
        sessionStorage.setItem("isNewUser", isNewUser ? "true" : "false");

        sessionStorage.removeItem("pb_oauth2_provider");
        navigate("/home");
      } catch (err) {
        console.error("로그인 실패", err);
        navigate("/login");
      }
    };

    loginWithKakao();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center gap-[60px]">
      <span className="text-tomato font-extrabold text-2xl">
        카카오톡에 파이빙을 연결중
      </span>
      <ClipLoader color="#AC0000" size={80} />
      <span className="text-tomato font-extrabold text-xl">
        잠시만 기다려 주세요!
      </span>
    </div>
  );
}

export default KakaoRedirect;
