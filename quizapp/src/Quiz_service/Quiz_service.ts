export const getQuizDetails = async(totalQuestions: number, level: string) => {
    const res = await fetch(`Https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`)
    let {results} = await res.json();
    return results;
}