"use client"

import { useState, useEffect } from "react"
import { Question } from "../helpers/types"
import Quiz from './../components/Quiz';
import { quizScore } from "../helpers/store";
import Link from "next/link";

function generateRandomNumbers() {
  const numbers = Array.from(Array(55), (_, i) => i);
  const randomNumbers = [];

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    randomNumbers.push(numbers.splice(randomIndex, 1)[0]);
  }

  return randomNumbers;
}

export default function Home() {
  const [questionsIndex, setQuestionIndex] = useState<number[]>([])
  const [questionsJsonData, setQuestionsJsonData] = useState<Question[]>([])
  const [selectedQuestion, setSelectedQuestion] = useState<Question[]>([])
  const score = quizScore((state: any) => state.score)

  useEffect(() => {
    setQuestionIndex(generateRandomNumbers())
    async function callJsonData() {
      await fetch('/static/Questions.json')
        .then((res) => res.json())
        .then((data) => setQuestionsJsonData(data));
    }
    callJsonData()
  }, [])

  useEffect(() => {
    if (questionsIndex && questionsJsonData) {
      setSelectedQuestion(questionsIndex?.map((index) => questionsJsonData![index]))
    }
  }, [questionsJsonData, questionsIndex])

  return (
    <div className="flex flex-col justify-center w-screen h-auto absolute top-0">
      {selectedQuestion.map((question, index) => (<Quiz question={question} questionNumber={index + 1} key={index} />))}
      <div className="w-screen h-screen flex flex-col justify-center items-center delay-[10s]">
        <span className="font-pretendard font-bold text-3xl text-white animate-hidden-tag">7개의 문제 중, {score}개를 맞히셨습니다!</span>
        <Link href="/" className="w-[20%] h-[10%] mt-10 transition duration-[.05s] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 rounded-lg flex flex-col justify-center items-center active:translate-y-1 active:opacity-75">
          <span className="text-xl text-white font-bold">처음으로</span>
        </Link>
      </div>
    </div>
  )
}
