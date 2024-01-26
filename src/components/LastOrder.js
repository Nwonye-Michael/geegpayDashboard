import { DocumentDownload } from "iconsax-react"
import avartarOne from "../assets/images/avartarOne.png"
import avartarTwo from "../assets/images/avartarTwo.svg"
import avartarThree from "../assets/images/avartarThree.svg"
import avartarFour from "../assets/images/avartarFour.svg"
import avartarFive from "../assets/images/avartar.svg"
// import "../App.css"

import React from "react"

export function formatCurrencyWithZeros(number) {
  if (isNaN(number)) {
    return number
  }
  const [integerPart, decimalPart] = number.toFixed(2).split(".")
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  const formattedNumber = `$${formattedInteger}.${decimalPart}`
  return formattedNumber
}

const Order = ({ name, photo, date, amount, status }) => {
  return (
    <div className="w-full h-[60] justify-between items-start flex gap-[auto] font-PlusJakartaSans border-t border-slate-100 text-base font-normal  leading-normal text-left pt-4">
      <div className="w-[216px] flex gap-2.5 justify-left items-center text-gray-700 font-medium">
        <div className="w-8 h-8 relative rounded-[50%] overflow-hidden">
          <img className="h-full w-full " src={photo} alt="" />
        </div>{" "}
        {name}
      </div>

      <div className="w-[116px] flex justify-left items-center text-neutral-500">
        {date}
      </div>
      <div className="w-[120px] flex justify-left items-center text-slate-900  font-medium ">
        {formatCurrencyWithZeros(amount)}
      </div>

      <div
        className={`w-[95px] flex justify-left items-center  ${
          status === "Paid" ? "text-emerald-400" : "text-red-500"
        }`}
      >
        {status}{" "}
      </div>
      <div className="w-20 flex justify-left items-center gap-1.5 text-slate-900 text-sm ">
        <DocumentDownload color="#292D32" size={16} /> View
      </div>
    </div>
  )
}

const LastOrder = () => {
  const data = [
    {
      name: "Marcus Bergson",
      photo: avartarFour,
      date: "Jan 30, 2024",
      amount: 100000,
      status: "Paid",
    },
    {
      name: "Onigbese Carsoson",
      photo: avartarOne,
      date: "Jan 29, 2024",
      amount: 1000,
      status: "Paid",
    },
    {
      name: "Marcu Bergon",
      photo: avartarThree,
      date: "Jan 30, 2024",
      amount: 100000,
      status: "Paid",
    },
    {
      name: "Onigbese Bado",
      photo: avartarTwo,
      date: "Jan 29, 2024",
      amount: 1000,
      status: "Refund",
    },
    {
      name: "Onigbese Bado",
      photo: avartarTwo,
      date: "Jan 29, 2024",
      amount: 1000,
      status: "Refund",
    },
    {
      name: "Onigbese Bado",
      photo: avartarTwo,
      date: "Jan 29, 2024",
      amount: 1000,
      status: "Refund",
    },
  ]
  return (
    <div className="w-full h-fit 2xl:max-h-[calc(289px)] 3xl:max-h-[422px] pt-5 px-5 flex flex-col bg-white rounded-[14px] border border-slate-100 relative">
      <div className="max-h-fit">
        <div className="w-full h-[26px] justify-between items-center flex mb-[14px] ">
          <div className="text-zinc-800 text-lg font-semibold  leading-relaxed">
            Last Orders
          </div>
          <div className="text-center text-emerald-400 text-lg font-medium  leading-relaxed">
            See All
          </div>
        </div>
        <div className="w-full h-6  mb-5 justify-between items-start flex gap-[auto] font-PlusJakartaSans text-gray-400 text-base font-medium  leading-normal text-left ">
          <div className="w-[216px] ">Name</div>
          <div className="w-[116px] ">Date</div>
          <div className="w-[120px] ">Amount</div>
          <div className="w-[95px] ">Status</div>
          <div className="w-20 ">Invoice</div>
        </div>
      </div>

      <div className="flex gap-4 flex-col h-[calc(100%-84px)]  scrollBarWidthZero overflow-y-scroll">
        {data.map((item) => (
          <Order
            name={item.name}
            photo={item.photo}
            date={item.date}
            amount={item.amount}
            status={item.status}
          />
        ))}
      </div>
    </div>
  )
}

export default LastOrder
