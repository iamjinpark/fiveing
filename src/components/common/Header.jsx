import logo from "@/assets/logo.svg";
import profile from "@/assets/profile.svg";
import HedaerProfile from "../profile/HeaderProfile";

function Header() {
  return (
    <div className="w-full flex flex-row px-5 py-3 justify-between items-center">
      <a href="/home">
        <img src={logo} alt="파이빙" className="w-[50px] h-[45px]" />
      </a>
      <HedaerProfile />
    </div>
  );
}

export default Header;
