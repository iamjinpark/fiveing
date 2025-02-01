import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Layout = () => {
  return (
    <div className="w-[360px] min-h-full overflow-y-auto mx-auto flex flex-col align-center">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
