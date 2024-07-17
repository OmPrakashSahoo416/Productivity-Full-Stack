import Logo from "@/components/Logo"
import { UserButton, ClerkProvider, OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function Navbar () {


  return (

    <>
    <div className="fixed top-0 py-2 px-10 drop-shadow-sm border w-full justify-between  flex items-center">

      
      
      <div className="navLeft flex space-x-4 items-center">
      <Logo></Logo>
      <Button size={"sm"} variant={"primary"} className="font-sm px-2 py-1 hidden md:block">Create</Button>
      <PlusCircle className="md:hidden"></PlusCircle>

      </div>

      <div className="navRight flex space-x-4 items-center">

        <ClerkProvider>

        <OrganizationSwitcher></OrganizationSwitcher>
        <UserButton afterSwitchSessionUrl="/" appearance={{elements :{
          avatarBox:{
            height:"20px",
            width:"20px"
          }
        }}}></UserButton>

        </ClerkProvider>
        
        
      </div>
      
    </div>
    </>
  );
}