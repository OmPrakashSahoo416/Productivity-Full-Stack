"use server"

import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function SetPremium({b, orgId}:{b:boolean, orgId:string}) {
  

  if (!orgId) {
    console.error("Unauthorized!")
    return
  }
  

  const orgLimitData = await db.orgLimit.findUnique({
    where:{
      orgId:orgId as string
    }
  })
  
  
  


  // could not find organization then create row of orgId
  if (!orgLimitData && b == true) {
    const data = await db.orgLimit.create({
      data:{
        orgId:orgId as string,
        boardCount:0,
        maxCount:100
        
      }
    })
    // redirect("/")
    // revalidatePath(`/organization/${orgId}`)
    return data

  }
  if (!orgLimitData && b == false) {
    const data = await db.orgLimit.create({
      data:{
        orgId:orgId as string,
        boardCount:0,
        maxCount:5
        
      }
    })
    // redirect("/")
    // revalidatePath(`/organization/${orgId}`)
    return data

  }
  if (orgLimitData && b == false) {

    const data = await db.orgLimit.findUnique({
      where:{
        orgId:orgId as string,
        
      }
    })
    // redirect("/")
    // revalidatePath(`/organization/${orgId}`)
    return data
    

  }
  if (orgLimitData && b == true) {

    const data = await db.orgLimit.update({
      where:{
        orgId:orgId as string
      }, data:{
        maxCount:100
        
      }
    })
    // redirect("/")
    // revalidatePath(`/organization/${orgId}`)
    return data
    

  }

    
  

  revalidatePath(`/organization/${orgId}`)

}

export async function SetLimit({update}:{  update: number}) {

  // number can be 0,-1,1 depending on use :: fetch, create board, delete board

  const {orgId } = auth()

  if (!orgId) {
    console.error("Unauthorized!")
    return
  }

  

  const orgLimitData = await db.orgLimit.findUnique({
    where:{
      orgId:orgId as string
    }
  })
  
  


  // could not find organization then create row of orgId
  if (!orgLimitData) {
    // create a organization row in limit table 
    const data = await db.orgLimit.create({
      data:{
        orgId:orgId as string,
        boardCount:0,
        maxCount:5
        
      }
    })
    // redirect("/")
    // revalidatePath(`/organization/${orgId}`)
    return data
  } else {
    //increase the board count on deletion
    if(update == 1) {

      const data = await db.orgLimit.update({ where:{orgId:orgId as string}, data:{
        boardCount:{
          increment:1,
        }
      }})
      // redirect("/")
      // revalidatePath(`/organization/${orgId}`)
      return data;
    }


    //decrease the board count on deletion
    if(update == -1) {

      const data = await db.orgLimit.update({ where:{orgId:orgId as string}, data:{
        boardCount:{
          decrement:1,
        }
      }})
      // redirect("/")
      // revalidatePath(`/organization/${orgId}`)
      return data;
    }
    if(update == 0) {

      // redirect("/")
      // revalidatePath(`/organization/${orgId}`)
      return orgLimitData;
    }
  }


  


  // to redirect to board after successful creation of board 
  revalidatePath(`/organization/${orgId}`)
  

  


}