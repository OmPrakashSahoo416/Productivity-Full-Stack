"use client"
import { FetchActivity } from "@/actions/fetch-activity"
import { ActivityLog } from "@prisma/client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"


 function ActivityPage () {

  const {orgId}:{orgId:string} = useParams()
  const [activities, setActivities] = useState({data:[] as ActivityLog[], titles: [] as string[]})
  
 
  useEffect(() => {
    async function fetchActivities () {
      const activity = await FetchActivity({orgId})

      setActivities(activity)
      

    }
    fetchActivities()

  }, [])
  console.log(activities.titles)


  return (
    <>
    <div className="listofActivities flex flex-col space-y-3">
      <div className="header text-sm font-bold text-slate-700 mb-5">Activity</div>
      {
        
        activities.data.map((activity : ActivityLog, index) => {

          return (
            <div key={activity.id} className="activity  w-full flex items-center p-2 ">
              <div className="userImage">

              </div>
              <div className="flex content flex-col">
                <div className="flex items-center space-x-1">
                <div className="username font-bold text-sm text-slate-600">{activity.userName}</div>
                <div className="contentmessage text-sm font-medium text-slate-600">{`${activity.ActivityType.toLowerCase()}d ${activity.ActivityObject.toLowerCase()} ${activities.titles[index]}`}</div>

                </div>
                <div className="updatedtime text-xs text-slate-500">
                  Tue 20 May 2023

                </div>

              </div>
                           
            </div>
          )
        })
      }
      </div>
    </>
  )

}

export default ActivityPage