"use client";
import { DeleteBoard } from "@/actions/delete-board";
import { FetchBoardUnique } from "@/actions/fetch-board";
import { UpdateBoardTitle } from "@/actions/update-board";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

async function newBoardTitleSetting(boardId: string, newTitle: string) {
  const newBoardWithTitle = await UpdateBoardTitle(boardId, newTitle);
  // console.log(newBoardWithTitle)
}

export default function BoardNavbar({
  board,
}: {
  board: {
    id: string;
    title: string | null;
    imageUrl: string;
    org_id: string;
  } | null;
}) {
  const [newBoardTitle, setNewBoardTitle] = useState(
    (board?.title as string) || ""
  );
  // console.log(newBoardTitle)

  return (
    <>
      <div className="BoardNavbar absolute bg-slate-600/5  px-10 flex items-center justify-between w-full h-[50px] backdrop-blur-sm ">
        <div className="boardTitle">
          <Input
            onBlur={() =>
              newBoardTitleSetting(board?.id as string, newBoardTitle as string)
            }
            value={newBoardTitle}
            onChange={(e) => setNewBoardTitle(e.target.value)}
            className="text-slate-50 bg-transparent font-bold focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 border-none outline-none"
          ></Input>
        </div>
        <div className="deleteButton">
          <Button
            onClick={() => DeleteBoard(board?.id as string)}
            className="bg-red-500 text-xs hover:bg-red-800"
            size={"sm"}
          >
            Delete Board
          </Button>
        </div>
      </div>
    </>
  );
}
