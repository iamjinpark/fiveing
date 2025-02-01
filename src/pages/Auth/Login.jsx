import React, { useState } from "react";
import CustomModal from "@/components/common/CustomModal";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* 모달 열기 버튼 */}
      <button onClick={() => setIsModalOpen(true)} className="bg-tomato hover:bg-primary-dark text-white px-5 py-2 rounded-lg">
        모달 열기
      </button>

      {/* 모달 */}
      <CustomModal size="sm" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}></CustomModal>
    </div>
  );
}

export default Login;
