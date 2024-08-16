"use server"
import { db } from "@/lib/db";



export async function fetchTitleGeneric({type, id} : {type:string, id:string}) {

  if(type == "board") {
    const b = await db.board.findUnique({where:{id:id}})
    return b?.title as string
    
  }
  if(type == "list") {
    const l = await db.list.findUnique({where:{id:id}})
    return l?.title as string

  }
  if(type == "card") {
    const c = await db.card.findUnique({where:{id:id}})
    return c?.title as string

  }
}