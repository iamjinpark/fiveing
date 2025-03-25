import { ClipLoader } from "react-spinners"; // ✅ react-spinners 추가
import LoadingSpinner from "@/components/common/loadingSpinner";

function ListType({ data, type, loading }) {
  return (
    <div className="w-full h-auto flex flex-col gap-5">
      {loading ? (
        <div className="flex justify-center items-center h-32">
          {/* <ClipLoader color="#AC0000" size={50} />
           */}
          <LoadingSpinner />
        </div>
      ) : (
        data.map((item, index) => (
          <div
            key={item.id}
            className={`p-4 rounded-2xl text-center min-h-[50px] flex flex-col gap-4 items-center justify-center break-words
                  ${index % 2 === 0 ? "bg-tomato text-white" : "bg-beige text-tomato"}
                `}
          >
            {/* ✅ Fiveing 버전 */}
            {type === "fiveing" && (
              <>
                <p className="text-xl font-bold">{item.eng}</p>
                <p className="text-md">{item.kor}</p>
              </>
            )}

            {/* ✅ LevelUp 버전 */}
            {type === "levelup" && (
              <>
                <p className="text-xl font-bold">{item.levelup_eng}</p>
                <p className="text-md">{item.levelup_kor}</p>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default ListType;
