import React from "react"
import { useState } from "react"
import logo from "../assets/icons/logo.svg"

import {
  // ArrowCircleRight2,
  Box,
  Category,
  DiscountShape,
  // InfoCircle,
  // Logout,
  Profile2User,
  // Setting2,
  TrendUp,
} from "iconsax-react"
// import { BrightnessIcon, DarkIcon } from "../assets/icons"
const BottomMenu = () => {
  const [activeNav, setActiveNav] = useState("dashboard")
  // const [lightMode, setLightMode] = useState(true)

  return (
    <div className="h-fit w-full border p-5 flex flex-row justify-between bg-gray-50  fixed bottom-0 left-0 md:hidden  items-center">
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
      <Category
        size="24"
        variant={activeNav === "dashboard" ? "Bulk" : ""}
        color={activeNav === "dashboard" ? "#0D062D" : "#b2abab"}
        className="cursor-pointer"
        onClick={() => setActiveNav("dashboard")}
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
    </div>
  )
}

export default BottomMenu
