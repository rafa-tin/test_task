import { useState } from "react";
import { useNavigate } from "react-router-dom";

import QuestionSingle from "../UI/SingleQuestion/SingleQuestion";
import QuestionMultiple from "../UI/MultipleQuestion/MultipleQuestion";
import QuestionChooseText from "../UI/QuestionChooseText/QuestionChooseText";
import questions from "../../data/questions";
import { getOptionBg } from "../utils/utils";   // ✅ импортируем
import QuestionButton from "./QuestionButton/QuestionButton";

export default function AppQuestion() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [singleSelected, setSingleSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [nextMode, setNextMode] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = questions[current];
  const correctIds = currentQuestion.options
    .filter((item) => item.isRight)
    .map((item) => item.id);

  const isMultiple = correctIds.length > 1;

  const resetSelection = () => {
    setSelected([]);
    setSingleSelected(null);
    setChecked(false);
    setNextMode(false);
  };

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else if (selected.length < correctIds.length) {
      setSelected([...selected, id]);
    }
  };

  const checkRightOption = () => {
    setChecked(true);
    setNextMode(true);
  };

  const goToNextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
      resetSelection();
    } else {
      navigate("/latestTest");
    }
  };

  const disableExtraChoice = (item) =>
    isMultiple &&
    !selected.includes(item.id) &&
    selected.length >= correctIds.length;

  const isSubmitDisabled =
    (isMultiple && selected.length === 0 && !nextMode) ||
    (!isMultiple && singleSelected === null && !nextMode);

  return (
    <div className="flex flex-col items-center justify-center m-auto w-full">
      <h1 className=" font-bold mb-2 text-center text-[16px] sm:text-2xl w-3/4">
        {currentQuestion.question}
      </h1>
      <QuestionChooseText isMultiple={isMultiple} correctIds={correctIds} />

      <div className="flex flex-col gap-[10px] w-5/6 items-center">
        {currentQuestion.options.map((item) =>
          isMultiple ? (
            <QuestionMultiple
              key={item.id}
              item={item}
              bg={getOptionBg({ item, checked, correctIds, isMultiple, selected, singleSelected })} 
              checked={checked}
              isSelect={selected.includes(item.id)}
              toggleSelect={toggleSelect}
              disabled={disableExtraChoice(item) || checked}
            />
          ) : (
            <QuestionSingle
              key={item.id}
              item={item}
              bg={getOptionBg({ item, checked, correctIds, isMultiple, selected, singleSelected })}
              checked={checked}
              isSelect={singleSelected}
              setIsSelect={setSingleSelected}
            />
          )
        )}

        <QuestionButton
          nextMode={nextMode}
          goToNextQuestion={goToNextQuestion}
          checkRightOption={checkRightOption}
          isSubmitDisabled={isSubmitDisabled}
          current={current}
          questions={questions.length - 1}
        />
      </div>
    </div>
  );
}
