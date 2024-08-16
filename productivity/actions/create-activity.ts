
"use server"

import { db } from "@/lib/db"
import { ActivityObject, ActivityType } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function CreateActivity({orgId ,activityType,
  activityObject,activityObjectId, userName, userImage, title
}:{
  orgId:string,
  activityType:ActivityType,
  activityObject:ActivityObject,
  activityObjectId:string,
  userName:string,
  userImage:string,
  title:string
}) {

  



    console.log("Created activity successfully")

    const data = await db.activityLog.create({
      data:{
        orgId:orgId,
        ActivityType:activityType,
        ActivityObject:activityObject,
        ActivityObjectId:activityObjectId,
        userName:userName,
        userImage:userImage,
        title:title
        
        
        
      }
    })

  


  
  revalidatePath(`/`)

  


}