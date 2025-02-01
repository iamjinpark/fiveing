import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div class="w-[360px] min-h-full overflow-y-auto mx-auto flex justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
