
import { ReactNode } from "react"
import BoardNavbar from "../_components/BoardNavbar"

import { FetchBoardUnique } from "@/actions/fetch-board"
// import { useAuth } from "@clerk/nextjs"
// import { redirect } from "next/navigation"
// import { useParams } from "next/navigation"



async function BoardLayout ({children, params}: {children:ReactNode, params:{boardId:string}}) {

  // const {boardId} : {boardId:string} = useParams()
  // console.log(params.boardId)
  const boardId = params.boardId
  const board = await FetchBoardUnique(boardId)


  
  

  return (
  <>

    <div className="boardLayout min-w-full w-fit ">

          <div className="boardnavbar ">
            <BoardNavbar board = {board}></BoardNavbar>
            
          </div>

          <div className="w-fit min-w-full h-full ">
          {children}
          </div>
    </div>
 
  
  </>
  )
}

export default BoardLayout