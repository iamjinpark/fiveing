import React, { useState } from "react";
import mainImg from "@/assets/mainImg.svg";
import CustomButton from "@/components/common/CustomButton";
import pb from "@/api/pocketbase.js";

function Login() {
  const startOAuth2Login = async () => {
    try {
      const authMethods = await pb.collection("users").listAuthMethods();
      const kakaoAuth = authMethods.oauth2.providers.find(
        (p) => p.name === "kakao"
      );

      console.log(kakaoAuth);

      if (!kakaoAuth) {
        console.error("카카오 OAuth2 제공자를 찾을 수 없습니다.");
        return;
      }

      let baseUrl = kakaoAuth.authUrl.replace(/&redirect_uri=[^&]*/, "");
      const loginUrl = `${baseUrl}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;

      console.log(loginUrl);
      sessionStorage.setItem(
        "pb_oauth2_provider",
        JSON.stringify({
          name: kakaoAuth.name,
          state: kakaoAuth.state,
          codeVerifier: kakaoAuth.codeVerifier,
        })
      );

      // ✅ 카카오 OAuth2 로그인 URL로 이동
      window.location.href = loginUrl;
    } catch (err) {
      console.error("OAuth2 로그인 시작 실패:", err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-[100px]">
      <img src={mainImg} alt="" className="w-[300px] h-[400px]" />
      <CustomButton onClick={startOAuth2Login}>Start with KAKAO</CustomButton>
    </div>
  );
}

export default Login;
