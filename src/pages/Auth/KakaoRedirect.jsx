import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase.js";

function KakaoRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginWithKakao = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code"); // OAuth2 인가 코드 받기

      console.log(code);

      if (!code) {
        console.error("OAuth2 인가 코드가 없습니다.");
        navigate("/login");
        return;
      }

      try {
        const authData = await pb
          .collection("users")
          .authWithOAuth2({ provider: "kakao" });

        console.log("PocketBase 로그인 성공:", authData);
        navigate("/home"); // 로그인 성공 후 메인 페이지로 이동
      } catch (error) {
        console.error("PocketBase 로그인 실패:", error);
        navigate("/login");
      }
    };

    loginWithKakao();
  }, [navigate]);

  return <div>로그인 중...</div>;
}

export default KakaoRedirect;
