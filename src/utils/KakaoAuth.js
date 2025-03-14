import axios from "axios";
import pb from "@/api/pocketbase.js";

// ✅ 카카오 API 요청을 위한 axios 인스턴스 설정
const kakaoApi = axios.create({
  baseURL: "https://kauth.kakao.com",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const kakaoUserApi = axios.create({
  baseURL: "https://kapi.kakao.com",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// ✅ 카카오 액세스 토큰 요청
export const getKakaoToken = async (code) => {
  try {
    const response = await kakaoApi.post(
      "/oauth/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
        code: code,
      })
    );

    return response.data.access_token;
  } catch (error) {
    console.error("카카오 토큰 요청 실패:", error);
    throw error;
  }
};

// ✅ 카카오 사용자 정보 요청
export const getKakaoUser = async (accessToken) => {
  try {
    const response = await kakaoUserApi.get("/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("카카오 사용자 정보 요청 실패:", error);
    throw error;
  }
};

// ✅ PocketBase에 사용자 로그인 or 회원가입 처리
export const loginOrRegisterKakaoUser = async (userData) => {
  try {
    const kakaoId = userData.id;
    const email = userData.kakao_account?.email;
    const name = userData.properties?.nickname;

    console.log(`카카오 로그인 시도: ${email} (${kakaoId})`);

    // ✅ 1. PocketBase에서 기존 사용자 찾기 (이메일 기준)
    let user = null;
    try {
      user = await pb.collection("users").getFirstListItem(`email="${email}"`);
      console.log("✅ 기존 사용자 발견:", user);
    } catch (findError) {
      console.log("❌ 기존 사용자 없음, 새로 가입 진행");
    }

    // ✅ 2. 기존 사용자가 없으면 회원가입 진행
    if (!user) {
      try {
        console.log("회원가입 진행:", email);

        user = await pb.collection("users").create({
          email,
          emailVisibility: true,
          password: kakaoId, // 카카오 ID를 패스워드로 사용 (로그인용 X)
          passwordConfirm: kakaoId,
          name,
          provider: "kakao",
          kakao_id: kakaoId, // PocketBase 필드에 저장
        });

        console.log("✅ PocketBase 회원가입 완료:", user);
      } catch (createError) {
        console.error("❌ PocketBase 회원가입 실패:", createError);
      }
    } else {
      console.log("🔄 기존 사용자 로그인 진행:", email);
    }

    // ✅ 3. PocketBase 로그인 처리 (세션 저장)
    console.log(`🔐 PocketBase 로그인 시도: ${email}`);
    const authData = await pb
      .collection("users")
      .authWithPassword(email, kakaoId);

    console.log("✅ PocketBase 로그인 완료:", authData);

    // ✅ 4. 로그인 세션 유지 (authRefresh 사용)
    await pb.collection("users").authRefresh();

    console.log("✅ PocketBase 세션 유지 완료!");

    return authData;
  } catch (error) {
    console.error("❌ PocketBase 로그인/회원가입 실패:", error);
    throw error;
  }
};
