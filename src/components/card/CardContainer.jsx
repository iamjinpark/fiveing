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
  const listMockData = [
    {
      id: 1,
      kor: "오늘의 할 일: 아침 스트레칭 10분",
      eng: "Today's task: 10-minute morning stretching",
    },
    {
      id: 2,
      kor: "책 읽기: 하루 30분 독서로 지식 쌓기",
      eng: "Reading time: 30 minutes a day to build knowledge",
    },
    {
      id: 3,
      kor: "프로그래밍 연습: 알고리즘 문제 3개 풀기",
      eng: "Programming practice: Solve 3 algorithm problems",
    },
    {
      id: 4,
      kor: "건강 챙기기: 물 2L 마시기와 가벼운 산책",
      eng: "Stay healthy: Drink 2L of water and take a short walk",
    },
    {
      id: 5,
      kor: "자기 성장: 오늘의 하루를 회고하며 짧은 글 작성",
      eng: "Self-growth: Write a short reflection on your day",
    },
  ];

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
        {type === "card" ? (
          <div className="w-full h-auto">
            <CardType date={selectedDate} data={listMockData} />
          </div>
        ) : (
          <ListType date={selectedDate} data={listMockData} />
        )}
      </div>
    </div>
  );
}

export default CardContainer;
