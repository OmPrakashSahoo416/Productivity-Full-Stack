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
import { CreateBoard } from "@/actions/create-board";
import { toast } from "@/components/ui/use-toast";
import axios from "axios"


const images:string[] = []
export async function getUnsplashImages() {
  const accesskey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY!
  const unsplashroot = process.env.NEXT_PUBLIC_UNSPLASH_ROOT!
  console.log(accesskey)


  try {
    
    const data = await axios.get(`${unsplashroot}/search/photos?query=background&client_id=${accesskey}&page=1&per_page=2`)
    console.log(data)
    // data.data.results.map((res) => {
    //   images.push(res.urls.full.toString())
    // })
  } catch (error) {
    console.error(error)
    
  }
}

export default function NewBoardDialog({ children }: { children: ReactNode }) {
  
  // testing the unsplash api 
  // getUnsplashImages()
  console.log(images)
  

  


  return (
    <>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="space-y-2">
          <DialogHeader className="flex flex-col items-center space-y-2">
            <DialogTitle className="text-sm font-medium text-center text-slate-700">
              Create board
            </DialogTitle>
            <div className="boardPreview space-y-1 flex-col items-center justify-center w-[250px] h-[150px] bg-rose-50 rounded-sm"></div>
          </DialogHeader>

          {/* form  */}
          <form action={CreateBoard} className="space-y-5">
            <div>
              <label
                htmlFor="title"
                className="text-xs font-medium text-slate-700"
              >
                Board Title
              </label>
              <Input name="title" required={true} id="title" />
            </div>
            <div>
              <label
                htmlFor="theme"
                className="text-xs font-medium text-slate-700"
              >
                Board Theme
              </label>
              <Input name="theme" required={true} id="theme" />
            </div>
            <DialogClose className="w-full">
              <div>
                <Button
                  onClick={() => {
                    toast({
                      title: "Board created successfully",
                      className:"bg-rose-600 text-slate-100"
                      
                    })
                  }}
                  variant={"primary"}
                  className="w-full"
                >
                  Create{" "}
                </Button>
              </div>
            </DialogClose>
          </form>
          <DialogDescription className="text-xs text-slate-800 font-light">
            By using images from Unsplash, you agree to their terms and
            conditions.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
