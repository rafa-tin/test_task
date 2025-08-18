import profileData from "../../data/person";

const passedTests = profileData.progress;
const totalCorrect = passedTests.reduce(
  (sum, test) => sum + test.correctAnwers,
  0
);
const totalQuestions = passedTests.reduce(
  (sum, test) => sum + test.questions,
  0
);

const solveScore = (correct, all) => Math.round((correct / all) * 100);
const avgScore = solveScore(totalCorrect, totalQuestions);

export default function AppResult() {
  function setAllScoreColor() {
    if (avgScore > 80) return "text-green-700";
    else if (avgScore > 40 && avgScore < 80) return "text-yellow-500";
    else return "text-red-500";
  }
  function setColor(correct, all) {
    const scoreValue = solveScore(correct, all);
    console.log(scoreValue);
    if (scoreValue >= 80) return "bg-green-700";
    else if (scoreValue >= 40 && scoreValue <= 80) return "bg-yellow-500";
    else return "bg-red-500";
  }

  const allScoreColor = setAllScoreColor();

  return (
    <div className="w-full p-1 md:p-4">
      <div className="flex justify-between text-xl gap-2">
        <h1 className="pl-2">Nmber of completed tests: {passedTests.length}</h1>
        <div className="text-end items-end pr-1">
          <h1 className="flex justify-end flex-col ">Average Score:</h1>
          <p
            className={`flex flex-row text-2xl font-bold justify-end ${setAllScoreColor()}`}
          >
            {avgScore}/100
          </p>
        </div>
      </div>
      <h1 className="text-center text-xl mb-5">Your completed tests</h1>
      <ul className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {passedTests.map((item) => (
          <li
            key={item.id}
            className={`flex ${setColor(
              item.correctAnwers,
              item.questions
            )} mb-2 p-4 rounded-xl w-[300px] m-auto`}
          >
            <h1 className="w-[200px]">{item.testName}: </h1>
            <p className="ml-5">
              {item.correctAnwers}/{item.questions}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
