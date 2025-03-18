import React, { useState } from "react";
import mainImg from "@/assets/mainImg.svg";
import CustomButton from "@/components/common/CustomButton";

function Login() {
  function goToKakaoAuth() {
    // window.location.href = import.meta.env.VITE_KAKAO_AUTH_API;
    window.location.href = "/api/oauth2-redirect";
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[60px]">
      <img src={mainImg} alt="" className="w-[300px] h-[400px]" />
      <CustomButton onClick={goToKakaoAuth}>Start with KAKAO</CustomButton>
    </div>
  );
}

export default Login;
