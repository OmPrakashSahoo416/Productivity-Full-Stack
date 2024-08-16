"use server"

import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { ActivityObject, ActivityType, List } from "@prisma/client"
import { CreateActivity } from "./create-activity"



export async function UpdateBoardTitle(boardId:string,newTitle : string) {
  console.log("Updating board")

  
  
  const data = await db.board.update({ where:{id:boardId}, data:{
    title:newTitle
  }})

  const board = await db.board.findUnique({
    where:{
      id:boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.UPDATE,
      activityObject:ActivityObject.BOARD,activityObjectId:data!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string
    })
  }

    console.log("Updating board complete")
  return data;

}

