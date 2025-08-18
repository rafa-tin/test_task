import profileData from "../../data/person";
import ListResults from "./ListResults/ListResults";
import TopText from "./TopText/TopText";

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

export default function AppResult() {
  function setUnqColor(correct, all, value) {
    const avgValue = Math.round((correct / all) * 100);
    switch (value) {
      case "bgColor":
        if (avgValue >= 80) return "bg-green-700";
        else if (avgValue >= 40 && avgValue <= 80) return "bg-yellow-500";
        else return "bg-red-500";
        break;
      case "textColor":
        if (avgValue > 80) return "text-green-700";
        else if (avgValue > 40 && avgValue < 80) return "text-yellow-500";
        else return "text-red-500";
    }
  }

  return (
    <div className="w-full p-1 md:p-4">
      <TopText
        contTests={passedTests.length}
        setUnqColor={setUnqColor(totalCorrect, totalQuestions, "textColor")}
        solveScore={solveScore(totalCorrect, totalQuestions)}
      />
      <h1 className="text-center text-xl mb-5">Your completed tests</h1>
      <ListResults passedTests={passedTests} setUnqColor={setUnqColor} />
    </div>
  );
}
