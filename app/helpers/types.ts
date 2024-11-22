export interface Question {
    question: string,
    answer: boolean,
    description: string
}

export interface QuizScore {
    score: number,
    addScore: (state: number) => void,
}