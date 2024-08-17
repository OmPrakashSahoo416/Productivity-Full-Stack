"use client"
import { ReactNode, useState } from "react"
import SideBar from "../_components/SideBar"
import { PanelLeftOpen, PanelRightOpen } from "lucide-react"



function OrganizationLayout ({children}: {children:ReactNode}) {

  const [mobileSidebar, setMobileSidebar] = useState(false)


  return (
  <>
  <div role="button" onClick={() =>setMobileSidebar(!mobileSidebar)} className="absolute peer z-[200] w-10 h-10  bg-slate-200 text-rose-600 p-2  flex md:hidden items-center left-0 rounded-r-full">{mobileSidebar?
  <PanelRightOpen className="h-6 w-6" />:<PanelLeftOpen className="h-6 w-6" />}  </div>
  {mobileSidebar && (
    <div className={`sideBar absolute z-[100]   pt-10 rounded-r-md bg-slate-200 h-full w-60 `}>
      <SideBar></SideBar>
    </div>
  )}
  
  
  <div className="organizationLayout mt-20 max-w-md space-x-10 flex mx-auto lg:mx-20 md:mx-10  lg:max-w-screen-lg">
    

    
    <div className="sideBar lg:ml-20 ml-10  shrink-0 md:block hidden w-60">
          <SideBar></SideBar>
        </div>
        <div className="w-full ">

        {children}
        </div>
  </div>
  </>
  )
}

export default OrganizationLayout