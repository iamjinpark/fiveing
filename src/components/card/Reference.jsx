import reference1 from "@/assets/reference1.png";
import reference2 from "@/assets/reference2.png";

function Reference() {
  return (
    <div className="w-full px-5">
      <div className="text-tomato text-2xl font-bold">reference</div>
      <div className="flex justify-between py-5">
        {/* 뒹굴신 */}
        <div className="flex flex- row gap-2">
          <img
            src={reference1}
            alt="뒹굴신"
            className="w-[60px] h-[60px] border-3 border-[#AC0000] rounded-lg"
          />
          <div className="text-sm text-tomato flex flex-col">
            <div className="font-semibold">뒹굴신</div>
            <a href="https://www.youtube.com/@6am">youtube</a>
            <a href="https://dingulsin.tistory.com/">blog</a>
          </div>
        </div>
        {/* 빨모쌤 */}
        <div className="flex flex- row gap-2">
          <img
            src={reference2}
            alt="라이브아카데미"
            className="w-[60px] h-[60px] border-3 border-[#AC0000] rounded-lg"
          />
          <div className="text-sm text-tomato flex flex-col">
            <div className="font-semibold">라이브아카데미 토들러</div>
            <a href="https://www.youtube.com/@LA-TDLR">youtube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reference;
