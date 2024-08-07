"use server"

import { db } from "@/lib/db"
import { equal } from "assert"
// import { redirect } from "next/navigation"

export async function FetchDb(orgId:string) {

  // where statement to add logic to show only board of particular organizaion id only
  const data = await db.board.findMany({where:{
    org_id:{
      equals:orgId
    }
  }})
  return data 

}

export async function FetchBoardUnique(boardId:string) {
  const data = await db.board.findUnique({where:{
    id: boardId
  }})
  return data
}