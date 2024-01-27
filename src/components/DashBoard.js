import React from "react"
import NavBar from "./NavBar"

import Chart from "./Chart"
import InfoBox from "./InfoBox"
import LastOrder from "./LastOrder"
import TopPlatform from "./TopPlatform"
const DashBoard = () => {
  // PlusJakartaSans
  return (
    <div className="">
      <NavBar />
      <div className="hidden xl:flex flex-col bg-neutral-50">
        <main
          className="
      h-[374px] w-full px-5 pt-5 flex gap-5
      "
        >
          <section className="w-[calc((100vw-180px)*(101/160))] object-contain aspect-[806/374]  ">
            <Chart />
          </section>

          <section className="grid grid-cols-2 gap-4 w-[calc((100vw-180px)*(59/160))] h-full bg-white">
            <InfoBox title="Total Refund" amount={1} prevAmount={0} />
            <InfoBox title="Total Refund" amount={1} prevAmount={0} />
            <InfoBox title="Total Refund" amount={1} prevAmount={4} />
            <InfoBox title="Total Income" amount={1} prevAmount={0} />
          </section>
        </main>
        <main className="w-full px-5 pt-5 flex gap-5">
          <section className="w-[calc((100vw-180px)*(101/160))] h-fit ">
            <LastOrder />
          </section>

          <section className="flex gap-4 w-[calc((100vw-180px)*(59/160))] h-full ">
            <TopPlatform />
          </section>
        </main>
      </div>

      {/* tab and phone */}
      <div className="xl:hidden flex flex-col bg-neutral-50 w-[90%] md:w-[98%]   mx-auto ">
        <section className="w-full flex md:flex-row flex-col gap-2 md:gap-3 xl:gap-5 pt-5">
          {" "}
          <div className="md:w-[55%]  w-full  grid grid-cols-2 xl:gap-4 gap-2  md:h-400px xl:h-fit">
            <InfoBox title="Total Refund" amount={1} prevAmount={0} />
            <InfoBox title="Total Refund" amount={1} prevAmount={0} />
            <InfoBox title="Total Refund" amount={1} prevAmount={4} />
            <InfoBox title="Total Income" amount={1} prevAmount={0} />
          </div>
          <div className="flex gap-4 md:w-[45%] w-full h-full ">
            <TopPlatform />
          </div>
        </section>
        <section className="w-full pt-5  aspect-[806/374]  ">
          <Chart />
        </section>

        <section className="w-full h-fit ">
          <LastOrder />
        </section>
      </div>
    </div>
  )
}

export default DashBoard
