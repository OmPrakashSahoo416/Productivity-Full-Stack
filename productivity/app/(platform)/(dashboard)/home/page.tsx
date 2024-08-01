
import { CreateBoard } from "@/actions/create-board";
import { Input } from "@/components/ui/input";
import Image from "next/image";


export default function Home () {
  

  return (
    <>
      <div className="homePage px-20 w-full">
      <div className="mt-2">
        <div className="homeContent flex flex-col items-center space-y-4">

          <div className="relative h-[150px] flex flex-col w-full">
          <Image fill className="object-cover" src="https://firebasestorage.googleapis.com/v0/b/notes-app-185ca.appspot.com/o/business-team-brainstorming-discussing-startup-project.png?alt=media&token=e6a48261-ee10-492f-a52b-4fb9fc3479c5" alt="" />
          </div>
          <p className="text-sm font-semibold text-slate-700">Stay on track and up to date</p>
          <p className="w-[500px] text-center text-slate-600">Invite people to boards and cards, leave comments, add due dates, and we'll show the most important activity here.</p>
        </div>
        
      
      </div>
      </div>
    </>
  )
}