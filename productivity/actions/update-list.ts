"use server"

// import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db"
import { List } from "@prisma/client";



export async function UpdateListTitle(listId:string,newTitle : string) {
  
  
  const data = await db.list.update({ where:{id:listId}, data:{
    title:newTitle
  }})

  console.log("Updating list complete")
  
  return data;

}
export async function UpdateListOrder(listId:string, newOrder : number) {
  
  
  const data = await db.list.update({ where:{id:listId}, data:{
    order:newOrder
  }})

  console.log("Updating list complete")
  
  return data;

}
