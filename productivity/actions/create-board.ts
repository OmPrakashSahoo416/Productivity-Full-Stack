"use server"

import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";
import { CreateActivity } from "./create-activity";
import { ActivityObject, ActivityType } from "@prisma/client";

import {currentUser } from '@clerk/nextjs/server'
import { SetLimit } from "./board-limit";

// import { useAuth } from "@clerk/nextjs";

export async function CreateBoard(formData:FormData) {

  const title : string = formData.get("title") as string
  const imageUrl : string = formData.get("imageUrl") as string
  const org_id : string = formData.get("org_id") as string

  const user = await currentUser()

  const data = await db.orgLimit.findUnique({where:{orgId:org_id}})

  if(data?.boardCount == 5) {
    console.error("Maximum board limit reached")
    return
  }
  
  

  
  


  const newBoard = await db.board.create({
    data:{
      title:title,
      imageUrl:imageUrl,
      org_id:org_id
      
    }
  })

  if (user) {

    const newActivty = await CreateActivity({orgId:org_id, activityType:ActivityType.CREATE,
      activityObject:ActivityObject.BOARD,activityObjectId:newBoard.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:newBoard.title
    })
  }

  //set limit 
  SetLimit({update:1})

  // revalidatePath(`organization/${newBoard.org_id}`) Not working here gonna implement somewhere else

  // to redirect to board after successful creation of board 
  redirect(`/board/${newBoard.id}`)

  


}