import React, { useEffect } from "react";
import { Question as QuestionProps } from "../types";
import { useForm } from "react-hook-form";
import { useAnswers } from "../state/store";

const Question = ({
  id,
  text,
  answers,
  index,
  quizName,
  isSumbit = false,
}: QuestionProps & { quizName: string; index: number; isSumbit: boolean }) => {
  const { register, reset, watch, getValues } = useForm();
  const { updateSelectedAnswer } = useAnswers();
  useEffect(() => {
    const subscribe = watch((w) => {
      const selectedAnswer = Object.values(w)[0];
      updateSelectedAnswer({
        quizName: quizName || "",
        selectedAnserId: selectedAnswer,
        questionId: id,
      });
    });

    return () => subscribe.unsubscribe();
  }, [watch]);

  return (
    <div className="px-4 py-2 border rounded-xl" id={`question${id}`}>
      <div className="mb-4">
        Sual {index + 1}
        <h3 className="text-lg font-medium">{text}</h3>
      </div>
      <div className="grid gap-4 my-2">
        {answers?.map(
          ({ id: answerId, answer_text, correct_answer }, index) => (
            <label
              className="flex items-center gap-4 cursor-pointer w-fit"
              key={answerId}
            >
              <input
                disabled={isSumbit}
                type="radio"
                value={answerId}
                {...register(`${id}`)}
                className="h-full border appearance-none peer checked:bg-blue-600"
              />
              <span
                className={`flex items-center justify-center w-4 px-4 py-1 border rounded peer-checked:bg-blue-600 peer-checked:text-white ${
                  isSumbit &&
                  (correct_answer
                    ? "bg-green-600 text-white"
                    : "peer-checked:bg-red-600 peer-checked:text-white")
                }`}
              >
                {index === 0
                  ? "A"
                  : index === 1
                  ? "B"
                  : index === 3
                  ? "C"
                  : index === 4
                  ? "D"
                  : "E"}
              </span>
              <span
                className={`peer-checked:text-blue-600 ${
                  isSumbit &&
                  (correct_answer
                    ? "text-green-600"
                    : "peer-checked:text-red-600")
                }`}
              >
                {answer_text}
              </span>
            </label>
          )
        )}
      </div>
    </div>
  );
};

export default Question;
