import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AuthLayout from "@/components/layout/AuthLayout";
import Login from "@/pages/Auth/Login";
import KakaoRedirect from "../pages/Auth/KakaoRedirect";
import Home from "@/pages/Home/Home";
import MakeIt from "@/pages/MakeIt/MakeIt";
import MakeItDetail from "@/pages/MakeIt/MakeItDetail";
import Notice from "@/pages/Notice/Notice";
import NoticeDetail from "@/pages/Notice/NoticeDetail";
import MyPage from "@/pages/MyPage/MyPage";
import NotFound from "@/pages/NotFound";
import NotAvailable from "@/pages/NotAvailable";
import RouterGuard from "@/router/RouterGuard"; // ✅ 라우터 가드 추가

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />, // 기본 경로에서 `/login`으로 리디렉션
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/api/oauth2-redirect", element: <KakaoRedirect /> },
    ],
  },
  {
    element: <RouterGuard />, // ✅ 로그인된 사용자만 Layout 사용 가능
    children: [
      {
        element: <Layout />,
        children: [
          { path: "home", element: <Home /> },
          { path: "diary", element: <NotAvailable /> },
          { path: "make-it", element: <NotAvailable /> },
          { path: "notice", element: <NotAvailable /> },
          { path: "quiz", element: <NotAvailable /> },
          { path: "my-page", element: <MyPage /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
