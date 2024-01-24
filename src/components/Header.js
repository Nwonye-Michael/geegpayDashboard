import React from "react"
import { useState } from "react"
import logo from "../assets/icons/logo.svg"
import bright from "../assets/icons/brightness.svg"
import dark from "../assets/icons/moon.svg"

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
import { BrightnessIcon, DarkIcon } from "../assets/icons"

const Header = () => {
  const [activeNav, setActiveNav] = useState("dashboard")
  const [lightMode, setLightMode] = useState(true)

  return (
    <header className="xl:w-[80px] xl:min-h-[100vh] border w-full h-[80px] p-5 flex flex-col justify-between bg-gray-50 ">
      <div className="flex flex-col gap-5 items-center">
        <img alt="" src={logo} className="h-10 w-10 object-contain" />
        <Category
          size="24"
          variant={activeNav === "dashboard" ? "Bulk" : ""}
          color={activeNav === "dashboard" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => setActiveNav("dashboard")}
        />
        <TrendUp
          size="24"
          variant={activeNav === "trendup" ? "Broken" : ""}
          color={activeNav === "trendup" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => setActiveNav("trendup")}
        />
        <Profile2User
          size="24"
          variant={"Broken"}
          color={activeNav === "profile" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => setActiveNav("profile")}
        />
        <Box
          size="24"
          variant={"Broken"}
          color={activeNav === "box" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => setActiveNav("box")}
        />
        <DiscountShape
          size="24"
          variant={"Broken"}
          color={activeNav === "discount" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => setActiveNav("discount")}
        />
        <InfoCircle
          size="24"
          variant={"Broken"}
          color={activeNav === "info" ? "#0D062D" : "#b2abab"}
          className="cursor-pointer"
          onClick={() => setActiveNav("info")}
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

export default Header
