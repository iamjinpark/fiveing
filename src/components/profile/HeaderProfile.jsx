import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import defaultProfile from "@/assets/profile.svg";
import pb from "@/api/pocketbase.js";

function HeaderProfile({ image, onImageChange = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(defaultProfile);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "profile",
      onClick: () => handleMenuClick(() => fileInputRef.current.click()),
    },
    {
      label: "my page",
      onClick: () => handleMenuClick(() => navigate("/my-page")),
    },
    {
      label: "logout",
      onClick: () => handleLogout(),
    }, // TODO : pb 연동 후 로그아웃 기능 구현
  ];

  // 드롭다운 외부 클릭으로 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 프로필 이미지 불러오기
  // TODO : 매번 서버 통신 하는 문제를 해결하기
  useEffect(() => {
    const user = pb.authStore.model;
    if (user && user.profileImg) {
      const url = pb.files.getURL(user, user.profileImg);
      setImageUrl(url);
    }
  }, []);

  // 메뉴 클릭 후 드롭다운 닫기
  const handleMenuClick = (callback) => {
    setIsOpen(false);
    if (callback) callback();
  };

  // 프로필 사진 변경
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("profileImg", file);

      const userId = pb.authStore.model.id;

      const updated = await pb.collection("users").update(userId, formData);

      // 이미지 경로 만들기 (PocketBase 파일 URL 구성)
      const imageUrl = pb.files.getUrl(updated, updated.profileImg);

      // 부모에 이미지 전달 + 상태 업데이트
      onImageChange(imageUrl);
      setImageUrl(imageUrl);
      setIsOpen(false);
    } catch (err) {
      console.error("프로필 이미지 업로드 실패:", err);
      alert("이미지 업로드 중 문제가 발생했어요.");
    }
  };

  const handleLogout = async () => {
    await pb.authStore.clear();
    navigate("/login");
  };

  return (
    <div ref={dropdownRef} className="w-[40px] h-[40px] relative">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          src={imageUrl || defaultProfile}
          alt="프로필"
          className="w-[40px] h-[40px] cursor-pointer object-cover rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 w-[100px] bg-white rounded-lg py-2 z-50 border-2 !border-tomato">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="block w-full h-[36px] text-left px-3 text-tomato font-semibold leading-[36px] hover:bg-beige"
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default HeaderProfile;
