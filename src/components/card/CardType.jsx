import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function CardType() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={false}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 50, // 회전 효과 제거 (겹침 방지)
        stretch: 30, // 카드 간격 조정
        depth: 500, // 카드가 겹치는 정도 조절
        modifier: 1,
        slideShadows: false, // 그림자 제거
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="h-full w-full"
    >
      {[...Array(5)].map((_, index) => (
        <SwiperSlide key={index}>
          <div
            className={`relative w-[260px] h-[200px] rounded-xl flex justify-center items-center text-2xl font-bold
                  ${index % 2 === 0 ? "bg-tomato text-beige" : "bg-beige text-tomato"}
                `}
          >
            Card {index + 1}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardType;
