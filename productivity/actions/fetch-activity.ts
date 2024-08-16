
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

  const titles:string[] = [];
  data.forEach(async (activity) => {

    //can be any id board, card, list
    const id = activity.ActivityObjectId

    const type = activity.ActivityObject.toString().toLowerCase()
    // console.log(type)

    let title = "";

    switch(type) {
      case "board":
        
        const b = await db.board.findUnique({where:{id:id}})
        title = b?.title as string
        console.log(title)

        break;
      case "card":
        const c = await db.card.findUnique({where:{id:id}})
        title = c?.title as string
        break;
      case "list":
        const l = await db.board.findUnique({where:{id:id}})
        title = l?.title as string
        break;
      case "default":
        title = "undefined"
        break;
    }

    titles.push(title)

  })

  console.log(titles)

  return {data:data, titles:titles};

  // revalidatePath(`/`)


}