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
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
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

  const {orgId}:{orgId:string} = useParams()

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
      <div className="boardList w-full flex ">
        <div className="newBoard flex flex-wrap">
          <div className="flex flex-wrap  md:justify-start justify-center items-center">
            {boardsList.map((board) => {
              // console.log(board);
              return (
                <Link key={board.id} href={`/board/${board.id}`} >
                  <div
                    id={board.id}
                    className="newBoardBox flex relative flex-col mr-5 mb-5 items-center justify-center w-[200px] h-[100px] bg-rose-50 rounded-sm"
                  >
                    <Image
                      className="hover:opacity-75 bg-center bg-cover bg-rose-200 rounded-sm drop-shadow-md "
                      fill
                      src={board.imageUrl}
                      alt={board.title!}
                    ></Image>

                    <div className="z-[50] p-1 bg-slate-600/20  rounded-sm">
                      <p className="text-white text-center font-semibold text-lg">
                        {board.title}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <NewBoardDialog>
          <hr className="border my-10 w-full border-slate-300" />
            <div
              role="button"
              className="newBoardBox mt-5 flex space-y-1 flex-col items-center justify-center w-[200px] h-[100px] bg-rose-50 rounded-sm"
            >
              <p className="text-slate-700 font-medium text-sm">
                Create new board
              </p>
              <p className="text-slate-600 font-normal text-xs">5 remaining</p>
            </div>
            <div className="flex flex-col">
              <CircleHelp
                size={15}
                className="text-rose-700 peer relative -top-5 -right-[175px]"
              ></CircleHelp>

              <p className="text-xs bg-slate-100 text-slate-700 peer-hover:block hidden p-2 rounded-md font-light">
                Free workspaces can have up to 5 open boards.
                <br />
                For unlimited boards upgrade this workspace.
              </p>
            </div>
          </NewBoardDialog>
        </div>
      </div>
    </>
  );
}

BoardList.Skeleton = function BoardListSkeleton() {
  return (
    <>
      <div className="flex flex-wrap md:justify-start justify-center items-center">
        
        
        <Skeleton className=" mr-5 mb-5 w-[200px] h-[100px] bg-rose-50 rounded-sm" />
        <Skeleton className=" mr-5 mb-5 w-[200px] h-[100px] bg-rose-50 rounded-sm" />
        <Skeleton className=" mr-5 mb-5 w-[200px] h-[100px] bg-rose-50 rounded-sm" />
        <Skeleton className=" mr-5 mb-5 w-[200px] h-[100px] bg-rose-50 rounded-sm" />
        <Skeleton className=" mr-5 mb-5 w-[200px] h-[100px] bg-rose-50 rounded-sm" />
        <Skeleton className=" mr-5 mb-5 w-[200px] h-[100px] bg-rose-50 rounded-sm" />
        
        
      </div>
    </>
  );
};
