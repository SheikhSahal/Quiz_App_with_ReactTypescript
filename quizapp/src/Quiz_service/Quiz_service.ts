import { QuestionType, Quiz } from './../Classes/quiz_types'

export const getQuizDetails = async (totalQuestions: number, level: string): Promise<Quiz[]> => {
    const res = await fetch(`Https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let { results } = await res.json();

    const quiz = results.map((questionObj: Quiz, ind : number) => {
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            option: questionObj.incorrect_answers
        }
    })
    return results;
} 

