"use server"

import { db } from "@/lib/db"
import { redirect } from "next/navigation"



export async function DeleteBoard(boardId:string) {

  const deleteUser = await db.board.delete({
    where: {
      id: boardId,
    },
  })



  redirect("/")
  
  
}