import { ArrowDown2, Calendar } from "iconsax-react"
import React from "react"
import { BellIcon } from "../assets/icons"
import avatar from "../assets/images/avartar.svg"

const NavBar = () => {
  return (
    <div className="px-5 py-[18px] w-full flex items-center justify-between">
      <div className="text-zinc-800 text-xl font-semibold font-PlusJakartaSansleading-7">
        Dashboard
      </div>

      <div className=" px-4 flex items-center justify-center gap-5">
        <input
          className="w-[349px] h-12 rounded-[20px] justify-start  pl-4 bg-white  border border-zinc-300  items-center gap-2 flex"
          placeholder=" Search..."
        />
        <div className="text-zinc-800 text-sm font-medium font-Inter leading-snug flex items-center justify-center gap-[10px]">
          <Calendar color="#000000" />
          November 15, 2023
        </div>
        <div
          className="rounded-[50%] border-2 border-gray-300 p-[11px]
    "
        >
          <BellIcon />
        </div>
        <div className="w-[215px] h-[52px] px-2 py-1.5 rounded-[28px] border border-zinc-300 justify-center items-center gap-3 flex">
          <div className="flex gap-x-2">
            <img src={avatar} alt="" className="" />
            <div className="flex flex-col  text-right text-zinc-800 text-base font-normal font-Inter">
              <div className="text-right text-zinc-800 text-base font-normal font-Inter">
                Justin Bergson
              </div>
              <div class="text-right text-zinc-500 text-sm font-normal font-Inter">
                Justin@gmail.com
              </div>
            </div>
          </div>
          <ArrowDown2 size="24" color="#0D062D" />
        </div>
      </div>
    </div>
  )
}

export default NavBar
