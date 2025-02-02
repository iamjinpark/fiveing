import notFound from "@/assets/notFound.png";

function NotFound() {
  return (
    <div className="w-full h-[calc(100vh-132px)] flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="text-tomato text-4xl font-extrabold">OOPS!</div>
        <img
          src={notFound}
          alt="찾을 수 없는 페이지입니다."
          className="py-8 w-[250px]"
        />
        <div className="text-tomato text-4xl font-extrabold">NOT FOUND</div>
      </div>
    </div>
  );
}

export default NotFound;
