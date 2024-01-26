import React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full flex ">
      <Header />
      <div className="w-[calc(100vw-80px)]">{children}</div>
    </div>
  )
}

export default Layout
