import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function CardType() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true} // 중앙 정렬 유지
      slidesPerView={"auto"} // 자동으로 배치되게 조정
      spaceBetween={30} // 카드 간격을 조정하여 양옆이 보이게 함
      autoHeight={true}
      coverflowEffect={{
        rotate: 50, // 회전 효과
        stretch: 15, // 카드 간격 조정
        depth: 400, // 카드 겹침 정도 조정
        modifier: 1,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className=" w-full"
      style={{ height: "auto" }}
    >
      {[...Array(5)].map((_, index) => (
        <SwiperSlide
          key={index}
          className="flex justify-center items-center"
          style={{
            width: "260px", // 카드 너비 고정
            height: "auto",
          }}
        >
          <div
            className={`relative w-[260px] h-[200px] rounded-2xl flex flex-col gap-4 justify-center items-center text-lg font-bold
                  ${index % 2 === 0 ? "bg-tomato text-beige" : "bg-beige text-tomato"}
                `}
            style={{ minHeight: "200px", height: "auto" }}
          >
            <p className="w-full px-3 py-3 text-center break-words whitespace-pre-spaces">
              you know him better than anyone
            </p>
            <p className="w-full px-3 py-3 text-center break-words whitespace-pre-spaces">
              넌 누구보다 그를 잘 알잖아
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardType;
