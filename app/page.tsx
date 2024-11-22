"use client"

import Link from "next/link";
import { quizScore } from "./helpers/store";

export default function Home() {
  const removeScore = quizScore((state: any) => state.removeScore)
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <span className="font-pretendard font-bold text-6xl">게임처럼 풀어보는 IT 퀴즈</span>
      <span className="font-pretendard text-2xl mt-2">당신은 얼마나 알고있나요? 한번 퀴즈를 풀어봅시다!</span>
      <Link href="/questions" onClick={() => (removeScore())} className="w-[20%] h-[10%] mt-10 transition duration-[.05s] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 rounded-lg flex flex-col justify-center items-center active:translate-y-1 active:opacity-75">
        <span className="text-xl text-white font-bold">START</span>
      </Link>
    </div>
  )
}
