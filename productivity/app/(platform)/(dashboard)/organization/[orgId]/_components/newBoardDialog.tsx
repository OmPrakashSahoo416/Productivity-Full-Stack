

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
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function NewBoardDialog({
  children,
}: {
  children: ReactNode;
}) {
  // to fetch the organization id we are using use Params from next js 
  const {orgId} : {orgId : string} = useParams();
  const orgId2 = useAuth().orgId as string


  const [images, setImages] = useState<Array<string>>([]);
  const [boardBg, setBoardBg] = useState<string>(""); // selected background for board
  const [imageAuthor, setImageAuthor] = useState<Array<string>>([]); // links to images creater

  const fetch = async () => {
    try {
      const bg_images_temp:string[] = []
      const bg_authors_temp:string[] = []
      const responseImages = await GetImages();
      // console.log(responseImages)
      if (responseImages) {
        // console.log(responseImages)
        
        responseImages.map((image) => {
          bg_images_temp.push(image.urls.regular.toString())
          bg_authors_temp.push(image.user.links.html.toString())
        })
        setImages(bg_images_temp)
        setImageAuthor(bg_authors_temp)
        // setImages(responseImages)
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
      <Dialog >
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="space-y-2 ">
          <DialogHeader className="flex flex-col items-center space-y-2">
            <DialogTitle className="text-sm font-medium text-center text-slate-700">
              Create board
              
            </DialogTitle>
            <div className="boardPreview relative  flex-col items-center justify-center w-[250px] h-[150px] bg-rose-500 rounded-sm">
            <div className="pt-5 flex space-x-5  justify-center">
                <div className="bg-slate-200 w-1/5 h-[100px] rounded-sm z-10"></div>
                <div className="bg-slate-200 w-1/5 h-[75px] rounded-sm z-10"></div>
                <div className="bg-slate-200 w-1/5 h-[100px] rounded-sm z-10"></div>
              </div>
            
              
              {boardBg && <Image className="hover:drop-shadow-lg rounded-sm object-cover bg-slate-500" fill src={boardBg}  alt={boardBg} ></Image>}
            

            </div>
          </DialogHeader>
          <div className="unsplashPreview flex flex-col space-y-2 mb-2 items-start ">
            <p className="text-xs font-medium text-slate-700">Background</p>
            <div className="flex items-center flex-wrap  ">
              {images.map((image,index) => {
                return (
                  <div key={index} className="w-[60px] mr-2 mb-2 group overflow-hidden relative h-[40px]  rounded-sm " >
                    <div  role="button" onClick={() => setBoardBg(image.toString())} >
                    <Image className="hover:opacity-75 rounded-sm" fill src={image.toString()}  alt={image.toString()} ></Image>
                    <Link href={imageAuthor[index]} className="hidden bg-slate-100/40 underline  top-7  relative text-[10px] truncate overflow-hidden text-slate-800 group-hover:flex" target="_blank">{imageAuthor[index]}</Link>
                    </div>
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
              <Input name="title" required={true}  id="title" />
              <Input type="hidden" value={boardBg} name="imageUrl" id="imageUrl" />
              <Input type="hidden" value={orgId || orgId2} name="org_id" id="org_id" />
            </div>
            
            <DialogClose className="w-full">
              <div>
                <Button
                type="submit"
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
            By using images from Unsplash, you agree to their <Link className="hover:underline" target="_blank" href="https://unsplash.com/terms" >terms and
            conditions</Link>.
          </DialogDescription>
        </DialogContent>
      </Dialog>
      
    </>
  );
}