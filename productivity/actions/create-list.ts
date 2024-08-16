"use server"

import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";
import { CreateActivity } from "./create-activity";
import { ActivityObject, ActivityType } from "@prisma/client";

export async function CreateList(formData:FormData) {

  const title : string = formData.get("title") as string
  const boardId : string = formData.get("boardId") as string
  
  const user = await currentUser()
      
      // fetch the last list then assign the new order of the list 
  const lastList = await db.list.findFirst({
    where:{
      boardId:boardId
    }, 
    orderBy:{
      order:"desc"
    }
  })

  const newOrder = lastList ? lastList.order + 1 : 1

  const newList = await db.list.create({
    data:{
      title:title,
      boardId:boardId,
      order:newOrder
    }
    
  })

  const board = await db.board.findUnique({
    where:{
      id:boardId
    }
    
  })

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.CREATE,
      activityObject:ActivityObject.LIST,activityObjectId:newList.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:newList.title
    })
  }

  console.log(newList)

  revalidatePath(`/board/${boardId}`)

  


}