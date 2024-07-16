// import { ClerkProvider, OrganizationSwitcher } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"



export default function OrganizationPage () {
  
  const organizationId = auth().orgId;


  return (

    <>
      {/* <div>Organization Id : {organizationId}</div> */}
</>

  )
}