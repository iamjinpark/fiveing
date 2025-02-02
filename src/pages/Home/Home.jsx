import Greeting from "../../components/profile/Greeting";
import CardContainer from "../../components/card/CardContainer";
import LevelUp from "../../components/card/LevelUp";
import Reference from "../../components/card/Reference";

function Home() {
  return (
    <>
      <Greeting />
      <CardContainer />
      <LevelUp />
      <Reference />
    </>
  );
}

export default Home;
