import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import defaultProfile from "@/assets/profile.svg";

function HeaderProfile({ image, onImageChange = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(defaultProfile);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    { label: "profile", onClick: () => fileInputRef.current.click() },
    { label: "my page", onClick: () => navigate("/my-page") },
    { label: "logout", onClick: () => alert("로그아웃") }, // TODO : pb 연동 후 로그아웃 기능 구현
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

  // 프로필 사진 변경
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onImageChange(imageUrl);
      setImageUrl(imageUrl);
    }
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
        <div className="absolute right-0 w-[100px] bg-white rounded-lg py-2 z-50 border-2 border-tomato">
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
