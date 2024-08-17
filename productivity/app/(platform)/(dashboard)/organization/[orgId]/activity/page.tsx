"use client"
import { FetchActivity } from "@/actions/fetch-activity"
// import { fetchTitleGeneric } from "@/actions/fetch-title-generic"
import { db } from "@/lib/db"
import { ActivityLog } from "@prisma/client"
import { useParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"



 function ActivityPage () {

  

  const {orgId}:{orgId:string} = useParams()
  const [activities, setActivities] = useState([] as ActivityLog[])
  
  
 
  useEffect(() => {
    async function fetchActivities () {
      const activity = await FetchActivity({orgId})

      setActivities(activity)

    }
    fetchActivities()

  }, [])
  // FetchingActivityTitle(activities)
  // console.log(titles)


  return (
    <>
    <div className="header text-sm font-bold text-slate-700 mb-5">Activity</div>
    <div className="listofActivities flex flex-col h-[500px] overflow-auto space-y-3">
      {
        (activities.length) == 0 ? (<p className="text-sm font-medium text-slate-600">No activities found in this organization.</p>):(
        
        activities.map((activity : ActivityLog, index) => {

          return (
            
            <div key={activity.id} className={"activity rounded-md space-x-3  w-full flex items-center p-2 bg-green-100" 
              + 
              (activity.ActivityType.toLowerCase() == "create" ? "  bg-green-100 " : "  ") + 
              (activity.ActivityType.toLowerCase() == "update" ? " bg-yellow-100 ": "  ") + 
              (activity.ActivityType.toLowerCase() == "delete" ? " bg-red-100 " : "  ")
            }>
              <div className="userImage">
                <img src={activity.userImage} className="h-6 w-6 rounded-full object-cover" alt="" />

              </div>
              <div className="flex content flex-col">
                <div className="flex items-center space-x-1">
                <div className="username font-bold text-sm text-slate-600">{activity.userName}</div>
                <div className="contentmessage text-sm font-medium text-slate-600">{`${activity.ActivityType.toLowerCase()}d ${activity.ActivityObject.toLowerCase()} "${activity.title}"`}</div>

                </div>
                <div className="updatedtime text-xs text-slate-500">
                  {`${activity.createdAt.toString().slice(3,7)} ${activity.createdAt.getDate()}, ${activity.createdAt.getFullYear()}, ${activity.createdAt.getHours()%12}:${activity.createdAt.getMinutes()%60} ${activity.createdAt.getHours() >= 12 ? 'PM':'AM'}`}

                </div>

              </div>
                           
            </div>
            
          )
        }))
      }
      </div>
    </>
  )

}


export default ActivityPage