import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import Question from "../components/Question";
import useSWR from "swr";
import { Apis } from "../api/axios";
import NavbarComponent from "../components/Navbar";
import NavQuestion from "../components/NavQuestion";
import { useEffect } from "react";
import { useAnswers } from "../state/store.js";
import { Button } from "flowbite-react";
const Exam = () => {
  const lang = useLocation().state;
  const [isSubmit, setIsSubmit] = useState(false);
  const [report, setReport] = useState<{
    questionCount?: number;
    trueAnswerCount?: number;
  }>({});
  const { quizSlugName } = useParams();
  const { updateData, data: answersData } = useAnswers();
  const { data, isLoading, error } = useSWR(
    quizSlugName && lang ? `/api/questions-list/${quizSlugName}/${lang}` : null,
    Apis.getQuestion
  );

  const quiz = data?.[0];
  useEffect(() => {
    data &&
      updateData({
        name: quiz?.slug,
        questions: quiz?.questions.flatMap(({ id, answers }) => ({
          questionId: id,
          correctAnswerId: answers.filter(
            ({ correct_answer }) => correct_answer === true
          )?.[0]?.id,
          selectedAnswerId: null,
        })),
      });
  }, [data]);

  const submitHandle = () => {
    const questionCount = quiz?.questions?.length || 0;
    const trueAnswerCount =
      answersData
        ?.filter(({ name }) => name === quizSlugName)?.[0]
        ?.questions?.filter(
          ({ correctAnswerId, selectedAnswerId }) =>
            Number(correctAnswerId) === Number(selectedAnswerId)
        ).length || 0;

    setIsSubmit(true);
    setReport({
      questionCount: questionCount,
      trueAnswerCount: trueAnswerCount,
    });
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error</div>
  ) : quiz?.questions?.length === 0 ? (
    <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Imtahan Təyin olunmayıb
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sessiya Tapılmadı
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  ) : (
    <div className="container relative">
      <NavbarComponent isActive />
      <h2 className="text-2xl font-semibold">{data?.[0]?.name}</h2>
      <div className="relative flex gap-4 my-4">
        <div className="grid w-9/12 gap-4">
          {quiz?.questions?.map(({ id, ...question }, index) => (
            <Question
              key={id}
              id={id}
              quizName={quizSlugName || ""}
              index={index}
              isSumbit={isSubmit}
              {...question}
            />
          ))}
          <Button
            className="flex my-4 ml-auto"
            disabled={isSubmit}
            onClick={() => submitHandle()}
          >
            Imtahani Bitir
          </Button>
        </div>

        <div className="fixed grid gap-4 right-20">
          <div className="w-full max-w-xs p-4 bg-white border rounded">
            <p className="mb-2">Suallarin Naviqasiyasi</p>

            <div className="grid grid-cols-5 gap-2">
              {answersData?.[0]?.questions?.map(
                ({ selectedAnswerId, questionId: id }, index) => (
                  <NavQuestion
                    lang={lang}
                    key={id}
                    id={id}
                    selectedAnswerId={selectedAnswerId}
                    index={index}
                  />
                )
              )}
            </div>
          </div>

          {isSubmit && (
            <div className="w-full max-w-xs p-4 bg-white border rounded">
              <p className="mb-2">Nəticə</p>

              <div className="grid gap-2">
                <p>Sualların sayı : {report?.questionCount}</p>
                <p>Düzgün Cavabların sayı : {report?.trueAnswerCount}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exam;
