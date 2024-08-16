"use server"

import { db } from "@/lib/db"
// import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";
import { CreateActivity } from "./create-activity";
import { ActivityObject, ActivityType } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server";

export async function CreateCard(formData:FormData) {

  const user = await currentUser()


  const title : string = formData.get("title") as string
  const desc : string = formData.get("desc") as string
  const listId : string = formData.get("listId") as string
  const boardId : string = formData.get("boardId") as string
  
      
      // fetch the last list then assign the new order of the list 
  const lastCard = await db.card.findFirst({
    where:{
      listId:listId
    }, 
    orderBy:{
      order:"desc"
    }
  })

  const board = await db.board.findUnique({
    where:{
      id:boardId
    }
    
  })

  const newOrder = lastCard ? lastCard.order + 1 : 1

  

  const newCard = await db.card.create({
    data:{
      title:title,
      description:desc,
      order:newOrder,
      listId:listId

    }
    
  })

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.CREATE,
      activityObject:ActivityObject.CARD,activityObjectId:newCard.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:newCard.title
    })
  }

  console.log(newCard)

  revalidatePath(`/board/${boardId}`)

  


}
export async function CreateCardCopy({newtitle, newdesc, newlistId, newboardId}:{newtitle:string, newdesc:string,
  newlistId:string, newboardId:string
}) {

  const user = await currentUser()


  const title : string = newtitle + " - Copy"
  const desc : string = newdesc
  const listId : string = newlistId 
  const boardId : string = newboardId
  
      
      // fetch the last list then assign the new order of the list 
  const lastCard = await db.card.findFirst({
    where:{
      listId:listId
    }, 
    orderBy:{
      order:"desc"
    }
  })

  const newOrder = lastCard ? lastCard.order + 1 : 1

  

  const newCard = await db.card.create({
    data:{
      title:title,
      description:desc,
      order:newOrder,
      listId:listId

    }
    
  })

  const board = await db.board.findUnique({
    where:{
      id:boardId
    }
    
  })

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.CREATE,
      activityObject:ActivityObject.CARD,activityObjectId:newCard.id, userName:user!.fullName as string, userImage:user!.imageUrl as string,title:newCard.title
    })
  }

  console.log(newCard)

  revalidatePath(`/board/${boardId}`)

  


}