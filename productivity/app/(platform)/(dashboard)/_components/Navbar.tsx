import Logo from "@/components/Logo"
import { UserButton, ClerkProvider, OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { auth } from "@clerk/nextjs/server";


export default function Navbar () {


  return (

    <>
    <div className=" sticky top-0 bg-slate-50 py-2 px-10 drop-shadow-sm border w-full justify-between  flex items-center">

      
      
      <div className="navLeft flex space-x-4 items-center">
      <Logo></Logo>
      <Button size={"sm"} variant={"primary"} className="text-[12px] rounded-sm font-normal px-2 py-1 hidden md:block">Create</Button>
      <Button variant={"primary"} size={"sm"} className="md:hidden"><Plus ></Plus></Button>

      </div>

      <div className="navRight flex space-x-4 items-center">

        {/* <ClerkProvider> */}

        <OrganizationSwitcher hidePersonal afterSelectOrganizationUrl={"/organization/:id"} ></OrganizationSwitcher>
        <UserButton afterSwitchSessionUrl="/" appearance={{elements :{
          avatarBox:{
            height:"20px",
            width:"20px"
          }
        }}}></UserButton>

        {/* </ClerkProvider> */}
        
        
      </div>
      
    </div>
    </>
  );
}