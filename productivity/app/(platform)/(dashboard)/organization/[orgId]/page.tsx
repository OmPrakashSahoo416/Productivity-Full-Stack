"use client"
import { useOrganization } from "@clerk/nextjs";
import { CreditCard, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import BoardList from "./_components/boardList";
import BillingDialog from "./_components/billingDialog";







export default function BoardPage() {

  const {organization, isLoaded} = useOrganization()


  return (
    <>
    
    <div className="boardPage w-full mt-2">

      <div className="orgProfile flex space-x-3 items-center">

        <div className="orgProfileIcon relative h-[50px] w-[50px]">
          <Image fill  className="rounded-md object-cover" src={organization?.imageUrl!} alt="" />

        </div>
        <div className="orgContent space-y-1">

        <p className="text-rose-600 font-semibold text-sm">{organization?.name}</p>
        <div className="flex space-x-2 items-center">

        <CreditCard className="text-slate-500  h-4 w-4 object-cover" />
        <p className="text-xs font-medium">Free</p>
        <BillingDialog>
        <div className="rounded-md">
          <p className="text-xs font-medium text-slate-100 p-1 rounded-md bg-rose-500 hover:bg-roser-600">Upgrade</p>
        </div>
        </BillingDialog>
        </div>
        </div>
      </div>
      <hr className="border my-10 w-full border-slate-300" />

      <div className="boardsList">
        {/* boards header section  */}
        <div className="boardsHeader flex space-x-5">
        <LayoutDashboard className="text-rose-500" />
        <p className="text-slate-600 font-medium text-lg mb-5">Boards</p>
        </div>

        {/* board list component here  */}
        <BoardList></BoardList>

      </div>
      
    </div>
    </>
  )
}