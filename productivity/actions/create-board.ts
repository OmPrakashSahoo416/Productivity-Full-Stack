"use server"

import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";

export async function CreateBoard(formData:FormData) {

  const title : string = formData.get("title") as string
  const imageUrl : string = formData.get("imageUrl") as string
  const org_id : string = formData.get("org_id") as string
  


  const newBoard = await db.board.create({
    data:{
      title:title,
      imageUrl:imageUrl,
      org_id:org_id
      
    }
  })

  // revalidatePath(`organization/${newBoard.org_id}`) Not working here gonna implement somewhere else

  // to redirect to board after successful creation of board 
  redirect(`board/${newBoard.id}`)

  


}