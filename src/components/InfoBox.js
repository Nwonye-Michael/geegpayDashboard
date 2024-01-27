import {
  BoxTick,
  Coin,
  I3DRotate,
  ShoppingCart,
  TrendDown,
  TrendUp,
} from "iconsax-react"
import React, { useState, useEffect } from "react"
import buyChart from "../assets/icons/buyChart.svg"
import sellChart from "../assets/icons/sellChart.svg"
import upTrend from "../assets/icons/upTrend.svg"
import downTrend from "../assets/icons/downTrend.svg"

const InfoBox = ({ title, amount, prevAmount }) => {
  const [icon, setIcon] = useState()
  const [profit, setProfit] = useState()
  const [chart, setChart] = useState()
  const [percent, setPercentage] = useState()

  useEffect(() => {
    if (title === "Total Order") {
      setIcon(
        <BoxTick
          color="#34CAA5"
          size="24"
          variant="Bulk"
          className="scale-75 xl:scale-100"
        />
      )
    } else if (title === "Total Refund") {
      setIcon(
        <I3DRotate
          color="#34CAA5"
          size="24"
          variant="Bulk"
          className="scale-75 xl:scale-100"
        />
      )
    } else if (title === "Average Sales") {
      setIcon(
        <ShoppingCart
          color="#34CAA5"
          size="24"
          variant="Bulk"
          className="scale-75 xl:scale-100"
        />
      )
    } else if (title === "Total Income") {
      setIcon(
        <Coin
          color="#34CAA5"
          size="24"
          variant="Bulk"
          className="scale-75 xl:scale-100"
        />
      )
    }

    if (amount > prevAmount) {
      setChart(buyChart)
      setProfit(true)

      if (prevAmount > 0) {
        setPercentage((((amount - prevAmount) / prevAmount) * 100).toFixed(1))
      } else {
        setPercentage(((amount - prevAmount) * 100).toFixed(1))
      }
    } else {
      setChart(sellChart)
      setProfit(false)

      if (prevAmount > 0) {
        setPercentage((((prevAmount - amount) / prevAmount) * 100).toFixed(1))
      } else {
        setPercentage(((prevAmount - amount) * 100).toFixed(1))
      }
    }
  }, [amount, prevAmount, title])

  return (
    <div className="w-full h-full border border-slate-100 bg-white xl:flex flex-col xl:gap-[10px] grid grid-cols-1 p-4 rounded-[14px]">
      <div className="flex justify-between items-center">
        <div className="border rounded-[50%] border-[#E6E6E6] p-1 xl:p-2  ">
          {icon}
        </div>{" "}
        <img
          src={chart}
          alt=""
          className=" w-[50px] md:w-[80px] xl:w-[106px] aspect-[106/32]"
        />
      </div>
      <div className="flex flex-col gap-[5px] font-PlusJakartaSans">
        <div className="text-zinc-500 xl:text-lg text-xs font-medium leading-none  w-fit">
          {title}
        </div>
        <div class="text-gray-700 text-lg xl:text-2xl font-semibold leading-none w-fit">
          {title === "Total Income" ? "$" + amount : amount}
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className={`w-[70px] flex h-4 xl:h-6 px-2 py-1  bg-opacity-10 rounded-full justify-center items-center gap-1 text-xs font-medium font-PlusJakartaSans leading-none}   ${
            profit
              ? "bg-emerald-400 text-emerald-400"
              : "bg-red-500 text-red-500 "
          }`}
        >
          <img src={profit ? upTrend : downTrend} alt="" className="" />

          {percent + "%"}
        </div>
        <div className="text-zinc-600 text-sm font-normal font-Inter hidden xl:flex">
          vs. previous month
        </div>
      </div>
    </div>
  )
}

export default InfoBox
