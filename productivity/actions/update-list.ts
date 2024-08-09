"use server"

import { db } from "@/lib/db"



export async function UpdateListTitle(listId:string,newTitle : string) {
  
  
  const data = await db.list.update({ where:{id:listId}, data:{
    title:newTitle
  }})

  console.log("Updating list complete")
  return data;

}