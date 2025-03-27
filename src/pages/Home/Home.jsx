import { useEffect, useState } from "react";
import Greeting from "@/components/profile/Greeting";
import CardContainer from "@/components/card/CardContainer";
import LevelUp from "@/components/card/LevelUp";
import Reference from "@/components/card/Reference";
import WelcomeModal from "@/components/modals/WelcomeModal";

function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isNewUser = sessionStorage.getItem("isNewUser") === "true"; //실제로는 true로 바꿔주기

    if (isNewUser) {
      setShowModal(true);
    }
  }, []);

  return (
    <>
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
      <Greeting />
      <CardContainer />
      <LevelUp />
      <Reference />
    </>
  );
}

export default Home;
