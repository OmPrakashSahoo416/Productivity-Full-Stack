import { ReactNode } from "react"


function OrganizationLayout ({children}: {children:ReactNode}) {


  return (
  <>
  <div className="organizationLayout max-w-md flex mx-auto lg:mx-20 md:mx-10  mt-20 lg:max-w-screen-lg">
    {children}
  </div>
  </>
  )
}

export default OrganizationLayout