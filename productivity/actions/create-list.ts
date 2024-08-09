"use server"

import { db } from "@/lib/db"
// import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";

export async function CreateList(formData:FormData) {

  const title : string = formData.get("title") as string
  const boardId : string = formData.get("boardId") as string
  
      
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

  console.log(newList)

  revalidatePath(`/board/${boardId}`)

  


}