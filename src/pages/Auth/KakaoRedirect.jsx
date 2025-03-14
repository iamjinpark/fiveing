import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getKakaoToken,
  getKakaoUser,
  loginOrRegisterKakaoUser,
} from "@/utils/kakaoAuth";

function KakaoRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoLogin = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (!code) {
        console.error("카카오 로그인 코드 없음");
        return;
      }

      try {
        // ✅ 1. 카카오 액세스 토큰 요청
        const accessToken = await getKakaoToken(code);
        console.log("카카오 액세스 토큰:", accessToken);

        // ✅ 2. 카카오 사용자 정보 요청
        const userInfo = await getKakaoUser(accessToken);
        console.log("카카오 사용자 정보:", userInfo);

        // ✅ 3. PocketBase 로그인 또는 회원가입 처리
        const authData = await loginOrRegisterKakaoUser(userInfo);
        console.log("PocketBase 로그인 성공:", authData);

        // ✅ 4. 로그인 성공 후 이동
        navigate("/home");
      } catch (error) {
        console.error("카카오 로그인 실패:", error);
      }
    };

    handleKakaoLogin();
  }, []);

  return <div>로그인 중...</div>;
}

export default KakaoRedirect;
