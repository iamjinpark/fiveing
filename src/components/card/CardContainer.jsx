import { useState, useEffect } from "react";
import cardIcon from "@/assets/cardIcon.svg";
import listIcon from "@/assets/listIcon.svg";
import cardIcon_unselected from "@/assets/cardIcon_unselected.svg";
import listIcon_unselected from "@/assets/listIcon_unselected.svg";
import DateSlider from "./DateSlider";
import CardType from "./CardType";
import ListType from "./ListType";
import pb from "@/api/pocketbase.js";

function CardContainer() {
  const [type, setType] = useState("card");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("sv-SE")
  ); // YYYY-MM-DD

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const startOfDay = `${selectedDate} 00:00:00`;
        const endOfDay = `${selectedDate} 23:59:59`;

        const record = await pb
          .collection("fiveingList")
          .getFirstListItem(`date >= '${startOfDay}' && date <= '${endOfDay}'`);

        setData(record.fiveingList);
      } catch (err) {
        if (err.status === 404) {
          setData([]);
          setError(null);
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    console.log("현재 선택된 날짜:", selectedDate);
  }, [selectedDate]);

  return (
    <div className="w-full flex flex-col items-center pt-5">
      {/* 제목 & 버튼 영역 */}
      <div className="w-[320px] flex flex-row justify-between">
        <h2 className="text-tomato text-2xl font-bold">today's fiveing</h2>
        <div className="flex flex-row gap-5">
          <button onClick={() => setType("card")}>
            <img
              src={type === "card" ? cardIcon : cardIcon_unselected}
              alt="카드"
            />
          </button>
          <button onClick={() => setType("list")}>
            <img
              src={type === "list" ? listIcon : listIcon_unselected}
              alt="리스트"
            />
          </button>
        </div>
      </div>

      {/* 카드 영역 */}
      <DateSlider
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div
        className="w-[350px] bg-peach rounded-2xl drop-shadow-md py-7 px-5 h-auto flex flex-col"
        style={{ height: "auto" }}
      >
        {/* ✅ 데이터가 없는 경우 '준비 중' 표시 */}
        {!loading && !error && data?.length === 0 && (
          <p className="text-tomato text-lg font-bold text-center">
            {selectedDate.split("-")[2]}일의 파이빙을 기다려주세요!
          </p>
        )}

        {type === "card" ? (
          <div className="w-full h-auto">
            <CardType date={selectedDate} data={data} loading={loading} />
          </div>
        ) : (
          <ListType
            date={selectedDate}
            data={data}
            type="fiveing"
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}

export default CardContainer;
