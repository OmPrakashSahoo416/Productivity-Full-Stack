"use client"

import { DeleteList } from "@/actions/delete-list";
import { UpdateListTitle } from "@/actions/update-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { List } from "@prisma/client"
import {  X } from "lucide-react";
import { useState } from "react";

async function newListTitleSetting(listId:string,newTitle:string) {
  const newBoardWithTitle = await UpdateListTitle(listId, newTitle)
  // console.log(newBoardWithTitle)

}

function ListHeader({list} : {list:List}) {

  const [newListTitle, setNewListTitle] = useState(list?.title as string);



  return (
    <>
    <div className="listTitle  w-full flex items-center justify-normal sticky top-0 bg-slate-400 ">
          <Input onBlur={() => newListTitleSetting(list?.id as string,newListTitle as string)} value={newListTitle} placeholder="Enter list title" onChange={(e) => setNewListTitle(e.target.value)} className="text-slate-50 bg-transparent py-1 px-2 font-bold focus-visible:border-0 focus-visible:ring-0 placeholder:text-slate-300 focus-visible:ring-offset-0 border-none outline-none" ></Input>
          <Button onClick={() => DeleteList(list?.id, list?.boardId)}  variant={"ghost"} className="rounded-md hover:bg-rose-500 hover:text-slate-100 text-xs p-1 mr-1 h-auto w-auto" >Delete</Button>

        </div>
    </>
  )
}

export default ListHeader