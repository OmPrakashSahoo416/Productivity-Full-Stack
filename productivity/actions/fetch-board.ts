"use server"

import { db } from "@/lib/db"
// import { redirect } from "next/navigation"

export async function FetchDb() {

  const data = await db.board.findMany()
  return data 

}