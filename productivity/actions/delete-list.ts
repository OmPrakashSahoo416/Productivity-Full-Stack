"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



export async function DeleteList(listId:string, boardId:string) {

  const deleteList = await db.list.delete({
    where: {
      id: listId,
    },
  })

  revalidatePath(`/board/${boardId}`)
  
  
}