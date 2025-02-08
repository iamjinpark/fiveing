import { useState } from "react";
import cardIcon from "@/assets/cardIcon.svg";
import listIcon from "@/assets/listIcon.svg";
import cardIcon_unselected from "@/assets/cardIcon_unselected.svg";
import listIcon_unselected from "@/assets/listIcon_unselected.svg";
import DateSlider from "./DateSlider";
import CardType from "./CardType";
import ListType from "./ListType";

function CardContainer() {
  const [type, setType] = useState("card");
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

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
        className="w-[350px] bg-peach rounded-2xl drop-shadow-md py-5 px-5 h-auto flex flex-col"
        style={{ height: "auto" }}
      >
        {type === "card" ? (
          <div className="w-full h-auto">
            <CardType date={selectedDate} />
          </div>
        ) : (
          <ListType date={selectedDate} />
        )}
      </div>
    </div>
  );
}

export default CardContainer;
