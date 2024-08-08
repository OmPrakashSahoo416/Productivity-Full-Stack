import { FetchBoardUnique } from "@/actions/fetch-board"
import { db } from "@/lib/db"
// import { useParams } from "next/navigation"



export default async function BoardPage({
  params
}:{
  params: {boardId:string}
}) {

  // const {boardId} : {boardId:string} = useParams()
  const boardId = params.boardId

  const board = await FetchBoardUnique(boardId)


  return(
    <>
    <div 
    className="h-screen overflow-hidden p-5 w-screen bg-no-repeat bg-center bg-cover"
      style={{backgroundImage:`url(${board?.imageUrl})`}}>
          
        <div className="boardContents  mt-[50px]">
          <p className=" font-bold  text-slate-50 ">{board?.id}</p>
        </div>
      </div>
    </> 
  )
}