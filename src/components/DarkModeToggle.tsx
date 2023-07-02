"use client"
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

function DarkModeToggle() {
  const mode = "dark";
  return (
    <div className="relative flex flex-row justify-around w-12 h-6 gap-2 border-2 rounded-full">
      <div className="">
        <CiLight />
      </div>
      <div className="">
        <CiDark />
      </div>
      <div className="absolute right-0 w-4 h-4 bg-green-400 rounded-full"></div>
    </div>
  )
}

export default DarkModeToggle