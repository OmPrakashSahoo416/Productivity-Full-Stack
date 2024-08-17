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
import {useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";

// import { redirect } from "next/navigation";

interface boardType {
  id: string;
  title: string | null;
  imageUrl: string;
  org_id: string;
}

export default function BoardList() {
  // let boardsList: boardType[] = [];
  const [boardsList, setBoardsList] = useState<boardType[]>([]);
  

  const { orgId }: { orgId: string } = useParams();

  async function fetch() {
    try {
      // to get some data from the database but this is a client side file so doing all this
      const boards = await FetchDb(orgId);

      setBoardsList(boards);
    } catch (err) {
      console.log("Could not fetch database");
    }
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="boardList w-full">
        <div className="newBoard flex flex-wrap">
        
          <div className="flex flex-wrap  md:justify-start justify-center items-center">
            {boardsList.map((board) => {
              // console.log(board);
              return (
                
                
                  <Link key={board.id} href={`/board/${board.id}`}>
                    <div
                      id={board.id}
                      className="newBoardBox  hover:drop-shadow-xl group flex relative flex-col mr-5 mb-5 items-center justify-center w-[200px] h-[100px]  rounded-sm"
                      
                    >
                      

                      <Image
                        className=" bg-center shadow-inner shadow-slate-800  bg-cover bg-rose-100 rounded-sm drop-shadow-lg "
                        fill
                        src={board.imageUrl}
                        alt={board.title!}
                      ></Image>

                      <div className="z-[50] p-1 rounded-sm">
                        <p className="text-white text-center font-semibold text-lg">
                          {board.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                  
                
              );
            })}
          </div>
          
          
          </div>
          {boardsList.length < 5 ? (
            <NewBoardDialog >
            <hr className="border-1 w-full m-auto border-slate-300" />

            <div
              role="button"
              className="newBoardBox mt-5 flex space-y-1 flex-col items-center justify-center w-[200px] h-[100px] bg-rose-50 rounded-sm"
            >
              <p className="text-slate-700 font-medium text-sm">
                Create new board
              </p>
              <p className="text-slate-600 font-normal text-xs">{`${5 - boardsList.length} remaining`}</p>
            </div>

            <div className="flex flex-col mb-5">
              <CircleHelp
                size={15}
                className="text-rose-700 peer relative -top-5 -right-[175px]"
              ></CircleHelp>

              <p className="text-xs bg-slate-100 w-[200px]  text-slate-700 peer-hover:visible invisible p-2 rounded-md font-light">
                Free workspaces can have up to 5 open boards.
                <br />
                For unlimited boards upgrade this workspace.
              </p>
            </div>
          </NewBoardDialog>

          ):(<></>)}
          
        
      </div>
    </>
  );
}

