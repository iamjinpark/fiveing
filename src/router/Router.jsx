import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AuthLayout from "@/components/layout/AuthLayout";
import Login from "@/pages/Auth/Login";
import SignUp from "@/pages/Auth/SignUp";
import Home from "@/pages/Home/Home";
import MakeIt from "@/pages/MakeIt/MakeIt";
import MakeItDetail from "@/pages/MakeIt/MakeItDetail";
import Notice from "@/pages/Notice/Notice";
import NoticeDetail from "@/pages/Notice/NoticeDetail";
import MyPage from "@/pages/MyPage/MyPage";
import NotFound from "@/pages/NotFound";
import NotAvailable from "@/pages/NotAvailable";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <NotAvailable /> },
      { path: "sign-up", element: <NotAvailable /> },
    ],
  },
  {
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "diary", element: <NotAvailable /> },
      { path: "make-it", element: <NotAvailable /> },
      { path: "notice", element: <NotAvailable /> },
      //   { path: "make-it", element: <MakeIt /> },
      //   { path: "make-it/:id", element: <MakeItDetail /> },
      //   { path: "notice", element: <Notice /> },
      //   { path: "notice/:id", element: <NoticeDetail /> },
      { path: "quiz", element: <NotAvailable /> },
      { path: "my-page", element: <MyPage /> },
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
