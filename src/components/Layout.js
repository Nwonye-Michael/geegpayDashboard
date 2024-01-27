import React from "react"
import SideBar from "./SideBar"
import BottomMenu from "./BottomMenu"

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col overflow-hidden relative">
      {/* <Header /> */}
      <SideBar />
      <div className="md:w-[calc(100vw-80px)]">{children}</div>
      <BottomMenu />
    </div>
  )
}

export default Layout
