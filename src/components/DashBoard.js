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
      <main
        className="
      h-[374px] w-full px-5 pt-5 flex gap-5
      "
      >
        <section className="w-[calc((100vw-180px)*(101/160))] object-contain aspect-[806/374]  ">
          <Chart />
        </section>

        <section className="grid grid-cols-2 gap-4 w-[calc((100vw-180px)*(59/160))] h-full ">
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
  )
}

export default DashBoard
