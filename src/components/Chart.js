import { ArrowDown2 } from "iconsax-react"
import React from "react"

import priceTag from "../assets/icons/priceTag.svg"
import { PriceTag } from "../assets/icons"
const Data = [
  7500, 18000, 4500, 28000, 9000, 45000, 9800, 19000, 32000, 1000, 12000, 0,
]
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const Chart = () => {
  return (
    <div className="h-full pt-4 xl:px-5 px-3 [14px] border border-slate-100 rounded-[14px] font-PlusJakartaSans bg-white">
      <div className="w-full h-[37px] justify-between items-center inline-flex font-PlusJakartaSans  mb-4">
        <div className="text-zinc-800 text-base xl:text-lg font-semibold  leading-relaxed">
          Sales Trends
        </div>
        <div className="xl:w-[170px] w-fit justify-start items-center gap-2.5 flex">
          <div className="text-gray-700 xl:text-sm  text-[9px] font-medium flex whitespace-nowrap text">
            Short by :
          </div>
          <div className="px-3 py-1.5 bg-white rounded-[20px] border border-neutral-200 flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="justify-center items-center xl:gap-2.5 gap-1.5 inline-flex">
              <div className="text-gray-700 text-xs font-normal  leading-none">
                Weekly
              </div>
              <ArrowDown2
                size="24"
                color="black"
                className="scale-75 xl:scale-100"
              />
              {/* <div className="w-5 h-5 relative bg-black bg-opacity-0"></div> */}
            </div>
          </div>
        </div>
      </div>

      <section className="  w-full h-[calc(100%-53px)]">
        <div className="w-full h-[calc(100%-12px-16px-18px)] flex">
          <div className="xl:w-[90px] w-[70px] h-full flex justify-center">
            {" "}
            <div className="w-fit h-full grid grid-cols-1 gap-[auto] ">
              {[
                "50,000",
                "40,000",
                "30,000",
                "20,000",
                "10,000",
                "5,000",
                "0",
              ].map((price) => (
                <div className="text-neutral-600 xl:text-xs text-[9px] font-semibold font-// PlusJakartaSans leading-none flex  items-center text-left">
                  {price}
                </div>
              ))}
            </div>
          </div>
          <div className="xl:w-[calc(100%-90px)] w-[calc(100%-70px)] h-full grid grid-cols-12 gap-[30px]   ">
            {Data.map((item) => {
              let size
              if (item > 5000) {
                const reminder = item - 5000
                size = reminder / 10000 + 1
                const height = (size * 100) / 6

                const heightString = height + "%"
                console.log("height string =", heightString)

                console.log(size)
                return (
                  <div className="flex h-full  relative ">
                    <div
                      className={` w-full bg-gradient-to-b from-emerald-400 to-emerald-100 opacity-10 rounded-tl-[20px] rounded-tr-[20px] absolute  bottom-0 hover:opacity-100 group`}
                      style={{ height: heightString }}
                    >
                      <div className="relative opacity-0 group-hover:opacity-100">
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-fit ">
                          <PriceTag className="" item={item} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                const reminder = item
                size = reminder / 5000
                size = reminder / 10000 + 1
                const height = (size * 100) / 6
                const heightString = height + "%"
                console.log(size)
                return (
                  <div className="flex h-full  relative ">
                    <div
                      className={` w-full bg-gradient-to-b from-emerald-400 to-emerald-100 opacity-10 rounded-tl-[20px] rounded-tr-[20px] absolute  bottom-0 hover:opacity-100 group`}
                      style={{ height: heightString }}
                    >
                      <div className="relative opacity-0 group-hover:opacity-100">
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-fit ">
                          <PriceTag className="" item={item} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
        <div className="h-[22px]xl:w-[calc(100%-90px)] w-[calc(100%-70px)] grid grid-cols-12 opacity-60 justify-start items-start  xl:ml-[90px] ml-[70px] mt-3 gap-[30px] ">
          {monthsShort.map((month) => (
            <div className=" text-center text-neutral-600 xl:text-sm text-[8px] font-semibold font-PlusJakartaSans leading-snug xl:w-[30px] w-5 ">
              {month}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Chart
