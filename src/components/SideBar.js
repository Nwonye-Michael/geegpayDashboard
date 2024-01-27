import React from "react"
import { useState } from "react"
import logo from "../assets/icons/logo.svg"

import {
  ArrowCircleRight2,
  Box,
  Category,
  DiscountShape,
  InfoCircle,
  Logout,
  Profile2User,
  Setting2,
  TrendUp,
} from "iconsax-react"
import { BrightnessIcon, DarkIcon, SideBarIndicator } from "../assets/icons"

const SideBar = ({ lightMode, setLightMode }) => {
  const [activeNav, setActiveNav] = useState("dashboard")
  // const [lightMode, setLightMode] = useState(true)
  const [indicatorPostion, setIndicatorPosition] = useState(80)

  // const { light, setLightMode } = { lightMode, setLightMode }

  return (
    <header
      className={`w-[80px] min-h-[100vh] border p-5 md:flex flex-col justify-between   sticky hidden   ${
        lightMode ? "bg-gray-50  " : "#0f0f0f"
      } `}
    >
      <div className="flex flex-col gap-5 items-center">
        <div
          className="absolute w-fit h-fit right-0 transition duration-[.5s]  "
          style={{ top: `${indicatorPostion}px` }}
        >
          <SideBarIndicator />
        </div>

        <img alt="" src={logo} className="h-10 w-10 object-contain" />

        <Category
          size="24"
          // variant={activeNav === "dashboard" ? "Bulk" : "Linear"}
          variant="Bulk"
          color={activeNav === "dashboard" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={(e) => {
            setActiveNav("dashboard")
            setIndicatorPosition(80)
            // console.log(e)
          }}
        />
        <TrendUp
          size="24"
          // variant={activeNav === "trendup" ? "Broken" : "Linear"}

          variant={"Broken"}
          color={activeNav === "trendup" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={(e) => {
            setActiveNav("trendup")
            setIndicatorPosition(80 + 44)
          }}
        />
        <Profile2User
          size="24"
          variant={"Broken"}
          color={activeNav === "profile" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => {
            setActiveNav("profile")
            setIndicatorPosition(80 + 44 + 44)
          }}
        />
        <Box
          size="24"
          variant={"Broken"}
          color={activeNav === "box" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => {
            setActiveNav("box")
            setIndicatorPosition(80 + 44 + 44 + 44)
          }}
        />
        <DiscountShape
          size="24"
          variant={"Broken"}
          color={activeNav === "discount" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => {
            setActiveNav("discount")
            setIndicatorPosition(80 + 44 + 44 + 44 + 44)
          }}
        />
        <InfoCircle
          size="24"
          variant={"Broken"}
          color={activeNav === "info" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => {
            setActiveNav("info")

            setIndicatorPosition(80 + 44 + 44 + 44 + 44 + 44)
          }}
        />

        <div className="flex flex-col gap-4 p-2 bg-[#FFFFFF] rounded-[100px]">
          <div
            className={`rounded-[50%] w-[30px] h-[30px] flex justify-center items-center  overflow-hidden cursor-pointer transition  ${
              lightMode ? "bg-[#34CAA5]" : "bg-gray-50"
            }`}
            onClick={() => {
              setLightMode(true)
            }}
          >
            {/* <img alt="" src={bright} className="h-4 w-4 object-contain  " /> */}

            <BrightnessIcon
              fill={lightMode ? `#fff` : "#B2ABAB"}
              className={`transition ${lightMode ? `scale-100` : "scale-125"}`}
            />
          </div>
          <div
            className={`rounded-[50%] w-[30px] h-[30px] flex justify-center items-center  overflow-hidden cursor-pointer transition ${
              !lightMode ? "bg-[#34CAA5]" : "bg-gray-50"
            }`}
            onClick={() => {
              setLightMode(false)
            }}
          >
            <DarkIcon
              fill={!lightMode ? `#fff` : "#B2ABAB"}
              className={`transition ${!lightMode ? `scale-75` : "scale-100"}`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center ">
        <ArrowCircleRight2
          size="24"
          color="#b2abab"
          variant="Broken"
          className="cursor-pointer iconHover"
        />

        <Setting2
          size="24"
          color="#b2abab"
          variant="Broken"
          className="cursor-pointer iconHover"
        />
        <Logout
          size="24"
          color="#b2abab"
          variant="Broken"
          className="cursor-pointer iconHover"
        />
      </div>
    </header>
  )
}

export default SideBar
