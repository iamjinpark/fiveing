import { Navigate, Outlet } from "react-router-dom";
import pb from "@/api/pocketbase.js";

const RouterGuard = () => {
  // ✅ 로그인 여부 확인
  const isAuthenticated = pb.authStore.isValid;

  console.log("지금 로그인 되어있음", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RouterGuard;
