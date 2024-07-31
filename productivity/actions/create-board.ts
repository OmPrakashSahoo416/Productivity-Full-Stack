"use server"

import { db } from "@/lib/db"

export async function CreateBoard(formData:FormData) {

  const title : string = formData.get("title") as string
  const theme : string = formData.get("theme") as string


  await db.board.create({
    data:{
      title:title,
      theme:theme
    }
  })


}