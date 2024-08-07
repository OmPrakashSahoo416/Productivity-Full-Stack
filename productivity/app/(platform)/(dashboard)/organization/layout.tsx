import { ReactNode } from "react"
import SideBar from "../_components/SideBar"



function OrganizationLayout ({children}: {children:ReactNode}) {


  return (
  <>
  
  <div className="organizationLayout mt-20 max-w-md space-x-10 flex mx-auto lg:mx-20 md:mx-10  lg:max-w-screen-lg">
    

    <div className="sideBar lg:ml-20 ml-10  shrink-0 md:block hidden w-60">
          <SideBar></SideBar>
        </div>
        <div className="w-full">

        {children}
        </div>
  </div>
  </>
  )
}

export default OrganizationLayout