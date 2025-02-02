import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Layout = () => {
  return (
    <div className="w-[360px] min-h-screen mx-auto flex flex-col">
      <Header className="h-[75px]" />
      <main className="flex-1  pb-[55px]">
        <Outlet />
      </main>
      <Footer className="h-[55px]" />
    </div>
  );
};

export default Layout;
