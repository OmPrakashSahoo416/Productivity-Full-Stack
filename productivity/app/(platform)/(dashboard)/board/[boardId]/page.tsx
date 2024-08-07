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
    className="h-screen p-5 w-screen bg-no-repeat bg-center bg-cover"
      style={{backgroundImage:`url(${board?.imageUrl})`}}>
        <p className="text-xl font-bold text-slate-50">{board?.title}</p>
      </div>
    </>
  )
}