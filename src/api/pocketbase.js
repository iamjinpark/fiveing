import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_PB_API);
pb.autoCancellation(false);

export default pb;

// 포켓베이스 실행
// 1. pocketbase_fiveing 폴더로 들어가서
// 2. 명령어 ./pocketbase serve
