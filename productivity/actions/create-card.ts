"use server"

import { db } from "@/lib/db"
// import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";

export async function CreateCard(formData:FormData) {

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

  const newOrder = lastCard ? lastCard.order + 1 : 1

  

  const newCard = await db.card.create({
    data:{
      title:title,
      description:desc,
      order:newOrder,
      listId:listId

    }
    
  })

  console.log(newCard)

  revalidatePath(`/board/${boardId}`)

  


}