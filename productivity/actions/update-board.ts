"use server"

import { db } from "@/lib/db"



export async function UpdateBoardTitle(boardId:string,newTitle : string) {
  console.log("Updating board")
  
  const data = await db.board.update({ where:{id:boardId}, data:{
    title:newTitle
  }})

    console.log("Updating board complete")
  return data;

}