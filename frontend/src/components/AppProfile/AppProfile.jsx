import { useState } from "react";
import questions from "../../data/questions";
import RenderInfo from "./RenderInfo/RenderInfo";
import ChooseInfo from "./ChooseInfo/ChooseInfo";

const profileData = {
  name: "Rafkat",
  surname: "Gatin",
  age: 20,
  gender: "male",
  country: "Uzbekistan",
  city: "Tashkent",
  number: "+998 90 319 50 12",
  mail: "rafa@mail.com",
  avatar: "avatar.svg",
  password: "123password",
  tariff: "free",
  progress: [
    { id: 1, testName: "For Beginners", correctAnwers: 10, questions: 10 },
    {
      id: 2,
      testName: "For Beginners chapter 2",
      correctAnwers: 10,
      questions: 10,
    },
    { id: 3, testName: "For Beginners pro", correctAnwers: 9, questions: 10 },
    {
      id: 4,
      testName: "Check your knowledge",
      correctAnwers: 6,
      questions: 10,
    },
    { id: 5, testName: "Vocabulary", correctAnwers: 8, questions: 10 },
    { id: 6, testName: "Vocabulary 2", correctAnwers: 6, questions: 10 },
    { id: 7, testName: "Vocabulary 3 ", correctAnwers: 2, questions: 10 },
    { id: 8, testName: "Vocabulary 4", correctAnwers: 8, questions: 10 },
    { id: 9, testName: "Theory", correctAnwers: 3, questions: 10 },
    { id: 10, testName: "For Beginners", correctAnwers: 10, questions: 10 },
  ],
};

const infoButtons = [
    {id: 1, value: 'about', message: "About Me"},
    {id: 2, value: 'local', message: "Local Info"},
    {id: 3, value: 'progress', message: "Progress"}
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
    <section className="grid grid-cols-[1fr_3fr]">
      <div className="border-r-1 border-r-gray-400 h-full">
        <ul className="flex flex-col ">
            {infoButtons.map(item => (
                <ChooseInfo key={item.id} onClick={() => setInfo(item.value)}>{item.message}</ChooseInfo>
            ))}
        </ul>
      </div>
        <RenderInfo info={info} passedTests={passedTests} profileData={profileData} avgScore={avgScore}/>
    </section>
  );
}
