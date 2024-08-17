"use server"

import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { CreateActivity } from "./create-activity"
import { ActivityObject, ActivityType } from "@prisma/client"
import { SetLimit } from "./board-limit"



export async function DeleteBoard(boardId:string) {

  const deleteUser = await db.board.delete({
    where: {
      id: boardId,
    },
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:deleteUser?.org_id as string, activityType:ActivityType.DELETE,
      activityObject:ActivityObject.BOARD,activityObjectId:deleteUser!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:deleteUser.title
    })
  }

  //set limit 
  SetLimit({update:-1})



  redirect("/")
  
  
}