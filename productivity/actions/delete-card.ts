"use server"

import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { CreateActivity } from "./create-activity"
import { ActivityObject, ActivityType } from "@prisma/client"



export async function DeleteCard(cardId:string, boardId:string) {

  const deleteCard = await db.card.delete({
    where: {
      id: cardId,
    },
  })

  const list = await db.list.findUnique({
    where:{
      id:deleteCard.listId
    }
  })

  const board = await db.board.findUnique({
    where:{
      id:list?.boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.DELETE,
      activityObject:ActivityObject.CARD,activityObjectId:deleteCard!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:deleteCard.title
    })
  }

  console.log("Deleted card successfully!")
  // console.log(boardId)
  revalidatePath(`/board/${boardId}`)
  return deleteCard
  
  
}