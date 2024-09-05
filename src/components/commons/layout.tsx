import React from 'react'
import { Navbar } from './navbar'
import { SideBar } from './sidebar'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-full bg-white flex-1 w-full">
      <div className="z-10">
        <Navbar />
        <SideBar />
      </div>

      <div className="ml-48 mt-20 my-4 flex flex-1 w-fit">
        <main className="flex flex-1">{children}</main>
      </div>
    </div>
  )
}
