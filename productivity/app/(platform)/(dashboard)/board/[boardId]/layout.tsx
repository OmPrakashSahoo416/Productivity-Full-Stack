
import { ReactNode } from "react"
import BoardNavbar from "../_components/BoardNavbar"
import { FetchBoardUnique } from "@/actions/fetch-board"
// import { useParams } from "next/navigation"



async function BoardLayout ({children, params}: {children:ReactNode, params:{boardId:string}}) {

  // const {boardId} : {boardId:string} = useParams()
  // console.log(params.boardId)
  const boardId = params.boardId
  const board = await FetchBoardUnique(boardId)

  
  

  return (
  <>
  
  <div className="boardLayout  overflow-auto">

        <div className="boardnavbar ">
          <BoardNavbar board = {board}></BoardNavbar>
          
        </div>

        <div className="w-full ">
        {children}
        </div>
  </div>
  </>
  )
}

export default BoardLayout