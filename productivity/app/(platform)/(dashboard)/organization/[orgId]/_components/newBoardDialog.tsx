
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
import { ReactNode, useEffect, useState } from "react";
import { CreateBoard } from "@/actions/create-board";
import { toast } from "@/components/ui/use-toast";
import { GetImages } from "@/lib/unsplash";
import Image from "next/image";

export default function NewBoardDialog({
  children,
}: {
  children: ReactNode;
}) {
  const [images, setImages] = useState<Array<string>>([]);
  const [boardBg, setBoardBg] = useState<string>("");

  const fetch = async () => {
    try {
      const responseImages = await GetImages();
      if (responseImages) {
        console.log(responseImages)
        setImages(responseImages)
      } else {
        console.error("Error fetching from unsplash");
      }

      
    } catch (error) {
      console.error(error)
      
    }


  }

  useEffect(() => {

    fetch()
  }, [])

  
    
    
  

  return (
    <>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="space-y-2 ">
          <DialogHeader className="flex flex-col items-center space-y-2">
            <DialogTitle className="text-sm font-medium text-center text-slate-700">
              Create board
              
            </DialogTitle>
            <div className="boardPreview relative  flex-col items-center justify-center w-[250px] h-[150px] bg-rose-50 rounded-sm">
            <div className="pt-5 flex space-x-5  justify-center">
                <div className="bg-slate-200 w-1/5 h-[125px] rounded-sm z-10"></div>
                <div className="bg-slate-200 w-1/5 h-[75px] rounded-sm z-10"></div>
                <div className="bg-slate-200 w-1/5 h-[100px] rounded-sm z-10"></div>
              </div>
              
            <Image className="hover:opacity-75 rounded-sm object-cover" fill src={boardBg}  alt={boardBg} ></Image>

            </div>
          </DialogHeader>
          <div className="unsplashPreview flex flex-col space-y-2 mb-2 items-start ">
            <p className="text-xs font-medium text-slate-700">Background</p>
            <div className="flex items-center space-x-2 ">
              {images.map(image => {
                return (
                  <div className="w-[60px] relative h-[40px]  rounded-sm " >
                    <button onClick={() => setBoardBg(image.toString())} >
                    <Image className="hover:opacity-75 rounded-sm" fill src={image.toString()}  alt={image.toString()} ></Image>
                    </button>
                  </div>

                )
              })}
              
              
            </div>
          </div>

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
                      className: "bg-rose-600 text-slate-100",
                    });
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
