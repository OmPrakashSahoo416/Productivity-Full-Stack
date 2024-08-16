"use server"

import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server"
import { CreateActivity } from "./create-activity"
import { ActivityObject, ActivityType } from "@prisma/client"



export async function UpdateCardTitle(cardId:string,newTitle : string) {
  
  
  const data = await db.card.update({ where:{id:cardId}, data:{
    title:newTitle
  }})

  const list = await db.list.findUnique({
    where:{
      id:data.listId
    }
  })

  const board = await db.board.findUnique({
    where:{
      id:list?.boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.UPDATE,
      activityObject:ActivityObject.CARD,activityObjectId:data!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:data.title
    })
  }

  console.log("Updating card complete")
  return data;

}
export async function UpdateCardDesc(cardId:string,newDesc : string) {
  
  
  const data = await db.card.update({ where:{id:cardId}, data:{
    description:newDesc
  }})

  const list = await db.list.findUnique({
    where:{
      id:data.listId
    }
  })

  const board = await db.board.findUnique({
    where:{
      id:list?.boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.UPDATE,
      activityObject:ActivityObject.CARD,activityObjectId:data!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:data.title
    })
  }

  console.log("Updating card complete")
  return data;

}
export async function UpdateCardOrder(cardId:string,newOrder : number) {
  
  
  const data = await db.card.update({ where:{id:cardId}, data:{
    order:newOrder
  }})

  const list = await db.list.findUnique({
    where:{
      id:data.listId
    }
  })

  const board = await db.board.findUnique({
    where:{
      id:list?.boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.UPDATE,
      activityObject:ActivityObject.CARD,activityObjectId:data!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:data.title
    })
  }

  console.log("Updating card complete")
  return data;

}
export async function UpdateCardListId(cardId:string,newListId : string) {
  
  
  const data = await db.card.update({ where:{id:cardId}, data:{
    listId:newListId,
    
  }})

  const list = await db.list.findUnique({
    where:{
      id:data.listId
    }
  })

  const board = await db.board.findUnique({
    where:{
      id:list?.boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.UPDATE,
      activityObject:ActivityObject.CARD,activityObjectId:data!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:data.title
    })
  }

  console.log("Updating card complete")
  return data;

}