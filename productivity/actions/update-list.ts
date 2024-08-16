"use server"

// import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs/server";
import { ActivityObject, ActivityType, List } from "@prisma/client";
import { CreateActivity } from "./create-activity";



export async function UpdateListTitle(listId:string,newTitle : string) {
  
  
  const data = await db.list.update({ where:{id:listId}, data:{
    title:newTitle
  }})

  const board = await db.board.findUnique({
    where:{
      id:data.boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.UPDATE,
      activityObject:ActivityObject.LIST,activityObjectId:data!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:newTitle
    })
  }

  console.log("Updating list complete")
  
  return data;

}
export async function UpdateListOrder(listId:string, newOrder : number) {
  
  
  const data = await db.list.update({ where:{id:listId}, data:{
    order:newOrder
  }})

  const board = await db.board.findUnique({
    where:{
      id:data.boardId
    }
    
  })

  const user = await currentUser()

  if (user) {

    const newActivty = await CreateActivity({orgId:board?.org_id as string, activityType:ActivityType.UPDATE,
      activityObject:ActivityObject.LIST,activityObjectId:data!.id, userName:user!.fullName as string, userImage:user!.imageUrl as string, title:data.title
    })
  }


  console.log("Updating list complete")
  
  return data;

}
