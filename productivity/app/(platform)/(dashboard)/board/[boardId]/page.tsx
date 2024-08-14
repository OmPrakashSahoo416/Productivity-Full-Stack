
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
      order:"desc"
    }
  })


  return(
    <>
    <div 
    className="h-full p-5  bg-no-repeat bg-center  bg-cover"
      style={{backgroundImage:`url(${board?.imageUrl})`}}>
          
        <div className="lists mt-10   ">

          <ListComponent boardId={boardId} lists={lists}></ListComponent>

        </div>

      </div>
    </> 
  )
}