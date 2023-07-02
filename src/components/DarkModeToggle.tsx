"use client"
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

function DarkModeToggle() {

  return (
    <div className="flex flex-row w-12 h-6 gap-2 ">
      <div className="">
        <CiLight />
      </div>
      <div className="">
        <CiDark />
      </div>
    </div>
  )
}

export default DarkModeToggle