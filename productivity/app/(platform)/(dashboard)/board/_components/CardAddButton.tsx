import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


function CardAddButton() {


  return(
    <>
    <Button variant={"ghost"} className="flex w-full text-slate-100 rounded-t-none items-center justify-center text-sm font-semibold space-x-2"><Plus size={12}></Plus> Add card</Button>
    </>
  )
}

export default CardAddButton