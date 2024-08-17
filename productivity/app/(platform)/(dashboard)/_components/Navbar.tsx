"use client"
import Logo from "@/components/Logo"
import { UserButton, ClerkProvider, OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { auth } from "@clerk/nextjs/server";

import NewBoardDialog from "../organization/[orgId]/_components/newBoardDialog";
// import { toast } from "@/components/ui/use-toast";


export default function Navbar () {


  return (

    <>
    <div className=" sticky z-[100] top-0 bg-slate-50 py-2 px-10 drop-shadow-sm border min-w-full w-fit justify-between  flex items-center">

      
      
      <div className="navLeft flex space-x-4 items-center">
      <Logo></Logo>
     
      <NewBoardDialog>
      <div role="button" 
       className="text-[12px]  bg-rose-600  hover:bg-rose-800 text-slate-100 rounded-sm font-medium px-3 py-2 hidden md:block">+ Create</div>
      <div role="button"  className="md:hidden bg-rose-600 hover:bg-rose-800 text-slate-100  rounded-full w-6 h-6 flex justify-center items-center font-bold"><Plus className="h-4 font-bold w-4"></Plus></div>
      
      </NewBoardDialog>

      </div>

      <div className="navRight flex space-x-4 items-center">

       

        <OrganizationSwitcher hidePersonal afterSelectOrganizationUrl={"/organization/:id"} ></OrganizationSwitcher>
        <UserButton afterSwitchSessionUrl="/" appearance={{elements :{
          avatarBox:{
            height:"20px",
            width:"20px"
          }
        }}}></UserButton>

        
        
      </div>
      
    </div>
    </>
  );
}