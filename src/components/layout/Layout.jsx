import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const Layout = () => {
  return (
    <div class="w-[360px] min-h-full overflow-y-auto mx-auto flex justify-center">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
