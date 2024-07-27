import { OrganizationProfile } from "@clerk/nextjs"




function SettingsPage() {

  return (
    <>
    <div>
      <p className="text-sm font-bold text-slate-700 mb-5">Settings</p>
      
      <OrganizationProfile routing="hash" appearance={
        {
          elements:{
            rootBox:{
              boxShadow:"none"
            },
            card:{
              boxShadow:"none"
            }
          }
        }
      }></OrganizationProfile>
    </div>
    </>
  )
}
export default SettingsPage