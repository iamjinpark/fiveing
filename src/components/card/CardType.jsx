import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { ClipLoader } from "react-spinners"; // ✅ react-spinners 추가

function CardType({ data, loading }) {
  return (
    <div className="w-full flex justify-center items-center">
      {/* ✅ 로딩 중일 때 스피너 표시 */}
      {loading ? (
        <ClipLoader color="#AC0000" size={50} />
      ) : (
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true} // 중앙 정렬 유지
          slidesPerView={"auto"} // 자동으로 배치되게 조정
          spaceBetween={30} // 카드 간격을 조정하여 양옆이 보이게 함
          autoHeight={true} // ✅ Swiper 높이를 자동 조정
          coverflowEffect={{
            rotate: 50, // 회전 효과
            stretch: 15, // 카드 간격 조정
            depth: 400, // 카드 겹침 정도 조정
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-full"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="flex justify-center items-center"
              style={{
                width: "260px", // 카드 너비 고정
                height: "auto",
              }}
            >
              <div
                className={`p-4 relative w-[260px] rounded-2xl flex flex-col gap-6 justify-center items-center text-center break-words 
                  ${index % 2 === 0 ? "bg-tomato text-beige" : "bg-beige text-tomato"}
                `}
                style={{ minHeight: "190px", height: "auto" }}
              >
                <p className="text-xl font-bold">{item.eng}</p>
                <p className="text-md">{item.kor}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default CardType;
