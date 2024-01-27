import React from "react"
import { formatCurrencyWithZeros } from "./LastOrder"

const Platform = ({ title, color, amount, prevAmount }) => {
  console.log(color)
  const percentage = ((amount - prevAmount) / prevAmount) * 100
  return (
    <div className="flex flex-col gap-y-3 xl:gap-y-6 w-full h-fit font-PlusJakartaSans text-left">
      <div className="text-zinc-800 text-sm xl:text-lg font-semibold ">
        {title}
      </div>
      <div className="w-full bg-neutral-100 rounded-[40px] h-2 xl:h-3">
        <div
          className={`
          h-full  border rounded-[40px]`}
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <div className="text-neutral-600 xl:text-lg text-xs flex justify-between">
        <span className="">{formatCurrencyWithZeros(amount)}</span>{" "}
        <span className="">{percentage.toFixed(1)}%</span>
      </div>
    </div>
  )
}

const TopPlatform = () => {
  const data = [
    {
      title: "Book Bazaar",
      // color: "#54C5EB"
      amount: 2500000,
      prevAmount: 2000000,
    },
    {
      title: "Artisan Aisle",

      amount: 2000000,
      prevAmount: 1500000,
    },
    {
      title: "Toy Troop",

      amount: 1500000,
      prevAmount: 1200000,
    },
    {
      title: "XStore",

      amount: 1400000,
      prevAmount: 1100000,
    },
    {
      title: "XStore",

      amount: 1400000,
      prevAmount: 1100000,
    },
    {
      title: "XStore",

      amount: 1400000,
      prevAmount: 1100000,
    },
    {
      title: "XStore",

      amount: 1400000,
      prevAmount: 1100000,
    },
  ]
  const colors = [
    "#54C5EB",
    "#6160DC",
    "#FFB74A",
    "#FF4A55",
    "#4CAF50",
    "#FFC107",
    "#795548",
    "#9C27B0",
    "#FF5722",
    "#00BCD4",
  ]

  return (
    <div className="w-full h-fit max-h-[250px] md:max-h-[386px] 2xl:max-h-[289px] 3xl:max-h-[422px] pt-5 px-3 xl:px-5 flex flex-col bg-white rounded-[14px] border border-slate-100 ">
      <div className="w-full h-[26px] justify-between items-center flex mb-[14px] ">
        <div className="text-zinc-800 text-base xl:text-lg font-semibold  leading-relaxed">
          Top Platforms
        </div>
        <div className="text-center text-emerald-400 text-xs xl:text-lg font-medium  leading-relaxed cursor-pointer">
          See All
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 xl:gap-y-5  h-[calc(100%-26px)] scrollBarWidthZero overflow-y-scroll ">
        {data.map((item, index) => (
          <Platform
            title={item.title}
            // color={item.color}
            color={colors[index]}
            amount={item.amount}
            prevAmount={item.prevAmount}
          />
        ))}
      </div>
    </div>
  )
}

export default TopPlatform
