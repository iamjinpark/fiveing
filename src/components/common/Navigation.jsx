import home from "@/assets/home.svg";
import diary from "@/assets/diary.svg";
import makeIt from "@/assets/makeIt.svg";
import quiz from "@/assets/quiz.svg";
import notice from "@/assets/notice.svg";
import home_inactive from "@/assets/home_inactive.svg";
import diary_inactive from "@/assets/diary_inactive.svg";
import makeIt_inactive from "@/assets/makeIt_inactive.svg";
import quiz_inactive from "@/assets/quiz_inactive.svg";
import notice_inactive from "@/assets/notice_inactive.svg";

import { useNavigate, useLocation } from "react-router-dom";

function NavItem({ icon, active, onClick }) {
  return (
    <button
      className={`flex flex-col items-center gap-1 transition-all duration-300 ${
        active ? "text-tomato font-bold scale-110" : ""
      }`}
      onClick={onClick}
    >
      <img src={icon} alt={icon} />
    </button>
  );
}

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: "/home",
      icon: home_inactive,
      activeIcon: home,
    },
    {
      path: "/diary",
      icon: diary_inactive,
      activeIcon: diary,
    },
    {
      path: "/make-it",
      icon: makeIt_inactive,
      activeIcon: makeIt,
    },
    {
      path: "/quiz",
      icon: quiz_inactive,
      activeIcon: quiz,
    },
    {
      path: "/notice",
      icon: notice_inactive,
      activeIcon: notice,
    },
  ];

  return (
    <nav className="fixed bottom-0 min-w-[360px] bg-peach shadow-lg z-10">
      <div className="flex justify-around items-center py-[20px]">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            icon={location.pathname === item.path ? item.activeIcon : item.icon}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
