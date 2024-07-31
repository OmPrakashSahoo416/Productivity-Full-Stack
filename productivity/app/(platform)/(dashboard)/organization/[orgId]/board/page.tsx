"use client"
import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import Image from "next/image";





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
        <div className="flex space-x-2">

        <CreditCard className="text-slate-500  h-4 w-4 object-cover" />
        <p className="text-xs font-medium">Free</p>
        </div>
        </div>
      </div>
      <hr className="border mt-5 w-full border-slate-300" />
      
    </div>
    </>
  )
}