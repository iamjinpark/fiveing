import notAvailable from "@/assets/notAvailable.png";

function NotAvailable() {
  return (
    // TODO : 높이 수정하기
    <div className="w-full h-[calc(100vh-130px)] flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="text-tomato text-4xl font-extrabold">NOT AVAILABLE</div>
        <img
          src={notAvailable}
          alt="현재 이용 불가능한 페이지입니다."
          className="py-8 w-[250px]"
        />
        <div className="text-tomato text-4xl font-extrabold">FOR THIS PAGE</div>
      </div>
    </div>
  );
}

export default NotAvailable;
