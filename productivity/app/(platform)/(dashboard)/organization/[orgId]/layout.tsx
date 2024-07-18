import { ReactNode } from "react"
import OrgSwitchHandler from "./_components/orgSwitchHandler"
import { ClerkProvider } from "@clerk/nextjs"

function OrganizationIdLayout ({children} : {children : ReactNode}) {


  return (

    <>
    {/* <ClerkProvider> */}
    <OrgSwitchHandler />
    {/* </ClerkProvider> */}
    
    {children}

    </>
  )
}

export default OrganizationIdLayout