import { DeleteCard } from "@/actions/delete-card";
import { UpdateCardDesc, UpdateCardTitle } from "@/actions/update-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@prisma/client";
import { X } from "lucide-react";
import { ReactNode, useState } from "react";

async function newCardTitleSetting(cardId:string,newTitle:string) {
  const newCardWithTitle = await UpdateCardTitle(cardId, newTitle)
  
}
async function newCardDescSetting(cardId:string,newDesc:string) {
  const newCardWithDesc = await UpdateCardDesc(cardId, newDesc)
  
}

export default function CardEdit({cardId, list, children}:{cardId:string, list : {
  cards: Card[];
} & {
  id: string;
  title: string;
  order: number;
  boardId: string;
}, children:ReactNode}) {

  const card = list.cards.find((card) => card.id == cardId)


  const [newCardTitle, setNewCardTitle] = useState(card?.title as string);
  const [newCardDesc, setNewCardDesc] = useState(card?.description as string);

  return (
    <>
    <div className="cardHeader flex border-b border-rose-600  justify-between rounded-t-md items-center">
      {children}

    <Input onBlur={() => newCardTitleSetting(card?.id as string,newCardTitle as string)} value={newCardTitle}  placeholder="Enter card title" onChange={(e) => setNewCardTitle(e.target.value)} className="cardTitle bg-transparent rounded-t-md  focus-visible:border-0 focus-visible:ring-0 placeholder:text-slate-500 focus-visible:ring-offset-0 border-none outline-none cardTitle text-sm p-1  rounded-b-none text-slate-700  font-semibold w-full" ></Input>

    <Button onClick={() => DeleteCard(card?.id as string, list?.boardId as string)}  variant={"ghost"} className="rounded-md border border-rose-200  hover:text-slate-100 hover:bg-rose-500 p-1 mr-1 text-xs  h-auto w-auto" >Delete</Button>
    </div>

    <textarea onBlur={() => newCardDescSetting(card?.id as string,newCardDesc as string)} value={newCardDesc}  placeholder="Enter card description" onChange={(e) => setNewCardDesc(e.target.value)} className="cardTitle leading-relaxed bg-transparent h-[50px] overflow-visible   focus-visible:border-0 focus-visible:ring-0 placeholder:text-slate-300 focus-visible:ring-offset-0 border-none outline-none cardDesc text-xs p-2 text-slate-700 font-semibold w-full " ></textarea>
    </>
  )
}