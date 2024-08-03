// "use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";
import NewBoardDialog from "./newBoardDialog";
import { db } from "@/lib/db";
import { FetchDb } from "@/actions/fetch-board";
import { useEffect } from "react";


// const boards = db.board.findMany()

export default function BoardList() {
  let boardsList = []

  async function fetch() {
    const boards = await db.board.findMany()
    if (boards) {
      // boardsList = boards
      console.log(boards)

    } else {
      console.error("Not found")
    }
  }
  useEffect(() => {

    fetch()

  }, [])

  

  


  return (
    <>
      <div className="boardList">
        <div className="newBoard">
          <NewBoardDialog>
            <div
              role="button"
              className="newBoardBox flex space-y-1 flex-col items-center justify-center w-[200px] h-[100px] bg-rose-50 rounded-sm"
            >
              <p className="text-slate-700 font-medium text-sm">
                Create new board
              </p>
              <p className="text-slate-600 font-normal text-xs">5 remaining</p>
            </div>
          </NewBoardDialog>
          <div className="relative top-[-20px] left-[180px]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CircleHelp className="text-rose-600 w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs text-slate-600 font-light">
                    Free workspaces can have up to 5 open boards.
                    <br /> For unlimited boards upgrade this workspace.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </>
  );
}
