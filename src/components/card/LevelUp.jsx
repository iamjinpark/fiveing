import { useState } from "react";
import CustomButton from "@/components/common/CustomButton";

function LevelUp() {
  const [isLevelUp, setLevelUp] = useState(false);

  const toggleLevelUpButton = () => {
    setLevelUp((prev) => !prev);
  };

  // ✅ 서버에서 받아온 데이터
  const mockData = [
    { id: 1, text: "첫 번째 박스" },
    { id: 2, text: "두 번째 박스" },
    { id: 3, text: "세 번째 박스" },
    { id: 4, text: "네 번째 박스" },
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
          <div className="w-full flex flex-col gap-3 pt-4">
            {mockData.map((item, index) => (
              <div
                key={item.id}
                className={`p-4 rounded-lg text-center font-semibold ${
                  index % 2 === 0
                    ? "bg-beige text-tomato"
                    : "bg-tomato text-white"
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LevelUp;
