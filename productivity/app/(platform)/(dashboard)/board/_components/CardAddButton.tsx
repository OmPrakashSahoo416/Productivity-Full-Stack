"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";
import { CreateCard } from "@/actions/create-card";
import { toast } from "@/components/ui/use-toast";

function CardAddButton({listId, boardId}:{listId:string,boardId:string}) {
  // this will be creating card component inside of a list in a board
  const [isEditing, setIsEditing] = useState(false);
  const [cardTitle,setCardTitle] = useState("")
  const [cardDesc,setCardDesc] = useState("")

  function onSubmitNewCard  () {
    
    toast({
      title: "Card created successfully",
      className: "bg-rose-600 text-slate-100",
    });

    return setIsEditing(false);
  }

  useEffect(() => {
    setCardTitle("");
    setCardDesc("");
  }, [isEditing]);

  if (isEditing) {
    return (
      <>
      <div className="mt-2 sticky bottom-0 z-[100]  rounded-md" >

      
      <form
          
          onSubmit={() => onSubmitNewCard()}
          action={CreateCard}
          
          className=" backdrop-blur-sm drop-shadow-md w-[275px] bg-slate-100/20 hover:bg-slate-100/40 rounded-md text-sm flex flex-col items-center p-3 font-semibold space-y-2"
        >
          <Input
            required
            placeholder="Enter card title"
            value={cardTitle as string}
            
            onChange={(e) => setCardTitle(e.target.value)}
            className="flex w-full focus-visible:ring-0 focus-visible:ring-offset-0 py-1 text-slate-600   items-center justify-center text-sm font-semibold space-x-2"
            autoFocus
            
            type="text"
            name="title"
          />
          <Input
            required
            placeholder="Enter card description"
            value={cardDesc as string}
            
            onChange={(e) => setCardDesc(e.target.value)}
            className="focus-visible:ring-0 text-xs focus-visible:ring-offset-0 py-1 text-slate-600"
            
            
            type="text"
            name="desc"
          />
          <Input
            className="hidden"
            hidden
            defaultValue={boardId as string}
            name="boardId"
            id="boardId"
          ></Input>
          <Button type="button" onClick={() => setIsEditing(false)} className="text-xs w-full font-semibold flex justify-center items-center text-slate-100 bg-rose-600" size={"sm"}>Close</Button>
          <Input
            className="hidden"
            hidden
            defaultValue={listId as string}
            name="listId"
            id="listId"
          ></Input>
          <Button
            type="submit"
            variant={"primary"}
            size={"sm"}
            className="text-xs hidden font-semibold"
          >
            Add list
          </Button>
        </form>
        </div>
         
      </>
    );
  }

  


  return (
    <>
       <Button onClick={() => setIsEditing(true)} variant={"ghost"} className="flex mt-2 w-full text-slate-800 sticky bottom-0  rounded-t-none items-center justify-center text-xs font-semibold space-x-2"><Plus size={12}></Plus> Add card</Button>
      
    </>
  );
}

export default CardAddButton;
