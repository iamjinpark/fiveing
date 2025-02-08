import { useState } from "react";
import CustomButton from "@/components/common/CustomButton";
import ListType from "./ListType";

function LevelUp() {
  const [isLevelUp, setLevelUp] = useState(false);

  const toggleLevelUpButton = () => {
    setLevelUp((prev) => !prev);
  };

  // ✅ 서버에서 받아온 데이터
  const levelUpMockData = [
    {
      id: 1,
      kor: "레벨업 첫 번째 단계: 꾸준함이 중요합니다!",
      eng: "Level up step 1: Consistency is key!",
    },
    {
      id: 2,
      kor: "지금까지 배운 내용을 복습하고, 새로운 목표를 설정하세요.",
      eng: "Review what you've learned and set new goals.",
    },
    {
      id: 3,
      kor: "더 깊이 있는 학습을 위해 관련 자료를 찾아보세요.",
      eng: "Look for additional resources for deeper learning.",
    },
    {
      id: 4,
      kor: "실제 프로젝트에 적용해 보면서 경험을 쌓아 보세요!",
      eng: "Apply what you've learned to real projects and gain experience!",
    },
    {
      id: 5,
      kor: "마지막 단계! 도전을 멈추지 말고 계속 성장하세요.",
      eng: "Final step! Keep challenging yourself and continue to grow.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center p-7">
      <CustomButton
        variant={isLevelUp ? "tomato" : "outline"}
        size="levelup"
        onClick={toggleLevelUpButton}
      >
        {isLevelUp ? "here's more for you!" : "want more to level up?"}
      </CustomButton>

      {/* 클릭시 나타나는 레벨업 박스 */}
      {isLevelUp && (
        <div className="mt-5 p-4 w-[340px] min-h-[200px] bg-peach rounded-2xl drop-shadow-md flex flex-col items-center transition-all duration-500 ease-in-out opacity-100 scale-100">
          <div className="text-tomato text-2xl font-bold self-start ">
            level up
          </div>
          {/* levelup card container */}
          <ListType data={levelUpMockData} />
        </div>
      )}
    </div>
  );
}

export default LevelUp;
