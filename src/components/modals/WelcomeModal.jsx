import { useState } from "react";
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import HowToUSeFiveingLikeApp from "@/assets/HowToUSeFiveingLikeApp.png";
import heart from "@/assets/heart.svg";
import pb from "@/api/pocketbase.js";

function WelcomeModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const handleNext = async () => {
    if (!inputValue.trim()) {
      alert("이름을 입력해주세요!");
      return;
    }

    try {
      const userId = pb.authStore.model.id; // 로그인된 유저의 id

      await pb.collection("users").update(userId, {
        name: inputValue,
      });

      setStep(2);
    } catch (err) {
      console.error("이름 업데이트 실패:", err);
      alert("이름 저장 중 오류가 발생했어요.");
    }
  };

  //   if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="w-[320px] h-auto max-h-[500px] py-8 px-6 bg-white rounded-2xl overflow-auto">
        {step === 1 && (
          <div className="flex flex-col items-center justify-center gap-6">
            <img src={heart} alt="파이빙의 멤버가 되신걸 축하합니다!" />
            <div className="text-tomato text-2xl font-semibold text-center">
              Congraturation for being fiveing member!
            </div>

            <div className="w-full">
              <CustomInput
                type="text"
                labelClassName="text-sm text-center"
                className="border-tomato border-2"
                placeholder="your name"
                label="What name should we call you by?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <CustomButton onClick={handleNext} size="md">
              next
            </CustomButton>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-4 items-center">
            <div className="text-tomato text-2xl font-semibold text-center">
              Here’s a tip: <br />
              use fiveing like an app!
            </div>
            <img
              src={HowToUSeFiveingLikeApp}
              alt="파이빙을 홈화면에 추가하는 방법 1.브라우저 하단 공유하기 버튼을 누른다 2.홈화면에 추가를 누른다"
            />
            <CustomButton onClick={onClose} size="md">
              start
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default WelcomeModal;
