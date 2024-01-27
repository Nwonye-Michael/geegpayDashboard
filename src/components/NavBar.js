import { ArrowDown2, Calendar } from "iconsax-react"
import React from "react"
import { BellIcon } from "../assets/icons"
import avatar from "../assets/images/avartar.svg"

const NavBar = () => {
  return (
    <div className="w-full">
      {" "}
      <div className="px-5 py-[18px] w-full items-center justify-between hidden md:flex ">
        <div className="text-zinc-800 text-xl font-semibold font-PlusJakartaSansleading-7">
          Dashboard
        </div>

        <div className=" px-4 flex md:flex-row items-center justify-center gap-5">
          <input
            className="w-[349px] h-12 rounded-[20px] justify-start  pl-4 bg-white  border border-zinc-300  items-center gap-2 flex"
            placeholder=" Search..."
          />
          <div className="text-zinc-800 text-sm font-medium font-Inter leading-snug hidden xl:flex items-center justify-center gap-[10px]">
            <Calendar color="#000000" />
            November 15, 2023
          </div>
          <div
            className="rounded-[50%] xl:border-2  border-gray-300 p-[11px]
    "
          >
            <BellIcon className={"scale-75 xl:scale-100"} />
          </div>
          <div className="xl:w-[215px] w-fit h-[52px] px-2 py-1.5 rounded-[28px] xl:border border-zinc-300 justify-center items-center gap-3 flex">
            <div className="flex gap-x-2">
              <img src={avatar} alt="" className="" />
              <div className="hidden xl:flex flex-col  text-right text-zinc-800 text-base font-normal font-Inter">
                <div className="text-right text-zinc-800 text-base font-normal font-Inter">
                  Justin Bergson
                </div>
                <div class="text-right text-zinc-500 text-sm font-normal font-Inter">
                  Justin@gmail.com
                </div>
              </div>
            </div>
            <ArrowDown2 size="24" color="#0D062D" className="hidden xl:block" />
          </div>
        </div>
      </div>
      {/* phone */}
      <div className="px-5 py-[18px] w-full flex flex-col gap-4 md:hidden  items-center justify-between ">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="text-zinc-800 text-[18px] font-semibold font-PlusJakartaSansleading-7">
            Dashboard
          </div>

          <div className="flex gap-6 items-center">
            {" "}
            <BellIcon className={"scale-75 xl:scale-100"} />
            <img src={avatar} alt="" className="aspect-square w-6  " />
          </div>
        </div>
        <div className="w-full justify-start flex">
          {" "}
          <input
            className="w-[280px] h-9 rounded-[12px] justify-start  pl-3 text-[14px] bg-white  border border-zinc-300  items-center  flex"
            placeholder=" Search..."
          />
        </div>
      </div>
    </div>
  )
}

export default NavBar
