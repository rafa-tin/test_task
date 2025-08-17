import { useState } from "react";
import questions from "../../data/questions";
import RenderInfo from "./RenderInfo/RenderInfo";
import ChooseInfo from "./ChooseInfo/ChooseInfo";
import profileData from '../../data/person'


const infoButtons = [
    {id: 1, value: 'about', message: "About Me"},
    {id: 2, value: 'local', message: "Local Info"},
]

export default function AppProfile() {
  const [info, setInfo] = useState("about");
  const passedTests = profileData.progress;
  const totalCorrect = passedTests.reduce(
    (sum, test) => sum + test.correctAnwers,
    0
  );
  const totalQuestions = passedTests.reduce(
    (sum, test) => sum + test.questions,
    0
  );
  const avgScore = Math.round((totalCorrect / totalQuestions) * 100);

  return (
    <section className="grid grid-cols-[1fr_3fr] w-full">
      <div className="border-r-1 border-r-gray-400">
        <ul className="flex flex-col ">
            {infoButtons.map(item => (
                <ChooseInfo key={item.id} onClick={() => setInfo(item.value)}>{item.message}</ChooseInfo>
            ))}
        </ul>
      </div>
        <RenderInfo info={info} profileData={profileData}/>
    </section>
  );
}
