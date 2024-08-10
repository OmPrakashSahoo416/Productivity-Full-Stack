"use server"

import { db } from "@/lib/db"



export async function UpdateCardTitle(cardId:string,newTitle : string) {
  
  
  const data = await db.card.update({ where:{id:cardId}, data:{
    title:newTitle
  }})

  console.log("Updating card complete")
  return data;

}
export async function UpdateCardDesc(cardId:string,newDesc : string) {
  
  
  const data = await db.card.update({ where:{id:cardId}, data:{
    description:newDesc
  }})

  console.log("Updating card complete")
  return data;

}