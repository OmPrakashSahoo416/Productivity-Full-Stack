"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



export async function DeleteCard(cardId:string, boardId:string) {

  const deleteCard = await db.card.delete({
    where: {
      id: cardId,
    },
  })
  console.log("Deleted card successfully!")
  // console.log(boardId)
  revalidatePath(`/board/${boardId}`)
  return deleteCard
  
  
}