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

const solveScore = (correct, all) => {Math.round((correct/ all * 100))}
const avgScore = solveScore(totalCorrect, totalQuestions)

export default function AppResult() {
  function setAllScoreColor() {
    if (avgScore > 80) return "text-green-700";
    else if (avgScore > 40 && avgScore < 80) return "text-yellow-500";
    else return "text-red-500";
  }
  function setColor () {

  }

  const allScoreColor = setAllScoreColor();

  return (
    <div className="w-full">
      <div className="flex justify-between text-xl">
        <h1>Nmber of completed tests: {passedTests.length}</h1>
        <h1>
          Average Score:{" "}
          <p className={`flex flex-row text-2xl font-bold ${allScoreColor}`}>
            {avgScore}
          </p>
        </h1>
      </div>
      <h1 className="text-center text-xl mb-5">Your completed tests</h1>
      <ul className="grid grid-cols-2">
        {passedTests.map((item) => (
          <li
            key={item.id}
            className="flex bg-gray-400 mb-2 p-4 rounded-xl w-[300px] m-auto"
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
