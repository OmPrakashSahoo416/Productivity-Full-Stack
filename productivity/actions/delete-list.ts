"use server"

import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { CreateActivity } from "./create-activity"
import { ActivityObject, ActivityType } from "@prisma/client"



export async function DeleteList(listId:string, boardId:string) {

  const deleteList = await db.list.delete({
    where: {
      id: listId,
    },
  })

  const board = await db.board.findUnique({
    where:{
      id:deleteList.boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.DELETE,
      activityObject:ActivityObject.LIST,activityObjectId:deleteList!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:deleteList.title
    })
  }

  revalidatePath(`/board/${boardId}`)
  
  
}