
"use server"

import { db } from "@/lib/db"
import { ActivityObject, ActivityType } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function FetchActivity({orgId
}:{
  orgId:string,
 
}) {

    
    // console.log(orgId)
    const data = await db.activityLog.findMany({
      where:{
        orgId:orgId
      },
      orderBy:{
        createdAt:"desc"
      }
    })

  console.log("Fetched activity successfully")
  // console.log(data)



  return data;

  // revalidatePath(`/`)


}