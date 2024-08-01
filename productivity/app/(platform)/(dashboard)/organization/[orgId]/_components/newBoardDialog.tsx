import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { CreateBoard } from "@/actions/create-board"


export default function NewBoardDialog({children}: {
  children:ReactNode
}) {
  return (
    <>
    

    
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="space-y-2">
          <DialogHeader className="flex flex-col items-center space-y-2">
            <DialogTitle className="text-sm font-medium text-center text-slate-700">Create board</DialogTitle>
            <div className="boardPreview space-y-1 flex-col items-center justify-center w-[250px] h-[150px] bg-rose-50 rounded-sm">

            </div>
          </DialogHeader>

          {/* form  */}
            <form action={CreateBoard} className="space-y-5">
              <div>

              <label htmlFor="title" className="text-xs font-medium text-slate-700">Board Title</label>
              <Input name="title" required={true} id="title" />
              </div>
              <div>

              <label htmlFor="theme" className="text-xs font-medium text-slate-700">Board Theme</label>
              <Input name="theme" required={true} id="theme" />
              </div>
              <DialogClose className="w-full">
                <div>

                  <Button variant={"primary"} className="w-full">Create </Button>
                </div>
              </DialogClose>
            </form>
            <DialogDescription className="text-xs text-slate-800 font-light">
              By using images from Unsplash, you agree to their terms and conditions.
            </DialogDescription>
        </DialogContent>
      </Dialog>
      
    </>
  );
}
