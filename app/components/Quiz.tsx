import { useState } from "react"
import { Question, QuizScore } from "../helpers/types"
import { quizScore } from "../helpers/store"

interface Quiz {
    question: Question,
    questionNumber: number
}

export default function Quiz(props: Quiz) {
    const [hasSelected, setHasSelected] = useState<boolean>(false)
    const [hasCorrect, setHasCorrect] = useState<boolean | null>(null)
    const [hasClickNext, setHasClickNext] = useState<boolean>(false)
    const addScore = quizScore((state: any) => state.addScore)

    function Discrimination(res: boolean) {
        const result = props.question.answer === res
        if (result) {
            addScore()
        }
        setHasCorrect(result)
        setHasSelected(true)
    }

    return (
        hasClickNext ? null
            :
            (
                <div className="w-full flex flex-col items-center">
                    <div className="bg-white w-[70vw] h-[70vh] my-[20vh] rounded-xl">
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            {hasSelected && (hasCorrect !== null) ?
                                <div className="flex flex-col justify-center items-center">
                                    {hasCorrect ?
                                        <div className="flex flex-col items-center">
                                            <div className="w-[10vw] h-[10vw] bg-blue-600 rounded-full text-8xl font-bold text-white mb-2 flex flex-col justify-center items-center">O</div>
                                            <span className="font-pretendard font-black text-4xl mb-10">정답입니다</span>
                                            <span className="font-pretendard font-bold text-2xl px-10 text-center">{props.question.description}</span>
                                        </div>
                                        :
                                        <div className="flex flex-col items-center">
                                            <div className="w-[10vw] h-[10vw] bg-red-600 rounded-full text-8xl font-bold text-white mb-2 flex flex-col justify-center items-center">X</div>
                                            <span className="font-pretendard font-black text-4xl mb-10">오답입니다</span>
                                            <span className="font-pretendard font-bold text-2xl px-10 text-center">{props.question.description}</span>
                                        </div>
                                    }
                                    <div onClick={() => setHasClickNext(true)} className="px-5 py-2 bg-green-600 text-white font-pretendard font-semibold my-5 rounded-md duration-[.1s] hover:bg-green-700 active:translate-y-1">다음문제</div>
                                </div>
                                :
                                <div className="w-full flex flex-col justify-center items-center">
                                    {props.question ?
                                        <span className="font-pretendard font-bold text-2xl mb-20 px-10 text-center">{props.questionNumber}. {props.question.question}</span>
                                        :
                                        null
                                    }
                                    <div className="w-full flex flex-row justify-center">
                                        <div onClick={() => Discrimination(true)} className="w-[25%] h-[10vh] bg-blue-600 mx-5 rounded-md flex flex-col justify-center items-center text-3xl font-bold text-white duration-[0.1s] hover:bg-blue-700 active:translate-y-1">O</div>
                                        <div onClick={() => Discrimination(false)} className="w-[25%] h-[10vh] bg-red-600 mx-5 rounded-md flex flex-col justify-center items-center text-3xl font-bold text-white duration-[0.1s] hover:bg-red-700 active:translate-y-1">X</div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )
    )
}