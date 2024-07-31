// import { ClerkProvider, OrganizationSwitcher } from "@clerk/nextjs"
// import { auth } from "@clerk/nextjs/server"

import { CreateBoard } from "@/actions/create-board";
import { Input } from "@/components/ui/input";



export default function OrganizationPage () {
  
  


  return (

    <>
      <div className="mt-2">
        <p className="mb-5 text-rose-600 text-sm font-semibold">Welcome to Workspaces</p>
        
      <form action={CreateBoard} className="flex flex-col space-y-3">
        <Input type="text" required={true} name="title" id="" placeholder="Enter Board Title"  />
        
        <Input type="text" name="theme" id="" placeholder="Enter Board Theme"  />

        <button type="submit" value="Submit" className="bg-rose-600 hover:bg-rose-800 cursor-pointer p-2 text-slate-100 rounded-md">Submit</button>
        
      </form>
      </div>
    </>

  )
}