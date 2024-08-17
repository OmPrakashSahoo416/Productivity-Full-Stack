

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ReactNode, useEffect, useState } from "react";
import { CreateBoard } from "@/actions/create-board";
import { toast } from "@/components/ui/use-toast";
import { GetImages } from "@/lib/unsplash";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { SetLimit } from "@/actions/board-limit";
import { Gem } from "lucide-react";

export default function BillingDialog({
  children
}: {
  children: ReactNode
}) {
  
  // to fetch the organization id we are using use Params from next js 
  const {orgId} : {orgId : string} = useParams();
  

  

  return (
    <>
      <Dialog >
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="bg-rose-500 ">
          <DialogHeader className="flex flex-col items-center space-y-2">
            <DialogTitle className=" mt-10  text-slate-100 w-full font-medium text-center ">
              <div className="w-full flex flex-col items-center space-y-3 text-2xl h-[250px]">
              <div className="w-full flex justify-center items-center space-x-1 text-lg font-semibold">
              <Gem /> <p>Premium</p>
              </div>
              
              <div className="w-full text-6xl  text-slate-100">
                $ 416 <span className="text-xs">/ per month</span>
              </div>
              <ol className="list-disc flex justify-start flex-col list">

                
                <div className="w-full  list-item text-sm text-slate-100/90">
                  Unlimited members in the organization
                </div>
                <div className="w-full list-item text-sm mb-10 text-slate-100/90">
                  Upto 100 boards per organization
                </div>
              </ol>
              {/* TODO:add functionality to this for ensuring membership */}
              <button className="text-sm font-semibold  bg-slate-100 p-3 text-rose-600 rounded-md">Get premium for free</button>

              </div>
              
            </DialogTitle>
           
          </DialogHeader>
          
            
          <DialogDescription className="text-xs text-slate-800 font-light">
           
          </DialogDescription>
        </DialogContent>
      </Dialog>
      
    </>
  );
}