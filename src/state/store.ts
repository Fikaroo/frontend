import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IUseAnswers {
  data: {
    name?: string;
    questions?: {
      questionId?: number;
      correctAnswerId?: number;
      selectedAnswerId?: number | null;
    }[];
  }[];
  updateData: (newData: {
    name?: string;
    questions?: {
      questionId?: number;
      correctAnswerId?: number;
      selectedAnswerId?: number | null;
    }[];
  }) => void;

  updateSelectedAnswer: ({
    selectedAnserId,
    questionId,
    quizName,
  }: {
    selectedAnserId: number;
    questionId: number;
    quizName: string;
  }) => void;
}

export const useAnswers = create<IUseAnswers, [["zustand/devtools", never]]>(
  devtools((set) => ({
    data: [],
    updateData: (newData) =>
      set((state) => ({
        ...state,
        data: [...state.data, newData],
      })),

    updateSelectedAnswer: ({
      selectedAnserId: sAId,
      questionId: qId,
      quizName,
    }) =>
      set((state) => {
        const quizIndex = state.data.findIndex(({ name }) => name === quizName);
        const newQuestions = state.data?.[quizIndex].questions?.map(
          ({ questionId, ...question }) =>
            questionId === qId
              ? {
                  questionId,
                  ...question,
                  selectedAnswerId: Number(sAId),
                }
              : { questionId, ...question }
        );
        return {
          ...state,
          data: [
            ...state.data.slice(0, quizIndex),
            {
              name: quizName,
              questions: newQuestions,
            },
            ...state.data.slice(quizIndex),
          ],
        };
      }),
  }))
);
