
import { FetchBoardUnique } from "@/actions/fetch-board"
import { db } from "@/lib/db"
import ListComponent from "../_components/ListComponent"


export default async function BoardPage({
  params
}:{
  params: {boardId:string}
}) {

  // const {boardId} : {boardId:string} = useParams()
  const boardId = params.boardId

  

  const board = await FetchBoardUnique(boardId)

  // fetching the lists inside a single board along with card component and 
  // ordering in ascending order accroding to order field in db
  const lists = await db.list.findMany({
    where:{
      boardId:boardId,
    },
    include:{
      cards:{
        orderBy:{
          order:"asc"
        }
      }
    },
    orderBy:{
      order:"asc"
    }
  })


  return(
    <>
    <div 
    className="h-screen overflow-hidden p-5 w-screen bg-no-repeat bg-center bg-cover"
      style={{backgroundImage:`url(${board?.imageUrl})`}}>
          
        <div className="lists mt-10 flex space-x-5 h-fit ">

          <ListComponent></ListComponent>

        </div>

      </div>
    </> 
  )
}