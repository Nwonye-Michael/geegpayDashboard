import { DocumentDownload } from "iconsax-react"
import avartarOne from "../assets/images/avartarOne.png"
import avartarTwo from "../assets/images/avartarTwo.svg"
import avartarThree from "../assets/images/avartarThree.svg"
import avartarFour from "../assets/images/avartarFour.svg"

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
    <div className="w-full h-8 md:h-[60px] justify-between items-start flex gap-[auto] font-PlusJakartaSans border-t border-slate-100 xl:text-base md:text-sm text-[10px]  font-normal  leading-normal text-left pt-4">
      <div className="w-[216px] flex md:gap-2.5 gap-1.5 justify-left items-center text-gray-700 font-medium h-full ">
        <div className="md:w-8 w-6 md:h-8 h-6 relative rounded-[50%] overflow-hidden">
          <img className="h-full w-full " src={photo} alt="" />
        </div>{" "}
        {name}
      </div>

      <div className="w-[116px] justify-left h-full items-center text-neutral-500 md:flex hidden">
        {date}
      </div>
      <div className="w-[120px] flex justify-left h-full items-center text-slate-900  font-medium ">
        {formatCurrencyWithZeros(amount)}
      </div>

      <div
        className={`w-[95px] flex justify-left h-full items-center  ${
          status === "Paid" ? "text-emerald-400" : "text-red-500"
        }`}
      >
        {status}{" "}
      </div>
      <div className="w-20 justify-left h-full items-center gap-1.5 text-slate-900 text-sm md:flex hidden ">
        <DocumentDownload color="#292D32" size={16} />{" "}
        <span className="xl:block hidden">View</span>
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
    <div className="w-full  h-fit max-h-[250px] md:max-h-[386px] 2xl:max-h-[calc(289px)] 3xl:max-h-[422px] md:py-5  md:px-5 flex flex-col bg-white rounded-[14px] border border-slate-100 relative">
      <div className="max-h-fit">
        <div className="w-full h-[26px] justify-between items-center flex mb-[14px] ">
          <div className="text-zinc-800 text-base xl:text-lg font-semibold  leading-relaxed">
            Last Orders
          </div>
          <div className="text-center text-emerald-400 text-xs xl:text-lg font-medium  leading-relaxed cursor-pointer">
            See All
          </div>
        </div>
        <div className="w-full h-6  mb-5 justify-between items-start flex gap-[auto] font-PlusJakartaSans text-gray-400 xl:text-base md:text-sm text-[10px] font-medium  leading-normal text-left ">
          <div className="w-[216px] ">Name</div>
          <div className="w-[116px] md:block hidden ">Date</div>
          <div className="w-[120px] ">Amount</div>
          <div className="w-[95px] ">Status</div>
          <div className="w-20 md:block hidden">Invoice</div>
        </div>
      </div>

      <div className="flex jus gap-4 flex-col h-[calc(100%-84px)]  scrollBarWidthZero overflow-y-scroll">
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
