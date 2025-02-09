import { useState, useEffect } from "react";
import CustomButton from "@/components/common/CustomButton";
import ListType from "./ListType";
import pb from "@/api/pocketbase.js";

function LevelUp() {
  const [isLevelUp, setLevelUp] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLevelUp) return;

    async function fetchLevelUpData() {
      try {
        setLoading(true);
        setError(null);

        const records = await pb.collection("levelup").getList(1, 5, {
          sort: "created",
        });

        setData(records.items);
      } catch (err) {
        console.error("🚨 데이터 불러오기 오류:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLevelUpData();
  }, [isLevelUp]); 

  const toggleLevelUpButton = () => {
    setLevelUp((prev) => !prev);
  };

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
        <div className="mt-5 py-7 px-5 w-[340px] min-h-[200px] bg-peach rounded-2xl drop-shadow-md flex flex-col items-center transition-all duration-500 ease-in-out opacity-100 scale-100">
          <div className="text-tomato text-2xl font-bold self-start pb-4">
            level up
          </div>
          <ListType data={data} type="levelup" />
        </div>
      )}
    </div>
  );
}

export default LevelUp;
